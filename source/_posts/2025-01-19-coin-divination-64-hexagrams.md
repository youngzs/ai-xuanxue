---
title: 三币占卜：最简单的六十四卦预测法
date: 2025-01-19 14:30:00
categories:
  - 玄学知识
tags:
  - 易经
  - 占卜
  - 六十四卦
  - 玄学预测
  - 传统文化
cover: /images/xuanxue/bagua-cover.webp
---

# 三币占卜：最简单的六十四卦预测法

在中华传统文化中，易经占卜是一门博大精深的学问。今天我们来学习最简单易学的三币占卜法，只需要三枚硬币，就能快速获得六十四卦的预测结果。

## 🪙 准备工作

### 需要的物品
- **三枚相同的硬币**（建议使用一元硬币）
- **安静的环境**
- **虔诚的心态**

### 基本规则
- **菊花面（国徽面）= 1**
- **数字面 = 2** 
- **奇数为阳，偶数为阴**

## 📖 占卜方法详解

### 第一步：理解爻的含义

三枚硬币的组合，根据菊花出现的次数，对应不同的爻：

| 菊花数量 | 变卦 | 爻象 | 名称 | 含义 |
|---------|------|------|------|------|
| 0个 | X | **⚋** | 老阴 | 阴极转阳，会变卦 |
| 1个 | - | **⚊** | 少阳 | 稳定的阳爻 |
| 2个 | - | **⚋** | 少阴 | 稳定的阴爻 |
| 3个 | O | **⚊** | 老阳 | 阳极转阴，会变卦 |

### 第二步：摇卦六次

从下往上，连续摇六次硬币：

1. **初爻**（最下面）- 第一次摇卦结果
2. **二爻** - 第二次摇卦结果  
3. **三爻** - 第三次摇卦结果
4. **四爻** - 第四次摇卦结果
5. **五爻** - 第五次摇卦结果
6. **上爻**（最上面）- 第六次摇卦结果

### 第三步：分析卦象

- **下卦**：初爻、二爻、三爻组成的三爻卦
- **上卦**：四爻、五爻、上爻组成的三爻卦
- **本卦**：由下卦和上卦组成的六爻卦
- **变卦**：老阴和老阳会发生变化后形成的新卦

## 🔮 在线占卜工具

