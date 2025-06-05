/**
 * 三币占卜工具
 * 实现在线投币占卜和手动输入功能
 */

class DivinationTool {
    constructor() {
        this.currentThrow = 0;
        this.maxThrows = 6;
        this.throwResults = [];
        this.isOnlineMode = true;
        this.question = '';
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.populateQuestionSelector();
        this.setupCoinImages();
    }
    
    setupEventListeners() {
        // 模式切换
        document.getElementById('online-mode').addEventListener('click', () => {
            this.switchMode(true);
        });
        
        document.getElementById('offline-mode').addEventListener('click', () => {
            this.switchMode(false);
        });
        
        // 在线模式按钮
        document.getElementById('start-divination').addEventListener('click', () => {
            this.startDivination();
        });
        
        document.getElementById('throw-coins').addEventListener('click', () => {
            this.throwCoins();
        });
        
        document.getElementById('reset-divination').addEventListener('click', () => {
            this.resetDivination();
        });
        
        // 离线模式按钮
        document.getElementById('generate-hexagram').addEventListener('click', () => {
            this.generateOfflineHexagram();
        });
        
        document.getElementById('clear-inputs').addEventListener('click', () => {
            this.clearOfflineInputs();
        });
        
        // 问题选择器
        document.getElementById('question-selector').addEventListener('change', (e) => {
            if (e.target.value) {
                document.getElementById('question').value = e.target.value;
            }
        });
        
        // 离线输入监听
        document.querySelectorAll('.yao-input').forEach(input => {
            input.addEventListener('input', () => {
                this.updateYaoDisplay(input);
            });
        });
    }
    
    populateQuestionSelector() {
        const selector = document.getElementById('question-selector');
        if (typeof QUESTION_TEMPLATES !== 'undefined') {
            Object.entries(QUESTION_TEMPLATES).forEach(([key, value]) => {
                const option = document.createElement('option');
                option.value = value;
                option.textContent = value;
                selector.appendChild(option);
            });
        }
    }
    
    setupCoinImages() {
        // 设置硬币图片 - 使用用户提供的硬币图片
        const coins = document.querySelectorAll('.coin');
        coins.forEach((coin, index) => {
            coin.innerHTML = `<img class="coin-image" src="/images/xuanxue/coin-front.png" alt="硬币${index + 1}" />`;
        });
    }
    
    switchMode(isOnline) {
        this.isOnlineMode = isOnline;
        
        // 更新按钮状态
        document.getElementById('online-mode').classList.toggle('active', isOnline);
        document.getElementById('offline-mode').classList.toggle('active', !isOnline);
        
        // 显示/隐藏相应的界面
        document.getElementById('online-divination').style.display = isOnline ? 'block' : 'none';
        document.getElementById('offline-divination').style.display = isOnline ? 'none' : 'block';
        
        // 重置状态
        this.resetDivination();
    }
    
    startDivination() {
        this.question = document.getElementById('question').value.trim();
        if (!this.question) {
            alert('请先输入您要占问的事情！');
            return;
        }
        
        this.currentThrow = 0;
        this.throwResults = [];
        
        document.getElementById('start-divination').style.display = 'none';
        document.getElementById('throw-coins').style.display = 'inline-block';
        document.getElementById('reset-divination').style.display = 'inline-block';
        document.getElementById('throwing-area').style.display = 'block';
        
        this.updateThrowInfo();
    }
    
    throwCoins() {
        if (this.currentThrow >= this.maxThrows) {
            return;
        }
        
        // 动画效果
        this.animateCoins();
        
        // 生成随机结果
        setTimeout(() => {
            const result = this.generateCoinResult();
            this.throwResults.push(result);
            this.currentThrow++;
            
            this.displayThrowResult(result);
            this.updateThrowInfo();
            
            if (this.currentThrow >= this.maxThrows) {
                this.completeDivination();
            }
        }, 1000);
    }
    
    animateCoins() {
        const coins = document.querySelectorAll('.coin-image');
        coins.forEach(coin => {
            coin.style.animation = 'none';
            setTimeout(() => {
                coin.style.animation = 'flip 0.6s ease-in-out';
            }, 10);
        });
    }
    
