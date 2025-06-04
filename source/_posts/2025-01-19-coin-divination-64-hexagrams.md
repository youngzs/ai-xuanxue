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
        <label for="question">🤔 请输入您要占问的事情：</label>
        <textarea id="question" placeholder="例如：我这次求职能否成功？"></textarea>
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
            <div class="hexagram-lines" id="hexagram-lines"></div>
            <div class="hexagram-info">
                <div class="hexagram-name" id="hexagram-name"></div>
                <div class="hexagram-composition">
                    <span id="upper-trigram"></span> 上卦 / <span id="lower-trigram"></span> 下卦
                </div>
            </div>
        </div>
    </div>    
    <div id="interpretation" class="interpretation" style="display:none;">
        <h4>🔍 卦象解读</h4>
        <div class="interpretation-content" id="interpretation-content"></div>        
        <div id="change-hexagram" class="change-hexagram" style="display:none;">
            <h5>🔄 变卦</h5>
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
/* 占卜工具样式 */
.divination-container {
    background: #f8f9fa;
    border-radius: 15px;
    padding: 2rem;
    margin: 2rem 0;
    border: 2px solid #e9ecef;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.tool-header {
    text-align: center;
    margin-bottom: 2rem;
}

.tool-header h3 {
    color: #2c3e50;
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
    color: #2c3e50;
    margin-bottom: 0.5rem;
}

.question-input textarea {
    width: 100%;
    padding: 1rem;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    font-size: 1rem;
    resize: vertical;
    min-height: 80px;
}

.question-input textarea:focus {
    outline: none;
    border-color: #3498db;
}

/* 模式选择样式 */
.mode-selection {
    margin-bottom: 2rem;
    text-align: center;
}

.mode-selection h4 {
    color: #2c3e50;
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
    border: 2px solid #e9ecef;
    border-radius: 25px;
    background: white;
    color: #6c757d;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.mode-btn.active {
    background: #3498db;
    color: white;
    border-color: #3498db;
}

.mode-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

/* 线下输入模式样式 */
.offline-input-section {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    margin: 1rem 0;
    border: 2px solid #3498db;
}

.offline-input-section h4 {
    color: #2c3e50;
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
    background: #f8f9fa;
    border-radius: 8px;
    border: 1px solid #e9ecef;
}

.yao-input-row label {
    min-width: 120px;
    font-weight: 600;
    color: #2c3e50;
    font-size: 0.95rem;
}

.yao-input {
    width: 60px;
    padding: 0.5rem;
    border: 2px solid #e9ecef;
    border-radius: 6px;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
}

.yao-input:focus {
    outline: none;
    border-color: #3498db;
}

.yao-result-display {
    min-width: 120px;
    padding: 0.3rem 0.8rem;
    background: #e3f2fd;
    border-radius: 15px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #1976d2;
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
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 0 0.5rem;
    font-size: 1rem;
}

.btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

.btn-primary:hover,
.btn-secondary:hover,
.btn-reset:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.throwing-area {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    margin: 1rem 0;
    text-align: center;
    border: 2px dashed #3498db;
}

.throw-info {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: #2c3e50;
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
}

.coin:hover {
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
    background: #e3f2fd;
    border-radius: 8px;
    border-left: 4px solid #2196f3;
}

.hexagram-display {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    margin: 1rem 0;
    border: 2px solid #f39c12;
}

.hexagram-visual {
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: center;
}

.hexagram-lines {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-family: monospace;
    font-size: 2rem;
}

.hexagram-info {
    text-align: center;
}

.hexagram-name {
    font-size: 2rem;
    font-weight: bold;
    color: #d35400;
    margin-bottom: 0.5rem;
}

.hexagram-composition {
    color: #7f8c8d;
    font-size: 1rem;
}

.interpretation {
    background: #fff8e1;
    border-radius: 12px;
    padding: 2rem;
    margin: 1rem 0;
    border: 2px solid #ffc107;
}

.interpretation h4,
.interpretation h5 {
    color: #e65100;
    margin-bottom: 1rem;
}