<div id="divination-tool" class="divination-container">
    <div class="tool-header">
        <h3>🪙 三币占卜工具</h3>
        <p>诚心求问，投掷三币，获得六十四卦指引</p>
    </div>      
    <div class="question-input">
        <label for="question">🤔 请选择或输入您要占问的事情：</label>
        <select id="question-selector" class="question-selector">
            <option value="">-- 选择常见问题或自定义输入 --</option>
        </select>
        <textarea id="question" placeholder="选择上面的常见问题，或自己输入要占问的事情..."></textarea>
    </div>    
    <div class="mode-selection">
        <h4>📊 选择占卜方式</h4>
        <div class="mode-buttons">
            <button id="online-mode" class="mode-btn active">🎲 在线投掷</button>
            <button id="offline-mode" class="mode-btn">📝 输入结果</button>
        </div>
    </div>
    <!-- 在线投掷模式 -->
    <div id="online-divination" class="divination-mode">
        <div class="divination-process">
            <button id="start-divination" class="btn-primary">开始占卜</button>
            <button id="throw-coins" class="btn-secondary" style="display:none;">投掷硬币</button>
            <button id="reset-divination" class="btn-reset" style="display:none;">重新占卜</button>
        </div> 
        <div id="throwing-area" class="throwing-area" style="display:none;">
            <div class="throw-info">
                <span id="throw-count">第 1 次投掷</span>
                <span id="yao-position">（初爻）</span>
            </div>
            <div class="coins-display">
                <div class="coin" id="coin1">🪙</div>
                <div class="coin" id="coin2">🪙</div>
                <div class="coin" id="coin3">🪙</div>
            </div>
            <div class="throw-result">
                <span id="throw-details"></span>
                <span id="yao-result"></span>
            </div>
        </div>
    </div>    
    <!-- 线下输入模式 -->
    <div id="offline-divination" class="divination-mode" style="display:none;">
        <div class="offline-input-section">
            <h4>📋 输入您的投掷结果</h4>
            <p class="input-instruction">
                请按从下到上的顺序（初爻→上爻），输入每次投掷的菊花数量（0-3）：
            </p>
            <div class="yao-inputs">
                <div class="yao-input-row">
                    <label>上爻（第6次）：</label>
                    <input type="number" class="yao-input" min="0" max="3" data-yao="5" placeholder="0-3">
                    <span class="yao-result-display" data-yao="5"></span>
                </div>
                <div class="yao-input-row">
                    <label>五爻（第5次）：</label>
                    <input type="number" class="yao-input" min="0" max="3" data-yao="4" placeholder="0-3">
                    <span class="yao-result-display" data-yao="4"></span>
                </div>
                <div class="yao-input-row">
                    <label>四爻（第4次）：</label>
                    <input type="number" class="yao-input" min="0" max="3" data-yao="3" placeholder="0-3">
                    <span class="yao-result-display" data-yao="3"></span>
                </div>
                <div class="yao-input-row">
                    <label>三爻（第3次）：</label>
                    <input type="number" class="yao-input" min="0" max="3" data-yao="2" placeholder="0-3">
                    <span class="yao-result-display" data-yao="2"></span>
                </div>
                <div class="yao-input-row">
                    <label>二爻（第2次）：</label>
                    <input type="number" class="yao-input" min="0" max="3" data-yao="1" placeholder="0-3">
                    <span class="yao-result-display" data-yao="1"></span>
                </div>
                <div class="yao-input-row">
                    <label>初爻（第1次）：</label>
                    <input type="number" class="yao-input" min="0" max="3" data-yao="0" placeholder="0-3">
                    <span class="yao-result-display" data-yao="0"></span>
                </div>
            </div>
            <div class="offline-controls">
                <button id="generate-hexagram" class="btn-primary">生成卦象</button>
                <button id="clear-inputs" class="btn-reset">清空重填</button>
            </div>
        </div>
    </div>   
    <!-- 卦象显示区域 -->    
    <div id="hexagram-display" class="hexagram-display" style="display:none;">
        <h4>📜 卦象结果</h4>
        <div class="hexagram-visual">
            <div class="hexagram-info-left">
                <div class="hexagram-lines" id="hexagram-lines"></div>
                <div class="hexagram-composition">
                    <div><span id="upper-trigram"></span> 上卦</div>
                    <div><span id="lower-trigram"></span> 下卦</div>
                </div>
            </div>
            <div class="hexagram-info-center">
                <div class="hexagram-name" id="hexagram-name"></div>
                <img id="hexagram-image" class="hexagram-main-image" style="display:none;" alt="卦象图">
            </div>
        </div>
    </div>   
    <div id="interpretation" class="interpretation" style="display:none;">
        <h4>🔍 卦象解读</h4>
        <div class="interpretation-content" id="interpretation-content"></div>   
        <div id="change-hexagram" class="change-hexagram" style="display:none;">
            <div class="change-info" id="change-info"></div>
        </div>
    </div>
</div>

## 📚 六十四卦简要说明

### 八卦基础

| 卦名 | 卦象 | 自然象征 | 方位 | 特性 |
|------|------|----------|------|------|
| 乾 | ☰ | 天 | 西北 | 刚健、进取 |
| 坤 | ☷ | 地 | 西南 | 柔顺、包容 |
| 震 | ☳ | 雷 | 东 | 动、进 |
| 巽 | ☴ | 风 | 东南 | 入、顺 |
| 坎 | ☵ | 水 | 北 | 险、陷 |
| 离 | ☲ | 火 | 南 | 丽、明 |
| 艮 | ☶ | 山 | 东北 | 止、静 |
| 兑 | ☱ | 泽 | 西 | 悦、说 |

