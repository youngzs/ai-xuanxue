/**
 * 六十四卦数据整合模块
 * 统一处理不同来源的卦象数据，确保格式一致性
 */

// 导入基础数据
// 注意：由于是在浏览器环境中，这里不使用ES6 import，而是直接引用全局变量

/**
 * 统一的六十四卦数据库
 * 将不同来源的数据整合为统一格式
 */
class HexagramIntegration {
    constructor() {
        this.database = {};
        this.initializeDatabase();
    }
    
    initializeDatabase() {
        // 首先加载简化数据
        if (typeof HEXAGRAM_EXTRACTED_DATA !== 'undefined') {
            Object.assign(this.database, HEXAGRAM_EXTRACTED_DATA);
        }
        
        // 如果有完整数据库，进行合并
        if (typeof extractedHexagramDatabase !== 'undefined') {
            this.mergeExtractedDatabase();
        }
        
        // 确保所有64卦都有基本数据
        this.ensureCompleteDatabase();
        
        console.log(`卦象数据库初始化完成，共包含 ${Object.keys(this.database).length} 个卦象`);
    }
    
    /**
     * 合并外部提取的数据库
     */
    mergeExtractedDatabase() {
        for (const [binary, data] of Object.entries(extractedHexagramDatabase)) {
            // 转换二进制格式（如果需要）
            const normalizedBinary = this.normalizeBinary(binary);
            
            if (!this.database[normalizedBinary]) {
                // 如果简化数据库中没有，直接添加
                this.database[normalizedBinary] = this.convertToStandardFormat(data);
            } else {
                // 如果已存在，合并更详细的信息
                this.database[normalizedBinary] = {
                    ...this.database[normalizedBinary],
                    ...this.convertToStandardFormat(data)
                };
            }
        }
    }
    
    /**
     * 规范化二进制格式
     */
    normalizeBinary(binary) {
        // 确保是6位二进制字符串
        return binary.toString().padStart(6, '0');
    }
    
    /**
     * 将外部数据转换为标准格式
     */
    convertToStandardFormat(data) {
        return {
            name: data.name || data.description || '未知',
            number: data.number || 0,
            binary: data.binary || '',
            upperTrigram: this.extractUpperTrigram(data),
            lowerTrigram: this.extractLowerTrigram(data),
            meaning: data.meaning || data.nature || '',
            judgment: data.judgment || data.oracle || '',
            interpretation: {
                general: data.judgment || data.description || '',
                career: data.business || '事业方面需要谨慎考虑',
                wealth: data.fortune || '财运方面建议保持稳健',
                love: data.love || '感情方面需要真诚相待',
                health: data.health || '健康方面要注意调养',
                advice: data.advice || '建议保持平和心态'
            }
        };
    }
    
    /**
     * 提取上卦信息
     */
    extractUpperTrigram(data) {
        if (data.trigrams) {
            const parts = data.trigrams.split(/[上下]/);
            return parts[0] || '';
        }
        return data.upperTrigram || '';
    }
    
    /**
     * 提取下卦信息
     */
    extractLowerTrigram(data) {
        if (data.trigrams) {
            const parts = data.trigrams.split(/[上下]/);
            return parts[parts.length - 1] || '';
        }
        return data.lowerTrigram || '';
    }
    
    /**
     * 确保数据库包含所有64卦的基本信息
     */
    ensureCompleteDatabase() {
        // 生成所有可能的6位二进制组合
        for (let i = 0; i < 64; i++) {
            const binary = i.toString(2).padStart(6, '0');
            
            if (!this.database[binary]) {
                this.database[binary] = this.generateDefaultHexagram(binary, i + 1);
            }
        }
    }
    
    /**
     * 生成默认卦象数据
     */
    generateDefaultHexagram(binary, number) {
        const upperTrigram = this.getTrigramName(binary.substring(0, 3));
        const lowerTrigram = this.getTrigramName(binary.substring(3, 6));
        
        return {
            name: `${upperTrigram}${lowerTrigram}`,
            number: number,
            binary: binary,
            upperTrigram: upperTrigram,
            lowerTrigram: lowerTrigram,
            meaning: '待补充',
            judgment: '待补充',
            interpretation: {
                general: '此卦象的详细解释正在完善中',
                career: '事业方面建议谨慎行事',
                wealth: '财运方面保持稳健',
                love: '感情方面真诚相待',
                health: '健康方面注意调养',
                advice: '建议保持平和心态，顺应自然'
            }
        };
    }
    
    /**
     * 根据三位二进制获取八卦名称
     */
    getTrigramName(trigramBinary) {
        const trigramMap = {
            '111': '乾',
            '000': '坤', 
            '100': '震',
            '011': '巽',
            '010': '坎',
            '101': '离',
            '001': '艮',
            '110': '兑'
        };
        return trigramMap[trigramBinary] || '未知';
    }
    
    /**
     * 获取卦象信息
     */
    getHexagram(binary) {
        const normalizedBinary = this.normalizeBinary(binary);
        return this.database[normalizedBinary] || null;
    }
    
    /**
     * 获取所有卦象
     */
    getAllHexagrams() {
        return this.database;
    }
    
    /**
     * 搜索卦象
     */
    searchHexagrams(query) {
        const results = [];
        const lowerQuery = query.toLowerCase();
        
        for (const [binary, hexagram] of Object.entries(this.database)) {
            if (hexagram.name.includes(query) || 
                hexagram.meaning.includes(query) ||
                hexagram.interpretation.general.includes(query)) {
                results.push({ binary, ...hexagram });
            }
        }
        
        return results;
    }
}

// 创建全局实例
let hexagramIntegration;

// 在DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    hexagramIntegration = new HexagramIntegration();
    
    // 将统一的数据接口暴露给其他脚本
    window.getHexagramByBinary = function(binary) {
        return hexagramIntegration.getHexagram(binary);
    };
    
    window.getAllHexagrams = function() {
        return hexagramIntegration.getAllHexagrams();
    };
    
    window.searchHexagrams = function(query) {
        return hexagramIntegration.searchHexagrams(query);
    };
    
    console.log('六十四卦数据整合完成');
});

// 导出类定义（如果在模块环境中）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HexagramIntegration;
} 