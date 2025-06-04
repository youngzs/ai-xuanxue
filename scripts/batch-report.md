# 64卦数据库构建报告

生成时间: 2025-06-04T06:23:50.789Z

## 📊 总体统计

- **总卦象数**: 60/64 (❌)
- **完整卦象**: 60 个 (94%)
- **部分完整**: 0 个 (0%)
- **基础数据**: 0 个 (0%)
- **总体完整度**: 100%

## 📋 字段完整性统计

| 字段 | 完整数量 | 完整率 |
|------|----------|--------|
| number | 60/60 | 100% |
| name | 60/60 | 100% |
| description | 60/60 | 100% |
| trigrams | 60/60 | 100% |
| nature | 60/60 | 100% |
| oracle | 60/60 | 100% |
| image | 60/60 | 100% |
| imageMeaning | 60/60 | 100% |
| judgment | 60/60 | 100% |
| business | 60/60 | 100% |
| love | 60/60 | 100% |
| health | 60/60 | 100% |
| advice | 60/60 | 100% |
| fortune | 60/60 | 100% |
| lines | 60/60 | 100% |
| images | 60/60 | 100% |
| oracleMeaning | 14/14 | 100% |

## 🔍 数据验证结果

- **验证总数**: 60
- **完整数据**: 60
- **部分数据**: 0  
- **缺失数据**: 0
- **错误数量**: 0
- **重复数量**: 0

### ✅ 所有卦象模式完整





## 📁 生成文件

- **主数据库**: `merged-hexagram-database.js`
- **抓取数据**: `extracted-hexagram-database.js`
- **统计报告**: `batch-report.md`

## 🔧 使用方法

### 导入数据库
```javascript
import { hexagramDatabase, getHexagram } from './source/js/merged-hexagram-database.js';

// 获取卦象
const qianHex = getHexagram('111111');
console.log(qianHex.name); // '乾'
```

### 获取统计信息
```javascript
import { getDatabaseStats } from './source/js/merged-hexagram-database.js';

const stats = getDatabaseStats();
console.log(`数据库完整度: ${stats.completionRate}`);
```

## 📈 质量评估

🔴 **需要改进** - 数据完整度较低，需要大量补充

## 🚀 下一步

1. 补充缺失的卦象数据
2. ✅ 无数据错误
3. ✅ 所有字段完整
4. 验证数据准确性
5. 添加爻辞详细信息

---

*本报告由批量处理管理器自动生成*