### 经典卦例解析

#### 1. 乾为天（☰☰）
- **卦意**：纯阳之卦，象征天道刚健
- **占断**：大吉，君子以自强不息
- **事业**：可大展宏图，但需持之以恒
- **感情**：主动追求，诚意感人

#### 2. 坤为地（☷☷）  
- **卦意**：纯阴之卦，象征大地包容
- **占断**：以柔克刚，厚德载物
- **事业**：宜守不宜攻，稳扎稳打
- **感情**：温柔体贴，感情深厚

#### 3. 水雷屯（☵☳）
- **卦意**：万物始生，艰难创业
- **占断**：初期困难，需要坚持
- **事业**：创业维艰，但前景光明
- **感情**：感情萌芽，需要时间

## ⚠️ 占卜注意事项

### 占卜前准备
1. **心境平和**：保持虔诚、专注的心态
2. **环境安静**：选择无人打扰的地方
3. **问题明确**：要占问的事情要具体清晰
4. **一事一占**：一次只能问一件事

### 占卜禁忌
- ❌ 不要连续多次占同一件事
- ❌ 不要在情绪激动时占卜  
- ❌ 不要占问他人隐私
- ❌ 不要占问违法犯罪的事

### 结果解读
- 🔮 **本卦**：反映当前状况
- 🔄 **变卦**：显示事情的发展趋势
- ⚡ **动爻**：指出关键的变化点
- 📝 **卦辞**：给出行动指导

## 🎯 实战技巧

### 提问的艺术
- **具体化**：不问"我会怎样"，要问"我在某方面会怎样"
- **时限性**：设定时间范围，如"三个月内"
- **可操作**：问题要能通过行动改变

### 解卦要领
1. **看整体卦象**：了解大致趋势
2. **分析动爻**：找出关键变化
3. **结合现实**：联系实际情况
4. **指导行动**：制定应对策略

## 🌟 结语

三币占卜法是易经占卜中最简单实用的方法之一。它不需要复杂的工具和繁琐的程序，只要诚心求问，就能获得有价值的指引。

记住，占卜的目的不是预知命运，而是帮助我们更好地认识现状，做出明智的选择。正如《易经》所说："君子以自强不息"，最终还是要靠自己的努力去创造美好的未来。

**愿您在人生的道路上，得到智慧的指引，做出正确的抉择！**

---

<style>
/* 占卜工具样式 - 浅色主题 */
.divination-container {
    background: #ffffff;
    border-radius: 15px;
    padding: 2rem;
    margin: 2rem 0;
    border: 1px solid #dee2e6;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.tool-header {
    text-align: center;
    margin-bottom: 2rem;
}

.tool-header h3 {
    color: #495057;
    margin-bottom: 0.5rem;
    font-size: 1.8rem;
}

.tool-header p {
    color: #6c757d;
    font-size: 1rem;
}

.question-input {
    margin-bottom: 2rem;
}

.question-input label {
    display: block;
    font-weight: 600;
    color: #495057;
    margin-bottom: 0.5rem;
}

.question-selector {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ced4da;
    border-radius: 6px;
    font-size: 1rem;
    margin-bottom: 1rem;
    background: #ffffff;
    color: #495057;
}

.question-selector:focus {
    outline: none;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,0.25);
}

.question-input textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid #ced4da;
    border-radius: 6px;
    font-size: 1rem;
    resize: vertical;
    min-height: 80px;
    background: #ffffff;
    color: #495057;
}

.question-input textarea:focus {
    outline: none;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,0.25);
}

/* 模式选择样式 */
.mode-selection {
    margin-bottom: 2rem;
    text-align: center;
}

