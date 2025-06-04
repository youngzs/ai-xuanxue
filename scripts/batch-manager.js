// 64卦数据库批量处理管理器
// 提供数据抓取、验证、合并、导出等功能

const fs = require('fs');
const path = require('path');
const { 
    extractAllHexagrams, 
    hexagramPatterns, 
    hexagramNames 
} = require('./extract-hexagram-data.js');

// 配置文件
const CONFIG = {
    // 抓取配置
    extraction: {
        batchSize: 5,        // 批次大小
        delayMs: 2000,       // 延迟时间
        timeout: 15000,      // 超时时间
        retryCount: 3        // 重试次数
    },
    
    // 文件路径
    paths: {
        source: path.join(__dirname, '../source/js'),
        progress: path.join(__dirname, '../source/js/progress'),
        output: path.join(__dirname, '../source/js'),
        backup: path.join(__dirname, '../backup')
    },
    
    // 数据文件
    files: {
        mainDatabase: 'hexagram-database.js',
        completeData: 'complete-hexagram-data.js',
        extractedData: 'extracted-hexagram-database.js',
        mergedData: 'merged-hexagram-database.js'
    }
};

// 任务管理器
class BatchManager {
    constructor() {
        this.ensureDirectories();
    }
    
    // 确保目录存在
    ensureDirectories() {
        Object.values(CONFIG.paths).forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        });
    }
    
    // 执行完整的数据库构建流程
    async buildCompleteDatabase(options = {}) {
        console.log('🚀 开始构建完整的64卦数据库...\n');
        
        try {
            // 1. 备份现有数据
            await this.backupExistingData();
            
            // 2. 批量抓取数据
            const extractedData = await this.extractData(options);
            
            // 3. 验证数据完整性
            const validationResult = await this.validateData(extractedData);
            
            // 4. 合并所有数据源
            const mergedData = await this.mergeAllData(extractedData);
            
            // 5. 生成最终数据库
            await this.generateFinalDatabase(mergedData);
            
            // 6. 生成统计报告
            await this.generateComprehensiveReport(mergedData, validationResult);
            
            console.log('✅ 数据库构建完成！');
            return mergedData;
            
        } catch (error) {
            console.error('❌ 数据库构建失败:', error.message);
            throw error;
        }
    }
    
    // 批量抓取数据
    async extractData(options = {}) {
        console.log('📡 开始批量抓取卦象数据...');
        
        const extractOptions = {
            ...CONFIG.extraction,
            ...options
        };
        
        return await extractAllHexagrams(extractOptions);
    }
    
    // 从进度文件恢复数据
    async recoverFromProgress() {
        console.log('🔄 尝试从进度文件恢复数据...');
        
        const progressDir = CONFIG.paths.progress;
        if (!fs.existsSync(progressDir)) {
            console.log('没有找到进度文件');
            return {};
        }
        
        const progressFiles = fs.readdirSync(progressDir)
            .filter(file => file.endsWith('.json'))
            .sort();
        
        if (progressFiles.length === 0) {
            console.log('没有找到有效的进度文件');
            return {};
        }
        
        // 选择最新的进度文件
        const latestFile = progressFiles[progressFiles.length - 1];
        const filePath = path.join(progressDir, latestFile);
        
        try {
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            console.log(`✅ 从 ${latestFile} 恢复了 ${Object.keys(data).length} 个卦象`);
            return data;
        } catch (error) {
            console.error('❌ 恢复进度失败:', error.message);
            return {};
        }
    }
    
    // 验证数据完整性
    async validateData(data) {
        console.log('🔍 验证数据完整性...');
        
        const validation = {
            total: Object.keys(data).length,
            complete: 0,
            partial: 0,
            missing: 0,
            errors: [],
            missingPatterns: [],
            duplicates: [],
            fieldStats: {}
        };
        
        // 检查是否有所有64卦的模式
        Object.entries(hexagramPatterns).forEach(([number, pattern]) => {
            if (!data[pattern]) {
                validation.missingPatterns.push({
                    number: parseInt(number),
                    pattern,
                    name: hexagramNames[number]
                });
            }
        });
        
        // 验证数据完整性
        Object.entries(data).forEach(([pattern, hexData]) => {
            if (!hexData) {
                validation.errors.push(`模式 ${pattern} 的数据为空`);
                return;
            }
            
            // 检查必需字段
            const requiredFields = ['number', 'name', 'description', 'oracle', 'judgment'];
            const missingFields = requiredFields.filter(field => !hexData[field] || hexData[field] === '待补充');
            
            if (missingFields.length === 0) {
                validation.complete++;
            } else if (missingFields.length < requiredFields.length) {
                validation.partial++;
            } else {
                validation.missing++;
            }
            
            // 统计字段完整性
            Object.keys(hexData).forEach(field => {
                if (!validation.fieldStats[field]) {
                    validation.fieldStats[field] = { total: 0, complete: 0 };
                }
                validation.fieldStats[field].total++;
                if (hexData[field] && hexData[field] !== '待补充' && hexData[field] !== '') {
                    validation.fieldStats[field].complete++;
                }
            });
        });
        
        // 检查重复的卦象编号
        const numberCounts = {};
        Object.values(data).forEach(hex => {
            if (hex.number) {
                numberCounts[hex.number] = (numberCounts[hex.number] || 0) + 1;
            }
        });
        
        Object.entries(numberCounts).forEach(([number, count]) => {
            if (count > 1) {
                validation.duplicates.push(`卦象编号 ${number} 重复 ${count} 次`);
            }
        });
        
        console.log(`✅ 验证完成: 完整 ${validation.complete}, 部分 ${validation.partial}, 缺失 ${validation.missing}`);
        
        if (validation.errors.length > 0) {
            console.log('⚠️  发现错误:', validation.errors);
        }
        
        return validation;
    }
    
    // 合并所有数据源
    async mergeAllData(extractedData) {
        console.log('🔗 合并所有数据源...');
        
        const mergedData = {};
        
        // 1. 加载主数据库
        const mainDbPath = path.join(CONFIG.paths.source, CONFIG.files.mainDatabase);
        let mainData = {};
        if (fs.existsSync(mainDbPath)) {
            try {
                const content = fs.readFileSync(mainDbPath, 'utf8');
                // 简单的模块解析（实际项目中可能需要更复杂的处理）
                const match = content.match(/export const hexagramDatabase = (\{[\s\S]*?\});/);
                if (match) {
                    mainData = eval(`(${match[1]})`);
                }
                console.log(`📖 加载主数据库: ${Object.keys(mainData).length} 个卦象`);
            } catch (error) {
                console.error('⚠️  加载主数据库失败:', error.message);
            }
        }
        
        // 2. 加载补充数据
        const completeDataPath = path.join(CONFIG.paths.source, CONFIG.files.completeData);
        let completeData = {};
        if (fs.existsSync(completeDataPath)) {
            try {
                const content = fs.readFileSync(completeDataPath, 'utf8');
                const match = content.match(/export const completeHexagramData = (\{[\s\S]*?\});/);
                if (match) {
                    completeData = eval(`(${match[1]})`);
                }
                console.log(`📚 加载补充数据: ${Object.keys(completeData).length} 个卦象`);
            } catch (error) {
                console.error('⚠️  加载补充数据失败:', error.message);
            }
        }
        
        // 3. 合并策略：优先级 抓取数据 > 补充数据 > 主数据库
        const allPatterns = new Set([
            ...Object.keys(mainData),
            ...Object.keys(completeData),
            ...Object.keys(extractedData)
        ]);
        
        allPatterns.forEach(pattern => {
            const base = mainData[pattern] || {};
            const supplement = completeData[pattern] || {};
            const extracted = extractedData[pattern] || {};
            
            // 合并数据，优先使用非空、非"待补充"的值
            mergedData[pattern] = this.mergeHexagramData(base, supplement, extracted);
        });
        
        console.log(`✅ 合并完成: ${Object.keys(mergedData).length} 个卦象`);
        return mergedData;
    }
    
    // 合并单个卦象数据
    mergeHexagramData(base, supplement, extracted) {
        const merged = { ...base };
        
        // 合并补充数据
        Object.entries(supplement).forEach(([key, value]) => {
            if (value && value !== '待补充' && value !== '') {
                if (!merged[key] || merged[key] === '待补充' || merged[key] === '') {
                    merged[key] = value;
                }
            }
        });
        
        // 合并抓取数据（最高优先级）
        Object.entries(extracted).forEach(([key, value]) => {
            if (value && value !== '待补充' && value !== '') {
                merged[key] = value;
            }
        });
        
        return merged;
    }
    
    // 生成最终数据库文件
    async generateFinalDatabase(mergedData) {
        console.log('📝 生成最终数据库文件...');
        
        const timestamp = new Date().toISOString();
        const stats = this.calculateStats(mergedData);
        
        const fileContent = `// 完整的64卦数据库 - 批量构建版本
// 构建时间: ${timestamp}
// 数据统计: ${stats.total} 个卦象，完整度 ${stats.completionRate}
// 数据来源: 易安居网站、传统典籍等权威资料

export const hexagramDatabase = ${JSON.stringify(mergedData, null, 4)};

// 数据库统计信息
export const databaseStats = ${JSON.stringify(stats, null, 4)};

// 卦象查找函数
export function getHexagram(pattern) {
    const hexInfo = hexagramDatabase[pattern];
    if (!hexInfo) {
        return {
            number: 0,
            name: '未知',
            description: '未知卦象',
            trigrams: '未知',
            nature: '请检查',
            oracle: '此卦象暂未收录',
            judgment: '此卦象暂未收录，请重新起卦',
            business: '暂无信息',
            love: '暂无信息',
            health: '暂无信息',
            advice: '请重新起卦或检查输入'
        };
    }
    
    return hexInfo;
}

// 根据卦象编号获取卦象
export function getHexagramByNumber(number) {
    const entries = Object.entries(hexagramDatabase);
    const found = entries.find(([pattern, info]) => info.number === number);
    return found ? getHexagram(found[0]) : null;
}

// 获取所有卦象列表
export function getAllHexagrams() {
    return Object.entries(hexagramDatabase).map(([pattern, info]) => ({
        pattern,
        number: info.number,
        name: info.name,
        description: info.description,
        nature: info.nature
    })).sort((a, b) => a.number - b.number);
}

// 搜索卦象
export function searchHexagrams(query) {
    const results = [];
    Object.entries(hexagramDatabase).forEach(([pattern, info]) => {
        if (info.name.includes(query) || 
            info.description.includes(query) || 
            info.nature.includes(query) ||
            info.oracle.includes(query)) {
            results.push({
                pattern,
                number: info.number,
                name: info.name,
                description: info.description,
                nature: info.nature
            });
        }
    });
    return results.sort((a, b) => a.number - b.number);
}

// 获取数据库统计
export function getDatabaseStats() {
    return databaseStats;
}

// 64卦名称对照表
export const hexagramNames = {
    1: '乾为天', 2: '坤为地', 3: '水雷屯', 4: '山水蒙', 5: '水天需', 6: '天水讼',
    7: '地水师', 8: '水地比', 9: '风天小畜', 10: '天泽履', 11: '地天泰', 12: '天地否',
    13: '天火同人', 14: '火天大有', 15: '地山谦', 16: '雷地豫', 17: '泽雷随', 18: '山风蛊',
    19: '地泽临', 20: '风地观', 21: '火雷噬嗑', 22: '山火贲', 23: '山地剥', 24: '地雷复',
    25: '天雷无妄', 26: '山天大畜', 27: '山雷颐', 28: '泽风大过', 29: '坎为水', 30: '离为火',
    31: '泽山咸', 32: '雷风恒', 33: '天山遁', 34: '雷天大壮', 35: '火地晋', 36: '地火明夷',
    37: '风火家人', 38: '火泽睽', 39: '水山蹇', 40: '雷水解', 41: '山泽损', 42: '风雷益',
    43: '泽天夬', 44: '天风姤', 45: '泽地萃', 46: '地风升', 47: '泽水困', 48: '水风井',
    49: '泽火革', 50: '火风鼎', 51: '震为雷', 52: '艮为山', 53: '风山渐', 54: '雷泽归妹',
    55: '雷火丰', 56: '火山旅', 57: '巽为风', 58: '兑为泽', 59: '风水涣', 60: '水泽节',
    61: '风泽中孚', 62: '雷山小过', 63: '水火既济', 64: '火水未济'
};`;

        const outputPath = path.join(CONFIG.paths.output, CONFIG.files.mergedData);
        fs.writeFileSync(outputPath, fileContent, 'utf8');
        
        console.log(`✅ 最终数据库已保存: ${outputPath}`);
    }
    
    // 计算数据库统计信息
    calculateStats(data) {
        const stats = {
            total: Object.keys(data).length,
            complete: 0,
            partial: 0,
            minimal: 0,
            fields: {},
            completionRate: '0%',
            generatedAt: new Date().toISOString()
        };
        
        const requiredFields = ['oracle', 'judgment', 'business', 'love', 'health', 'advice'];
        
        Object.values(data).forEach(hex => {
            const completeFields = requiredFields.filter(field => 
                hex[field] && hex[field] !== '待补充' && hex[field] !== ''
            ).length;
            
            if (completeFields === requiredFields.length) {
                stats.complete++;
            } else if (completeFields > requiredFields.length / 2) {
                stats.partial++;
            } else {
                stats.minimal++;
            }
            
            // 统计各字段
            Object.keys(hex).forEach(field => {
                if (!stats.fields[field]) {
                    stats.fields[field] = { total: 0, complete: 0 };
                }
                stats.fields[field].total++;
                if (hex[field] && hex[field] !== '待补充' && hex[field] !== '') {
                    stats.fields[field].complete++;
                }
            });
        });
        
        stats.completionRate = `${Math.round((stats.complete + stats.partial * 0.5) / stats.total * 100)}%`;
        
        return stats;
    }
    
    // 备份现有数据
    async backupExistingData() {
        console.log('💾 备份现有数据...');
        
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const backupDir = path.join(CONFIG.paths.backup, timestamp);
        
        if (!fs.existsSync(backupDir)) {
            fs.mkdirSync(backupDir, { recursive: true });
        }
        
        // 备份主要文件
        Object.values(CONFIG.files).forEach(filename => {
            const sourcePath = path.join(CONFIG.paths.source, filename);
            if (fs.existsSync(sourcePath)) {
                const backupPath = path.join(backupDir, filename);
                fs.copyFileSync(sourcePath, backupPath);
            }
        });
        
        console.log(`✅ 备份完成: ${backupDir}`);
    }
    
    // 生成综合报告
    async generateComprehensiveReport(mergedData, validationResult) {
        console.log('📊 生成综合报告...');
        
        const stats = this.calculateStats(mergedData);
        const timestamp = new Date().toISOString();
        
        const reportContent = `# 64卦数据库构建报告

生成时间: ${timestamp}

## 📊 总体统计

- **总卦象数**: ${stats.total}/64 (${stats.total === 64 ? '✅' : '❌'})
- **完整卦象**: ${stats.complete} 个 (${Math.round(stats.complete/64*100)}%)
- **部分完整**: ${stats.partial} 个 (${Math.round(stats.partial/64*100)}%)
- **基础数据**: ${stats.minimal} 个 (${Math.round(stats.minimal/64*100)}%)
- **总体完整度**: ${stats.completionRate}

## 📋 字段完整性统计

| 字段 | 完整数量 | 完整率 |
|------|----------|--------|
${Object.entries(stats.fields).map(([field, data]) => 
    `| ${field} | ${data.complete}/${data.total} | ${Math.round(data.complete/data.total*100)}% |`
).join('\n')}

## 🔍 数据验证结果

- **验证总数**: ${validationResult.total}
- **完整数据**: ${validationResult.complete}
- **部分数据**: ${validationResult.partial}  
- **缺失数据**: ${validationResult.missing}
- **错误数量**: ${validationResult.errors.length}
- **重复数量**: ${validationResult.duplicates.length}

${validationResult.missingPatterns.length > 0 ? `
### ⚠️ 缺失的卦象模式
${validationResult.missingPatterns.map(item => 
    `- 第${item.number}卦 ${item.name} (${item.pattern})`
).join('\n')}
` : '### ✅ 所有卦象模式完整'}

${validationResult.errors.length > 0 ? `
### ❌ 发现的错误
${validationResult.errors.map(error => `- ${error}`).join('\n')}
` : ''}

${validationResult.duplicates.length > 0 ? `
### 🔄 重复数据
${validationResult.duplicates.map(dup => `- ${dup}`).join('\n')}
` : ''}

## 📁 生成文件

- **主数据库**: \`${CONFIG.files.mergedData}\`
- **抓取数据**: \`${CONFIG.files.extractedData}\`
- **统计报告**: \`batch-report.md\`

## 🔧 使用方法

### 导入数据库
\`\`\`javascript
import { hexagramDatabase, getHexagram } from './source/js/${CONFIG.files.mergedData}';

// 获取卦象
const qianHex = getHexagram('111111');
console.log(qianHex.name); // '乾'
\`\`\`

### 获取统计信息
\`\`\`javascript
import { getDatabaseStats } from './source/js/${CONFIG.files.mergedData}';

const stats = getDatabaseStats();
console.log(\`数据库完整度: \${stats.completionRate}\`);
\`\`\`

## 📈 质量评估

${stats.completionRate >= '90%' ? '🟢 **优秀** - 数据完整度很高，可以直接使用' :
  stats.completionRate >= '70%' ? '🟡 **良好** - 数据基本完整，建议补充缺失项' :
  '🔴 **需要改进** - 数据完整度较低，需要大量补充'}

## 🚀 下一步

1. ${stats.complete < 64 ? '补充缺失的卦象数据' : '✅ 所有卦象数据完整'}
2. ${validationResult.errors.length > 0 ? '修复发现的数据错误' : '✅ 无数据错误'}
3. ${Object.values(stats.fields).some(f => f.complete < f.total) ? '完善不完整的字段' : '✅ 所有字段完整'}
4. 验证数据准确性
5. 添加爻辞详细信息

---

*本报告由批量处理管理器自动生成*`;

        const reportPath = path.join(__dirname, 'batch-report.md');
        fs.writeFileSync(reportPath, reportContent, 'utf8');
        
        console.log(`✅ 综合报告已保存: ${reportPath}`);
    }
    
    // 清理临时文件
    async cleanup() {
        console.log('🧹 清理临时文件...');
        
        const progressDir = CONFIG.paths.progress;
        if (fs.existsSync(progressDir)) {
            const files = fs.readdirSync(progressDir);
            files.forEach(file => {
                if (file.startsWith('batch_') && file.endsWith('.json')) {
                    fs.unlinkSync(path.join(progressDir, file));
                }
            });
        }
        
        console.log('✅ 清理完成');
    }
}