    generateCoinResult() {
        // 生成三个硬币的结果
        const coin1 = Math.random() < 0.5 ? 1 : 2; // 1=菊花面, 2=数字面
        const coin2 = Math.random() < 0.5 ? 1 : 2;
        const coin3 = Math.random() < 0.5 ? 1 : 2;
        
        const totalHeads = [coin1, coin2, coin3].filter(c => c === 1).length;
        
        // 更新硬币显示
        this.updateCoinDisplay([coin1, coin2, coin3]);
        
        // 确定爻的类型
        let yaoType;
        if (totalHeads === 0) yaoType = 0; // 老阴
        else if (totalHeads === 1) yaoType = 1; // 少阳
        else if (totalHeads === 2) yaoType = 2; // 少阴
        else yaoType = 3; // 老阳
        
        return {
            coins: [coin1, coin2, coin3],
            heads: totalHeads,
            yaoType: yaoType,
            yaoInfo: YAO_TYPES[yaoType]
        };
    }
    
    updateCoinDisplay(coinResults) {
        const coins = document.querySelectorAll('.coin-image');
        coins.forEach((coin, index) => {
            // 1=菊花面(正面), 2=数字面(反面)
            if (coinResults[index] === 1) {
                // 显示菊花面（右边）
                coin.style.transform = 'scaleX(1)';
                coin.src = '/images/xuanxue/coin-heads.png';
            } else {
                // 显示数字面（左边）
                coin.style.transform = 'scaleX(-1)';
                coin.src = '/images/xuanxue/coin-tails.png';
            }
        });
    }
    
    displayThrowResult(result) {
        const detailsElement = document.getElementById('throw-details');
        const resultElement = document.getElementById('yao-result');
        
        detailsElement.textContent = `菊花数量: ${result.heads}个`;
        resultElement.textContent = `${result.yaoInfo.name} (${result.yaoInfo.symbol})`;
        
        if (result.yaoInfo.changing) {
            resultElement.textContent += ' → 变爻';
            resultElement.style.color = '#e74c3c';
        } else {
            resultElement.style.color = '#27ae60';
        }
    }
    
    updateThrowInfo() {
        const yaoPositions = ['初爻', '二爻', '三爻', '四爻', '五爻', '上爻'];
        document.getElementById('throw-count').textContent = `第 ${this.currentThrow + 1} 次投掷`;
        document.getElementById('yao-position').textContent = `（${yaoPositions[this.currentThrow]}）`;
    }
    
    completeDivination() {
        document.getElementById('throw-coins').style.display = 'none';
        this.generateHexagram();
    }
    
    generateHexagram() {
        // 从投掷结果生成六爻卦
        const binaryString = this.throwResults.map(result => {
            return result.yaoType === 1 || result.yaoType === 3 ? '1' : '0';
        }).reverse().join(''); // 需要反转，因为投掷是从下往上的
        
        // 生成变卦
        const changeBinaryString = this.throwResults.map(result => {
            if (result.yaoInfo.changing) {
                return result.yaoType === 0 ? '1' : '0'; // 老阴变阳，老阳变阴
            } else {
                return result.yaoType === 1 || result.yaoType === 3 ? '1' : '0';
            }
        }).reverse().join('');
        
        this.displayHexagram(binaryString, changeBinaryString);
    }
    
    generateOfflineHexagram() {
        const inputs = document.querySelectorAll('.yao-input');
        const results = [];
        
        // 验证输入
        let allValid = true;
        inputs.forEach(input => {
            const value = parseInt(input.value);
            if (isNaN(value) || value < 0 || value > 3) {
                allValid = false;
            } else {
                results.push(value);
            }
        });
        
        if (!allValid) {
            alert('请输入正确的菊花数量（0-3）！');
            return;
        }
        
        this.question = document.getElementById('question').value.trim();
        if (!this.question) {
            alert('请先输入您要占问的事情！');
            return;
        }
        
        // 转换为投掷结果格式
        this.throwResults = results.reverse().map(heads => {
            let yaoType;
            if (heads === 0) yaoType = 0; // 老阴
            else if (heads === 1) yaoType = 1; // 少阳
            else if (heads === 2) yaoType = 2; // 少阴
            else yaoType = 3; // 老阳
            
            return {
                heads: heads,
                yaoType: yaoType,
                yaoInfo: YAO_TYPES[yaoType]
            };
        });
        
        this.generateHexagram();
    }
    