.mode-selection h4 {
    color: #495057;
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.mode-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.mode-btn {
    padding: 0.8rem 1.5rem;
    border: 1px solid #ced4da;
    border-radius: 20px;
    background: #ffffff;
    color: #6c757d;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
}

.mode-btn.active {
    background: #007bff;
    color: white;
    border-color: #007bff;
}

.mode-btn:hover {
    background: #f8f9fa;
    border-color: #adb5bd;
}

/* 线下输入模式样式 */
.offline-input-section {
    background: #f8f9fa;
    border-radius: 8px;
    padding: 2rem;
    margin: 1rem 0;
    border: 1px solid #dee2e6;
}

.offline-input-section h4 {
    color: #495057;
    margin-bottom: 1rem;
    text-align: center;
}

.input-instruction {
    color: #6c757d;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 0.95rem;
    line-height: 1.5;
}

.yao-inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
}

.yao-input-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem;
    background: #ffffff;
    border-radius: 6px;
    border: 1px solid #dee2e6;
}

.yao-input-row label {
    min-width: 120px;
    font-weight: 500;
    color: #495057;
    font-size: 0.95rem;
}

.yao-input {
    width: 60px;
    padding: 0.5rem;
    border: 1px solid #ced4da;
    border-radius: 4px;
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    background: #ffffff;
    color: #495057;
}

.yao-input:focus {
    outline: none;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,0.25);
}

.yao-result-display {
    min-width: 120px;
    padding: 0.3rem 0.8rem;
    background: #e7f3ff;
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: 500;
    color: #0056b3;
    text-align: center;
}

.offline-controls {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.divination-process {
    text-align: center;
    margin-bottom: 2rem;
}

.btn-primary,
.btn-secondary,
.btn-reset {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 20px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    margin: 0 0.5rem;
    font-size: 1rem;
}

.btn-primary {
    background: #007bff;
    color: white;
}

.btn-secondary {
    background: #28a745;
    color: white;
}

.btn-reset {
    background: #6c757d;
    color: white;
}

.btn-primary:hover {
    background: #0056b3;
}

.btn-secondary:hover {
    background: #1e7e34;
}

.btn-reset:hover {
    background: #545b62;
}

.throwing-area {
    background: #f8f9fa;
    border-radius: 8px;
    padding: 2rem;
    margin: 1rem 0;
    text-align: center;
    border: 1px dashed #adb5bd;
}

.throw-info {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: #495057;
}

.coins-display {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 2rem 0;
}

.coin {
    font-size: 4rem;
    animation: flip 0.6s ease-in-out;
    cursor: pointer;
    transition: transform 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
}

.coin-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    transition: transform 0.3s ease;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
}

.coin:hover {
    transform: scale(1.1);
}

.coin:hover .coin-image {
    transform: scale(1.1);
}

@keyframes flip {
    0% { transform: rotateY(0deg); }
    50% { transform: rotateY(90deg); }
    100% { transform: rotateY(0deg); }
}

.throw-result {
    margin-top: 1rem;
    padding: 1rem;
    background: #e7f3ff;
    border-radius: 6px;
    border-left: 3px solid #007bff;
    color: #495057;
}

.hexagram-display {
    background: #ffffff;
    border-radius: 8px;
    padding: 2rem;
    margin: 1rem 0;
    border: 1px solid #ffc107;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.hexagram-visual {
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: center;
}

.hexagram-info-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.hexagram-lines {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-family: monospace;
    font-size: 2rem;
    border: 1px solid #ffc107;
    border-radius: 6px;
    padding: 1rem;
    background: #fffbf0;
}

.hexagram-line {
    text-align: center;
    line-height: 1;
}