// 命令行接口
async function main() {
    const manager = new BatchManager();
    const args = process.argv.slice(2);
    
    // 解析命令行参数
    const command = args[0] || 'build';
    const options = {};
    
    for (let i = 1; i < args.length; i += 2) {
        const key = args[i]?.replace('--', '');
        const value = args[i + 1];
        if (key && value) {
            if (key === 'start') options.startFrom = parseInt(value);
            if (key === 'end') options.endAt = parseInt(value);
            if (key === 'batch') options.batchSize = parseInt(value);
            if (key === 'delay') options.delayMs = parseInt(value);
        }
    }
    
    console.log(`🎯 执行命令: ${command}`);
    console.log(`⚙️  参数配置:`, options);
    
    try {
        switch (command) {
            case 'build':
                await manager.buildCompleteDatabase(options);
                break;
                
            case 'extract':
                const extractedData = await manager.extractData(options);
                console.log(`✅ 抓取完成: ${Object.keys(extractedData).length} 个卦象`);
                break;
                
            case 'recover':
                const recoveredData = await manager.recoverFromProgress();
                console.log(`✅ 恢复完成: ${Object.keys(recoveredData).length} 个卦象`);
                break;
                
            case 'merge':
                const mergedData = await manager.mergeAllData({});
                await manager.generateFinalDatabase(mergedData);
                console.log(`✅ 合并完成: ${Object.keys(mergedData).length} 个卦象`);
                break;
                
            case 'validate':
                const testData = await manager.recoverFromProgress();
                const validation = await manager.validateData(testData);
                console.log('✅ 验证完成');
                break;
                
            case 'cleanup':
                await manager.cleanup();
                break;
                
            default:
                console.log(`❌ 未知命令: ${command}`);
                console.log(`可用命令: build, extract, recover, merge, validate, cleanup`);
                break;
        }
        
    } catch (error) {
        console.error(`❌ 执行失败:`, error.message);
        process.exit(1);
    }
}

// 如果直接运行此脚本
if (require.main === module) {
    main();
}

module.exports = { BatchManager, CONFIG }; 