    updateYaoDisplay(input) {
        const value = parseInt(input.value);
        const yaoIndex = parseInt(input.dataset.yao);
        const displayElement = document.querySelector(`.yao-result-display[data-yao="${yaoIndex}"]`);
        
        if (!isNaN(value) && value >= 0 && value <= 3) {
            const yaoInfo = YAO_TYPES[value];
            displayElement.textContent = `${yaoInfo.name} (${yaoInfo.symbol})`;
            displayElement.style.color = yaoInfo.changing ? '#e74c3c' : '#27ae60';
        } else {
            displayElement.textContent = '';
        }
    }
    
    displayHexagram(binaryString, changeBinaryString = null) {
        // 获取卦象信息
        const hexagram = this.getHexagramInfo(binaryString);
        if (!hexagram) {
            this.displayBasicHexagram(binaryString, changeBinaryString);
            return;
        }
        
        // 显示卦象
        document.getElementById('hexagram-display').style.display = 'block';
        document.getElementById('interpretation').style.display = 'block';
        
        // 显示卦象线条
        this.displayHexagramLines(binaryString);
        
        // 显示卦象信息
        document.getElementById('hexagram-name').textContent = hexagram.name;
        document.getElementById('upper-trigram').textContent = hexagram.upperTrigram;
        document.getElementById('lower-trigram').textContent = hexagram.lowerTrigram;
        
        // 显示解释
        this.displayInterpretation(hexagram, changeBinaryString);
        
        // 滚动到结果
        document.getElementById('hexagram-display').scrollIntoView({ behavior: 'smooth' });
    }
    
    displayBasicHexagram(binaryString, changeBinaryString) {
        // 基础卦象显示（当数据库中没有对应卦象时）
        document.getElementById('hexagram-display').style.display = 'block';
        document.getElementById('interpretation').style.display = 'block';
        
        this.displayHexagramLines(binaryString);
        
        const upperBinary = binaryString.slice(0, 3);
        const lowerBinary = binaryString.slice(3, 6);
        
        const upperTrigram = getTrigramInfo(upperBinary);
        const lowerTrigram = getTrigramInfo(lowerBinary);
        
        document.getElementById('hexagram-name').textContent = `${upperTrigram?.name || '未知'}${lowerTrigram?.name || '未知'}`;
        document.getElementById('upper-trigram').textContent = upperTrigram?.name || '未知';
        document.getElementById('lower-trigram').textContent = lowerTrigram?.name || '未知';
        
        // 基础解释
        const interpretationContent = document.getElementById('interpretation-content');
        interpretationContent.innerHTML = `
            <div class="interpretation-section">
                <h6>🎯 基本卦象</h6>
                <p>上卦：${upperTrigram?.name}（${upperTrigram?.element}），象征${upperTrigram?.element}之象</p>
                <p>下卦：${lowerTrigram?.name}（${lowerTrigram?.element}），象征${lowerTrigram?.element}之象</p>
                <p>此卦象征着${upperTrigram?.element}与${lowerTrigram?.element}的结合，请结合实际情况进行分析。</p>
            </div>
        `;
        
        if (changeBinaryString && changeBinaryString !== binaryString) {
            this.displayChangeHexagram(changeBinaryString);
        }
    }
    
    displayHexagramLines(binaryString) {
        const linesContainer = document.getElementById('hexagram-lines');
        linesContainer.innerHTML = '';
        
        // 从上到下显示爻线（与二进制字符串顺序相同）
        for (let i = 0; i < 6; i++) {
            const bit = binaryString[i];
            const throwIndex = 5 - i; // 对应投掷顺序
            const result = this.throwResults[throwIndex];
            
            const lineDiv = document.createElement('div');
            lineDiv.className = 'hexagram-line';
            
            if (result && result.yaoInfo.changing) {
                lineDiv.classList.add('changing-line');
            }
            
            lineDiv.textContent = bit === '1' ? '⚊' : '⚋';
            linesContainer.appendChild(lineDiv);
        }
    }
    