.interpretation-content {
    line-height: 1.8;
    color: #2c3e50;
}

.change-hexagram {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 2px dashed #ffc107;
}

.detailed-interpretation {
    margin-top: 2rem;
    padding: 1.5rem;
    background: #f0f8ff;
    border-radius: 8px;
    border-left: 4px solid #3498db;
}

.interpretation-section {
    margin-bottom: 1.5rem;
}

.interpretation-section h6 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
}

.interpretation-section p {
    margin-bottom: 0.5rem;
    color: #555;
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
    .divination-container {
        background: #2d3748;
        border-color: #4a5568;
    }
    
    .tool-header h3 {
        color: #e2e8f0;
    }
    
    .tool-header p {
        color: #a0aec0;
    }
    
    .question-input label {
        color: #e2e8f0;
    }
    
    .question-input textarea {
        background: #374151;
        border-color: #4a5568;
        color: #e2e8f0;
    }
    
    .question-input textarea:focus {
        border-color: #63b3ed;
    }
    
    .mode-selection h4 {
        color: #e2e8f0;
    }
    
    .mode-btn {
        background: #374151;
        border-color: #4a5568;
        color: #a0aec0;
    }
    
    .mode-btn.active {
        background: #63b3ed;
        color: #1a202c;
        border-color: #63b3ed;
    }
    
    .offline-input-section {
        background: #374151;
        border-color: #63b3ed;
    }
    
    .offline-input-section h4 {
        color: #e2e8f0;
    }
    
    .input-instruction {
        color: #a0aec0;
    }
    
    .yao-input-row {
        background: #2d3748;
        border-color: #4a5568;
    }
    
    .yao-input-row label {
        color: #e2e8f0;
    }
    
    .yao-input {
        background: #1a202c;
        border-color: #4a5568;
        color: #e2e8f0;
    }
    
    .yao-input:focus {
        border-color: #63b3ed;
    }
    
    .yao-result-display {
        background: #1e3a8a;
        color: #93c5fd;
    }
    
    .throwing-area {
        background: #374151;
        border-color: #63b3ed;
    }
    
    .throw-info {
        color: #e2e8f0;
    }
    
    .throw-result {
        background: #1e3a8a;
        border-color: #3b82f6;
        color: #e2e8f0;
    }
    
    .hexagram-display {
        background: #374151;
        border-color: #f59e0b;
    }
    
    .hexagram-name {
        color: #fbbf24;
    }
    
    .hexagram-composition {
        color: #9ca3af;
    }
    
    .interpretation {
        background: #365314;
        border-color: #eab308;
    }
    
    .interpretation h4,
    .interpretation h5 {
        color: #fbbf24;
    }
    
    .interpretation-content {
        color: #e2e8f0;
    }
    
    .detailed-interpretation {
        background: #1e3a8a;
        border-color: #3b82f6;
    }
    
    .interpretation-section h6 {
        color: #e2e8f0;
    }
    
    .interpretation-section p {
        color: #cbd5e0;
    }
}

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
}
</style>

<script src="/js/hexagram-database.js"></script>
<script>
// 三币占卜工具脚本（改进版）
document.addEventListener('DOMContentLoaded', function() {
    initDivinationTool();
});

