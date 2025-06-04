# 64卦数据库批量处理指南

本指南详细说明如何使用批量处理系统构建完整的64卦数据库。

## 🚀 快速开始

### 1. 环境准备

```bash
# 安装依赖
npm install

# 检查环境
node --version  # 需要 Node.js >= 14.0.0
```

### 2. 一键构建完整数据库

```bash
# 执行完整的构建流程
npm run build-db
```

这会自动执行：
- 备份现有数据
- 批量抓取64卦数据
- 验证数据完整性
- 合并所有数据源
- 生成最终数据库
- 生成统计报告

## 📋 详细命令说明

### 基础命令

| 命令 | 说明 | 示例 |
|------|------|------|
| `npm run build-db` | 完整构建流程 | 自动化所有步骤 |
| `npm run extract-only` | 仅抓取数据 | 从网站获取原始数据 |
| `npm run merge-data` | 仅合并数据 | 合并已有的数据源 |
| `npm run validate-data` | 仅验证数据 | 检查数据完整性 |
| `npm run recover-data` | 恢复进度 | 从进度文件恢复 |
| `npm run cleanup` | 清理临时文件 | 删除缓存和临时数据 |

### 高级参数

```bash
# 自定义抓取范围
node scripts/batch-manager.js extract --start 1 --end 20

# 调整批次大小和延迟
node scripts/batch-manager.js build --batch 3 --delay 3000

# 从指定位置开始构建
node scripts/batch-manager.js build --start 25 --end 64
```

### 参数说明

- `--start N`: 从第N卦开始抓取（默认：1）
- `--end N`: 抓取到第N卦结束（默认：64）
- `--batch N`: 每批处理N个卦象（默认：5）
- `--delay N`: 批次间延迟N毫秒（默认：2000）

## 🔧 工作流程详解

### 1. 数据抓取阶段

```bash
npm run extract-only
```

**执行内容：**
- 从易安居网站批量抓取64卦详细信息
- 自动处理网络错误和重试
- 保存进度文件防止中断丢失
- 生成备用数据填补抓取失败的卦象

**输出文件：**
- `source/js/extracted-hexagram-database.js` - 抓取的数据
- `source/js/progress/batch_*.json` - 进度文件
- `scripts/extraction-report.md` - 抓取报告

### 2. 数据验证阶段

```bash
npm run validate-data
```

**验证项目：**
- 64卦模式完整性检查
- 数据字段完整性统计
- 重复数据检测
- 错误数据识别

### 3. 数据合并阶段

```bash
npm run merge-data
```

**合并策略：**
1. 优先级：抓取数据 > 补充数据 > 主数据库
2. 字段级合并：非空、非"待补充"的值优先
3. 完整性检查：确保所有64卦都有基础信息

### 4. 最终生成阶段

**生成文件：**
- `source/js/merged-hexagram-database.js` - 最终数据库
- `scripts/batch-report.md` - 综合报告
- `backup/[timestamp]/` - 备份文件

## 📊 数据质量控制

### 自动验证机制

1. **完整性检查**
   - 确保64卦模式全覆盖
   - 验证必需字段（编号、名称、卦辞等）
   - 检查数据格式正确性

2. **质量分级**
   - 🟢 完整：所有主要字段齐全
   - 🟡 部分：超过一半字段有效
   - 🔴 基础：仅有基本信息

3. **错误处理**
   - 网络错误自动重试
   - 抓取失败使用备用数据
   - 数据冲突时智能合并

### 手动审核建议

```bash
# 查看抓取报告
cat scripts/extraction-report.md

# 查看综合报告
cat scripts/batch-report.md

# 检查特定卦象
node -e "
const { getHexagram } = require('./source/js/merged-hexagram-database.js');
console.log(getHexagram('111111')); // 乾卦
"
```

## 🔄 故障恢复

### 抓取中断恢复

如果抓取过程中断，可以从进度文件恢复：

```bash
# 恢复到最新进度
npm run recover-data

# 继续从中断点抓取
node scripts/batch-manager.js extract --start 30
```

### 数据备份恢复

```bash
# 查看备份
ls backup/

# 恢复特定备份
cp backup/2024-01-01T10-00-00-000Z/* source/js/
```

### 清理和重新开始

```bash
# 清理所有临时文件
npm run cleanup

# 删除已抓取的数据重新开始
rm source/js/extracted-hexagram-database.js
rm source/js/merged-hexagram-database.js

# 重新执行完整流程
npm run build-db
```