    displayInterpretation(hexagram, changeBinaryString) {
        const interpretationContent = document.getElementById('interpretation-content');
        
        let content = `
            <div class="interpretation-section">
                <h6>🎯 卦象解读</h6>
                <p><strong>卦名：</strong>${hexagram.name}</p>
                <p><strong>含义：</strong>${hexagram.meaning}</p>
                <p><strong>判断：</strong>${hexagram.judgment}</p>
            </div>
            
            <div class="interpretation-section">
                <h6>📊 针对您的问题</h6>
                <p><strong>您的问题：</strong>${this.question}</p>
            </div>
        `;
        
        if (hexagram.interpretation) {
            content += `
                <div class="detailed-interpretation">
                    <div class="interpretation-section">
                        <h6>💡 总体指导</h6>
                        <p>${hexagram.interpretation.general}</p>
                    </div>
                    
                    <div class="interpretation-section">
                        <h7>🏢 事业方面</h7>
                        <p>${hexagram.interpretation.career}</p>
                    </div>
                    
                    <div class="interpretation-section">
                        <h7>💰 财富方面</h7>
                        <p>${hexagram.interpretation.wealth}</p>
                    </div>
                    
                    <div class="interpretation-section">
                        <h7>❤️ 感情方面</h7>
                        <p>${hexagram.interpretation.love}</p>
                    </div>
                    
                    <div class="interpretation-section">
                        <h7>🏥 健康方面</h7>
                        <p>${hexagram.interpretation.health}</p>
                    </div>
                    
                    <div class="interpretation-section">
                        <h7>💫 建议</h7>
                        <p>${hexagram.interpretation.advice}</p>
                    </div>
                </div>
            `;
        }
        
        interpretationContent.innerHTML = content;
        
        // 显示变卦
        if (changeBinaryString && changeBinaryString !== hexagram.binary) {
            this.displayChangeHexagram(changeBinaryString);
        }
    }
    
    displayChangeHexagram(changeBinaryString) {
        const changeHexagram = this.getHexagramInfo(changeBinaryString);
        const changeContainer = document.getElementById('change-hexagram');
        
        if (changeHexagram) {
            changeContainer.style.display = 'block';
            document.getElementById('change-info').innerHTML = `
                <h5>🔄 变卦：${changeHexagram.name}</h5>
                <p><strong>变化趋势：</strong>${changeHexagram.interpretation?.general || '此卦象征着事物的发展变化方向。'}</p>
                <p><strong>发展建议：</strong>${changeHexagram.interpretation?.advice || '根据变化趋势，适时调整策略。'}</p>
            `;
        } else {
            changeContainer.style.display = 'none';
        }
    }
    
    getHexagramInfo(binaryString) {
        // 优先使用新的统一数据接口
        if (typeof window.getHexagramByBinary === 'function') {
            return window.getHexagramByBinary(binaryString);
        }
        
        // 后备方案：使用原始数据
        if (typeof HEXAGRAM_EXTRACTED_DATA !== 'undefined') {
            return HEXAGRAM_EXTRACTED_DATA[binaryString] || null;
        }
        
        // 如果都没有，返回null
        console.warn(`未找到卦象数据：${binaryString}`);
        return null;
    }
    
    clearOfflineInputs() {
        document.querySelectorAll('.yao-input').forEach(input => {
            input.value = '';
        });
        document.querySelectorAll('.yao-result-display').forEach(display => {
            display.textContent = '';
        });
        this.hideResults();
    }
    
    resetDivination() {
        this.currentThrow = 0;
        this.throwResults = [];
        
        // 重置按钮状态
        document.getElementById('start-divination').style.display = 'inline-block';
        document.getElementById('throw-coins').style.display = 'none';
        document.getElementById('reset-divination').style.display = 'none';
        document.getElementById('throwing-area').style.display = 'none';
        
        // 重置硬币显示
        this.setupCoinImages();
        
        // 隐藏结果
        this.hideResults();
    }
    
    hideResults() {
        document.getElementById('hexagram-display').style.display = 'none';
        document.getElementById('interpretation').style.display = 'none';
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    new DivinationTool();
}); 