.hexagram-line.changing-line {
    color: #dc3545;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

.hexagram-composition {
    text-align: center;
    font-size: 0.9rem;
    color: #6c757d;
}

.hexagram-info-center {
    text-align: center;
    flex: 1;
}

.hexagram-name {
    font-size: 2rem;
    font-weight: 600;
    color: #495057;
    margin-bottom: 1rem;
}

.hexagram-main-image {
    max-width: 200px;
    max-height: 200px;
    border-radius: 8px;
    border: 2px solid #ffc107;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.interpretation {
    background: #f8f9fa;
    border-radius: 8px;
    padding: 2rem;
    margin: 1rem 0;
    border: 1px solid #dee2e6;
}

.interpretation h4,
.interpretation h5 {
    color: #495057;
    margin-bottom: 1rem;
}

.interpretation-content {
    line-height: 1.8;
    color: #495057;
}

.change-hexagram {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px dashed #dee2e6;
}

.detailed-interpretation {
    margin-top: 2rem;
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 6px;
    border-left: 3px solid #007bff;
}

.interpretation-section {
    margin-bottom: 1.5rem;
}

.interpretation-section h6 {
    color: #495057;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
}

.interpretation-section h7 {
    color: #6f42c1;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    display: block;
}

.interpretation-section p {
    margin-bottom: 0.5rem;
    color: #6c757d;
}

/* 相关卦象样式 */
.related-hexagram {
    margin-top: 2rem;
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 8px;
    border: 1px solid #ced4da;
}

.related-hexagram h6 {
    color: #495057;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    text-align: center;
}

.hexagram-card {
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: #ffffff;
    border-radius: 6px;
    border: 1px solid #dee2e6;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.hexagram-info {
    flex: 1;
    font-size: 0.9rem;
    line-height: 1.5;
    color: #495057;
}

.hexagram-images {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.hexagram-img {
    width: 80px;
    height: 80px;
    border-radius: 6px;
    border: 1px solid #ced4da;
    object-fit: cover;
}

.hexagram-img-small {
    width: 50px;
    height: 50px;
    border-radius: 4px;
    border: 1px solid #ced4da;
    object-fit: cover;
}

/* 浅色主题统一样式 - 保持简洁一致的视觉效果 */

/* 响应式设计 */
@media (max-width: 768px) {
    .hexagram-visual {
        flex-direction: column;
        gap: 1rem;
    }
    
    .coins-display {
        gap: 1rem;
    }
    
    .coin {
        font-size: 3rem;
    }
    
    .divination-container {
        padding: 1.5rem;
    }
    
    .mode-buttons {
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }
    
    .mode-btn {
        width: 100%;
        max-width: 200px;
    }
    
    .yao-input-row {
        flex-direction: column;
        text-align: center;
        gap: 0.5rem;
    }
    
    .yao-input-row label {
        min-width: auto;
    }
    
    .yao-result-display {
        min-width: auto;
        width: 100%;
    }
    
    .offline-controls {
        flex-direction: column;
        align-items: center;
    }
    
    .btn-primary,
    .btn-secondary,
    .btn-reset {
        width: 100%;
        max-width: 200px;
        margin: 0.25rem 0;
    }
    
    .hexagram-card {
        flex-direction: column;
        text-align: center;
    }
    
    .hexagram-main-image {
        max-width: 150px;
        max-height: 150px;
    }
}
</style>

<script src="/js/simple-hexagram-data.js"></script>
<script src="/js/extracted-hexagram-database.js"></script>
<script src="/js/hexagram-integration.js"></script>
<script src="/js/divination-tool.js"></script>
<script>
// 初始化脚本 - 等待所有模块加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 检查基础数据是否加载
    if (typeof HEXAGRAM_EXTRACTED_DATA === 'undefined') {
        console.error('简化卦象数据库未加载，请检查文件路径');
    }
    
    if (typeof extractedHexagramDatabase === 'undefined') {
        console.warn('完整卦象数据库未加载，将使用简化版数据');
    }
    
    // 等待数据整合完成
    setTimeout(() => {
        if (typeof window.getHexagramByBinary === 'function') {
            console.log('✅ 三币占卜工具初始化成功');
            
            // 测试数据完整性
            const testHexagram = window.getHexagramByBinary('111111');
            if (testHexagram) {
                console.log(`✅ 数据库测试通过：${testHexagram.name}`);
            }
        } else {
            console.error('❌ 数据整合失败');
        }
    }, 500);
});
</script> 