## ⚡ 性能优化

### 抓取优化

```bash
# 增加并发（小心被限制）
node scripts/batch-manager.js build --batch 10 --delay 1000

# 减少并发（网络不稳定时）
node scripts/batch-manager.js build --batch 2 --delay 5000
```

### 网络优化

- 使用稳定的网络连接
- 避免高峰时段抓取
- 适当增加延迟避免被限制

### 资源优化

- 定期清理进度文件
- 压缩备份文件节省空间
- 监控抓取进程内存使用

## 🛠️ 故障排除

### 常见问题

1. **网络连接失败**
   ```bash
   # 检查网络连接
   ping www.zhouyi.cc
   
   # 增加延迟重试
   node scripts/batch-manager.js extract --delay 5000
   ```

2. **数据解析错误**
   ```bash
   # 查看详细错误日志
   node scripts/extract-hexagram-data.js 2>&1 | tee extract.log
   ```

3. **文件权限问题**
   ```bash
   # 检查目录权限
   ls -la source/js/
   
   # 修复权限
   chmod 755 source/js/
   ```

4. **内存不足**
   ```bash
   # 增加Node.js内存限制
   node --max-old-space-size=4096 scripts/batch-manager.js build
   ```

### 调试模式

```bash
# 启用调试输出
DEBUG=* node scripts/batch-manager.js build

# 单个卦象测试
node -e "
const { extractHexagramDetails } = require('./scripts/extract-hexagram-data.js');
extractHexagramDetails(1, 'http://www.zhouyi.cc/zhouyi/yijing64/4071.html')
  .then(console.log);
"
```

## 📈 数据库维护

### 定期更新

```bash
# 每月更新一次
npm run build-db

# 验证数据质量
npm run validate-data
```

### 手动补充

对于抓取失败或数据不准确的卦象，可以手动编辑：

```javascript
// 编辑 source/js/hexagram-database.js
'111111': {
    number: 1,
    name: '乾',
    // ... 补充或修正数据
}
```

### 版本控制

```bash
# 提交变更
git add source/js/merged-hexagram-database.js
git commit -m "更新64卦数据库"

# 创建版本标签
git tag -a v1.0.0 -m "完整64卦数据库 v1.0.0"
```

## 📋 数据格式说明

### 卦象数据结构

```javascript
{
    "111111": {                    // 二进制模式（6位）
        "number": 1,               // 卦象编号
        "name": "乾",              // 卦名
        "description": "乾为天",   // 描述
        "trigrams": "乾上乾下",    // 八卦组合
        "nature": "刚健中正",      // 性质
        "oracle": "乾。元，亨，利，贞。",  // 卦辞
        "oracleMeaning": "...",    // 卦辞释义
        "image": "天行健...",      // 象辞
        "imageMeaning": "...",     // 象辞释义
        "judgment": "...",         // 判断
        "business": "...",         // 事业
        "love": "...",            // 感情
        "health": "...",          // 健康
        "advice": "...",          // 建议
        "fortune": "...",         // 运势
        "images": {               // 图片路径
            "main": "assets/hexagrams/01-qian.png",
            "structure": "assets/hexagrams/01-structure.png"
        }
    }
}
```

### 统计数据结构

```javascript
{
    "total": 64,                  // 总卦象数
    "complete": 58,               // 完整卦象数
    "partial": 6,                 // 部分完整数
    "minimal": 0,                 // 基础数据数
    "completionRate": "94%",      // 完整率
    "fields": {                   // 字段统计
        "oracle": { "total": 64, "complete": 64 },
        "judgment": { "total": 64, "complete": 60 }
        // ...
    },
    "generatedAt": "2024-01-01T12:00:00.000Z"
}
```

## ✅ 验收标准

完整的数据库应达到以下标准：

1. **完整性**: 64卦全覆盖，无缺失
2. **准确性**: 数据与权威典籍一致
3. **格式**: 所有字段格式正确
4. **完整度**: ≥90% 的卦象有完整信息
5. **可用性**: 通过所有验证测试

### 最终验收命令

```bash
# 完整构建
npm run build-db

# 验证结果
npm run validate-data

# 检查报告
cat scripts/batch-report.md
```

---

*通过本指南，您可以构建出专业级别的64卦数据库，为占卜应用提供完整可靠的数据支持。* 