function initDivinationTool() {
    // 工具变量
    let currentThrow = 0;
    let hexagramLines = [];
    let question = '';
    let currentMode = 'online'; // 'online' 或 'offline'
    
    // 爻位名称
    const yaoPositions = ['初爻', '二爻', '三爻', '四爻', '五爻', '上爻'];
    
    // 获取DOM元素
    const startBtn = document.getElementById('start-divination');
    const throwBtn = document.getElementById('throw-coins');
    const resetBtn = document.getElementById('reset-divination');
    const questionInput = document.getElementById('question');
    const throwingArea = document.getElementById('throwing-area');
    const hexagramDisplay = document.getElementById('hexagram-display');
    const interpretation = document.getElementById('interpretation');
    
    // 模式切换相关元素
    const onlineModeBtn = document.getElementById('online-mode');
    const offlineModeBtn = document.getElementById('offline-mode');
    const onlineDivination = document.getElementById('online-divination');
    const offlineDivination = document.getElementById('offline-divination');
    const generateHexagramBtn = document.getElementById('generate-hexagram');
    const clearInputsBtn = document.getElementById('clear-inputs');
    const yaoInputs = document.querySelectorAll('.yao-input');
    const yaoResultDisplays = document.querySelectorAll('.yao-result-display');
    
    // 初始化
    initEventListeners();
    
    function initEventListeners() {
        // 模式切换
        onlineModeBtn.addEventListener('click', () => switchMode('online'));
        offlineModeBtn.addEventListener('click', () => switchMode('offline'));
        
        // 在线模式事件
        startBtn.addEventListener('click', startOnlineDivination);
        throwBtn.addEventListener('click', throwCoins);
        resetBtn.addEventListener('click', resetTool);
        
        // 线下模式事件
        generateHexagramBtn.addEventListener('click', generateHexagramFromInput);
        clearInputsBtn.addEventListener('click', clearOfflineInputs);
        
        // 爻输入实时预览
        yaoInputs.forEach((input, index) => {
            input.addEventListener('input', (e) => updateYaoDisplay(e.target, index));
        });
    }
    
    // 模式切换
    function switchMode(mode) {
        currentMode = mode;
        
        if (mode === 'online') {
            onlineModeBtn.classList.add('active');
            offlineModeBtn.classList.remove('active');
            onlineDivination.style.display = 'block';
            offlineDivination.style.display = 'none';
        } else {
            onlineModeBtn.classList.remove('active');
            offlineModeBtn.classList.add('active');
            onlineDivination.style.display = 'none';
            offlineDivination.style.display = 'block';
        }
        
        // 重置状态
        resetDisplays();
    }
    
    // 重置显示
    function resetDisplays() {
        hexagramDisplay.style.display = 'none';
        interpretation.style.display = 'none';
        document.getElementById('change-hexagram').style.display = 'none';
    }
    
    // 菊花数量转换为爻类型
    function flowerCountToYaoType(count) {
        switch (count) {
            case 0: return { type: 'old_yin', symbol: '⚋', name: '老阴（变）', changing: true };
            case 1: return { type: 'young_yang', symbol: '⚊', name: '少阳', changing: false };
            case 2: return { type: 'young_yin', symbol: '⚋', name: '少阴', changing: false };
            case 3: return { type: 'old_yang', symbol: '⚊', name: '老阳（变）', changing: true };
            default: return null;
        }
    }
    
    // 更新爻显示
    function updateYaoDisplay(input, index) {
        const value = parseInt(input.value);
        const display = yaoResultDisplays[index];
        
        if (isNaN(value) || value < 0 || value > 3) {
            display.textContent = '';
            display.style.display = 'none';
            return;
        }
        
        const yaoInfo = flowerCountToYaoType(value);
        if (yaoInfo) {
            display.textContent = `${yaoInfo.symbol} ${yaoInfo.name}`;
            display.style.display = 'inline-block';
            display.style.color = yaoInfo.changing ? '#e74c3c' : '#1976d2';
        }
    }
    
    // 从输入生成卦象
    function generateHexagramFromInput() {
        question = questionInput.value.trim();
        if (!question) {
            alert('请先输入您要占问的问题！');
            return;
        }
        
        // 收集所有输入值
        const inputs = [];
        let hasEmptyInput = false;
        
        yaoInputs.forEach((input) => {
            const value = parseInt(input.value);
            if (isNaN(value) || value < 0 || value > 3) {
                hasEmptyInput = true;
                return;
            }
            inputs[parseInt(input.dataset.yao)] = value;
        });
        
        if (hasEmptyInput || inputs.length !== 6) {
            alert('请填写完整的六次投掷结果（每个都要输入0-3的数字）！');
            return;
        }
        
        // 构建hexagramLines数组（按从下到上的顺序：初爻到上爻）
        hexagramLines = [];
        for (let i = 0; i < 6; i++) {
            const flowerCount = inputs[i];
            const yaoInfo = flowerCountToYaoType(flowerCount);
            
            hexagramLines.push({
                type: yaoInfo.type,
                symbol: yaoInfo.symbol,
                name: yaoInfo.name,
                flowerCount: flowerCount,
                changing: yaoInfo.changing
            });
        }
        
        // 生成并显示卦象
        processHexagramResult();
    }
    
    // 清空线下输入
    function clearOfflineInputs() {
        yaoInputs.forEach(input => {
            input.value = '';
        });
        yaoResultDisplays.forEach(display => {
            display.textContent = '';
            display.style.display = 'none';
        });
        resetDisplays();
    }
    
    // 开始在线占卜
    function startOnlineDivination() {
        question = questionInput.value.trim();
        if (!question) {
            alert('请先输入您要占问的问题！');
            return;
        }
        
        startBtn.style.display = 'none';
        throwBtn.style.display = 'inline-block';
        resetBtn.style.display = 'inline-block';
        throwingArea.style.display = 'block';
        
        currentThrow = 0;
        hexagramLines = [];
        updateThrowInfo();
    }
    
    // 投掷硬币
    function throwCoins() {
        if (currentThrow >= 6) return;
        
        // 模拟投掷三枚硬币
        const coins = [
            Math.random() < 0.5 ? 1 : 2, // 菊花=1, 数字=2
            Math.random() < 0.5 ? 1 : 2,
            Math.random() < 0.5 ? 1 : 2
        ];
        
        // 显示硬币动画
        animateCoins(coins);
        
        // 计算结果
        const flowerCount = coins.filter(c => c === 1).length;
        const yaoInfo = flowerCountToYaoType(flowerCount);
        
        hexagramLines.push({
            type: yaoInfo.type,
            symbol: yaoInfo.symbol,
            name: yaoInfo.name,
            coins: coins,
            flowerCount: flowerCount,
            changing: yaoInfo.changing
        });
        
        // 显示结果
        setTimeout(() => {
            displayThrowResult(coins, flowerCount, yaoInfo.name);
            
            currentThrow++;
            if (currentThrow < 6) {
                updateThrowInfo();
            } else {
                processHexagramResult();
            }
        }, 1000);
    }
    
    // 处理卦象结果（通用函数）
    function processHexagramResult() {
        if (currentMode === 'online') {
            throwBtn.style.display = 'none';
        }
        
        // 生成卦象代码
        const hexagramCode = HexagramDatabase.generateHexagramCode(hexagramLines);
        
        // 分析上下卦
        const lowerTrigram = hexagramCode.substring(0, 3);
        const upperTrigram = hexagramCode.substring(3, 6);
        
        const lowerTrigramInfo = HexagramDatabase.getTrigram(lowerTrigram);
        const upperTrigramInfo = HexagramDatabase.getTrigram(upperTrigram);
        
        // 查找六十四卦
        const hexagramInfo = HexagramDatabase.getHexagram(hexagramCode);
        
        // 显示卦象
        displayHexagram(hexagramInfo, upperTrigramInfo, lowerTrigramInfo);
        
        // 显示详细解释
        displayDetailedInterpretation(hexagramInfo);
    }
    
    // 重新开始
    function resetTool() {
        if (currentMode === 'online') {
            startBtn.style.display = 'inline-block';
            throwBtn.style.display = 'none';
            resetBtn.style.display = 'none';
            throwingArea.style.display = 'none';
        } else {
            clearOfflineInputs();
        }
        
        resetDisplays();
        currentThrow = 0;
        hexagramLines = [];
        questionInput.value = '';
    }
    
    // 更新投掷信息
    function updateThrowInfo() {
        document.getElementById('throw-count').textContent = `第 ${currentThrow + 1} 次投掷`;
        document.getElementById('yao-position').textContent = `（${yaoPositions[currentThrow]}）`;
    }
    
    // 硬币动画
    function animateCoins(coins) {
        const coinElements = [
            document.getElementById('coin1'),
            document.getElementById('coin2'),
            document.getElementById('coin3')
        ];
        
        coinElements.forEach((coin, index) => {
            coin.style.animation = 'none';
            coin.offsetHeight; // 触发重绘
            coin.style.animation = 'flip 0.6s ease-in-out';
            
            setTimeout(() => {
                coin.textContent = coins[index] === 1 ? '🌸' : '🔢';
            }, 300);
        });
    }
    
    // 显示投掷结果
    function displayThrowResult(coins, flowerCount, yaoName) {
        const details = `硬币结果：${coins.map(c => c === 1 ? '菊' : '数').join('-')} | 菊花${flowerCount}个`;
        document.getElementById('throw-details').textContent = details;
        document.getElementById('yao-result').textContent = `→ ${yaoName}`;
    }
    
    // 显示卦象
    function displayHexagram(hexagramInfo, upperTrigram, lowerTrigram) {
        const hexagramLinesElement = document.getElementById('hexagram-lines');
        hexagramLinesElement.innerHTML = '';
        
        // 从上到下显示爻（与投掷顺序相反）
        for (let i = 5; i >= 0; i--) {
            const line = document.createElement('div');
            line.textContent = hexagramLines[i].symbol;
            if (hexagramLines[i].changing) {
                line.style.color = '#e74c3c';
                line.style.fontWeight = 'bold';
                line.title = hexagramLines[i].name;
            }
            hexagramLinesElement.appendChild(line);
        }
        
        document.getElementById('hexagram-name').textContent = hexagramInfo.name;
        document.getElementById('upper-trigram').textContent = `${upperTrigram.symbol} ${upperTrigram.name}`;
        document.getElementById('lower-trigram').textContent = `${lowerTrigram.symbol} ${lowerTrigram.name}`;
        
        hexagramDisplay.style.display = 'block';
    }
    
    // 显示详细解释
    function displayDetailedInterpretation(hexagramInfo) {
        const content = `
            <div class="interpretation-section">
                <h6>🤔 您的问题</h6>
                <p>${question}</p>
            </div>
            
            <div class="interpretation-section">
                <h6>📖 卦象含义</h6>
                <p>${hexagramInfo.description}</p>
            </div>
            
            <div class="detailed-interpretation">
                <div class="interpretation-section">
                    <h6>🎯 总体判断</h6>
                    <p>${hexagramInfo.judgment}</p>
                </div>
                
                <div class="interpretation-section">
                    <h6>💼 事业财运</h6>
                    <p>${hexagramInfo.business}</p>
                </div>
                
                <div class="interpretation-section">
                    <h6>💕 感情婚姻</h6>
                    <p>${hexagramInfo.love}</p>
                </div>
                
                <div class="interpretation-section">
                    <h6>🏥 健康状况</h6>
                    <p>${hexagramInfo.health}</p>
                </div>
                
                <div class="interpretation-section">
                    <h6>💡 行动建议</h6>
                    <p>${hexagramInfo.advice}</p>
                </div>
            </div>
        `;
        
        document.getElementById('interpretation-content').innerHTML = content;
        interpretation.style.display = 'block';
        
        // 检查是否有变卦
        const changingLines = hexagramLines.filter(line => line.changing);
        
        if (changingLines.length > 0) {
            displayChangeHexagram(changingLines);
        }
    }
    
    // 显示变卦
    function displayChangeHexagram(changingLines) {
        const changeHexagram = HexagramDatabase.getChangeHexagram(hexagramLines);
        
        const changeInfo = `
            <p><strong>变爻分析：</strong>您的卦象中有 ${changingLines.length} 个变爻，表示事情会发生变化。</p>
            <p><strong>变卦：</strong>${changeHexagram.name}</p>
            <p><strong>变化趋势：</strong>${changeHexagram.description}</p>
            <p><strong>发展建议：</strong>老阴转阳，老阳转阴，预示着事物的发展会有新的转机。要顺应变化，把握时机。</p>
        `;
        
        document.getElementById('change-info').innerHTML = changeInfo;
        document.getElementById('change-hexagram').style.display = 'block';
    }
}
</script> 