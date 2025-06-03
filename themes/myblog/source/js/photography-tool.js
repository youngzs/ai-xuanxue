// 专业人像摄影提示生成器
class PhotographyTool {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.customKeywords = [];
        this.promptHistory = [];
        this.imageUrls = [];
        this.currentImageIndex = 0;
        
        this.init();
    }

    init() {
        this.createHTML();
        this.bindEvents();
        this.detectColorScheme();
    }

    createHTML() {
        this.container.innerHTML = `
            <div class="photography-tool">
                <!-- 深色模式切换 -->
                <div class="mode-toggle" id="photo-mode-toggle">
                    <svg class="moon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg class="sun" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/>
                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>

                <!-- 提示消息 -->
                <div class="toast-container">
                    <div class="toast" id="photo-error-toast"></div>
                </div>

                <!-- 复制临时元素 -->
                <textarea id="photo-copy-textarea" class="copy-temp" readonly></textarea>
                
                <!-- 图片查看器 -->
                <div id="photo-image-viewer" class="image-viewer">
                    <div class="image-viewer-content">
                        <span class="close-viewer">&times;</span>
                        <img id="photo-viewer-image" class="viewer-image">
                        <a class="prev">&#10094;</a>
                        <a class="next">&#10095;</a>
                        <div class="image-number"></div>
                    </div>
                </div>

                <header class="tool-header">
                    <h1>专业人像摄影提示生成器</h1>
                    <p class="subtitle">生成精准的人像摄影提示语，用于创建高质量的专业人像图像</p>
                </header>
                
                <div class="tool-container">
                    <div class="options-panel">
                        <div class="tab-container">
                            <div class="tab-buttons">
                                <button class="tab-button active" data-tab="basic-options">基础选项</button>
                                <button class="tab-button" data-tab="advanced-options-tab">高级选项</button>
                                <button class="tab-button" data-tab="help-tab">使用帮助</button>
                            </div>
                            
                            <div class="tab-content">
                                <div class="tab-pane active" id="basic-options">
                                    <div class="section-title">模特与场景设置</div>
                                    <div class="options-grid">
                                        <div class="form-group">
                                            <label for="portrait-style">摄影风格
                                                <span class="tooltip">
                                                    <span class="tooltip-icon">?</span>
                                                    <span class="tooltip-text">决定整体艺术风格和视觉效果</span>
                                                </span>
                                            </label>
                                            <select id="portrait-style">
                                                <option value="fashion">时尚摄影 (Fashion)</option>
                                                <option value="portrait">肖像摄影 (Portrait)</option>
                                                <option value="artistic">艺术摄影 (Artistic)</option>
                                                <option value="editorial">杂志社论 (Editorial)</option>
                                                <option value="commercial">商业摄影 (Commercial)</option>
                                                <option value="beauty">美妆摄影 (Beauty)</option>
                                                <option value="street">街拍风格 (Street)</option>
                                                <option value="cinematic">电影风格 (Cinematic)</option>
                                            </select>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="scene-setting">场景设置</label>
                                            <select id="scene-setting">
                                                <option value="studio">摄影棚 (Studio)</option>
                                                <option value="urban">城市环境 (Urban)</option>
                                                <option value="nature">自然环境 (Nature)</option>
                                                <option value="beach">海滩 (Beach)</option>
                                                <option value="forest">森林 (Forest)</option>
                                                <option value="mountains">山脉 (Mountains)</option>
                                                <option value="cafe">咖啡馆 (Cafe)</option>
                                                <option value="library">图书馆 (Library)</option>
                                                <option value="modern-interior">现代室内 (Modern Interior)</option>
                                                <option value="vintage-interior">复古室内 (Vintage Interior)</option>
                                                <option value="rooftop">屋顶天台 (Rooftop)</option>
                                            </select>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="pose-type">姿势类型</label>
                                            <select id="pose-type">
                                                <option value="natural">自然随意 (Natural)</option>
                                                <option value="professional">专业模特 (Professional)</option>
                                                <option value="sitting">坐姿 (Sitting)</option>
                                                <option value="standing">站姿 (Standing)</option>
                                                <option value="leaning">倚靠姿势 (Leaning)</option>
                                                <option value="candid">抓拍姿势 (Candid)</option>
                                                <option value="artistic">艺术姿势 (Artistic)</option>
                                                <option value="action">动态姿势 (Action)</option>
                                                <option value="profile">侧面姿势 (Profile)</option>
                                            </select>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="facial-expression">面部表情</label>
                                            <select id="facial-expression">
                                                <option value="neutral">自然表情 (Neutral)</option>
                                                <option value="smiling">微笑 (Smiling)</option>
                                                <option value="serious">严肃 (Serious)</option>
                                                <option value="confident">自信 (Confident)</option>
                                                <option value="pensive">若有所思 (Pensive)</option>
                                                <option value="joyful">愉悦 (Joyful)</option>
                                                <option value="melancholic">忧郁 (Melancholic)</option>
                                                <option value="dramatic">戏剧性表情 (Dramatic)</option>
                                            </select>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="framing-composition">构图方式</label>
                                            <select id="framing-composition">
                                                <option value="close-up">特写 (Close-up)</option>
                                                <option value="medium-shot">中景 (Medium shot)</option>
                                                <option value="full-body">全身像 (Full body)</option>
                                                <option value="over-the-shoulder">肩部视角 (Over the shoulder)</option>
                                                <option value="environmental">环境人像 (Environmental)</option>
                                                <option value="symmetrical">对称构图 (Symmetrical)</option>
                                                <option value="rule-of-thirds">三分法则 (Rule of thirds)</option>
                                                <option value="dutch-angle">倾斜角度 (Dutch angle)</option>
                                                <option value="birds-eye">俯视角度 (Bird's eye)</option>
                                                <option value="low-angle">低角度 (Low angle)</option>
                                            </select>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="lighting">光线设置</label>
                                            <select id="lighting">
                                                <option value="soft">柔光 (Soft light)</option>
                                                <option value="dramatic">戏剧性光线 (Dramatic)</option>
                                                <option value="natural">自然光 (Natural light)</option>
                                                <option value="golden-hour">黄金时刻 (Golden hour)</option>
                                                <option value="blue-hour">蓝调时刻 (Blue hour)</option>
                                                <option value="studio-lighting">棚拍光线 (Studio)</option>
                                                <option value="backlight">逆光 (Backlight)</option>
                                                <option value="side-light">侧光 (Side light)</option>
                                                <option value="rembrandt">伦勃朗光线 (Rembrandt)</option>
                                                <option value="split">分割光线 (Split lighting)</option>
                                                <option value="high-key">高调光线 (High key)</option>
                                                <option value="low-key">低调光线 (Low key)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="style-influence">视觉风格参考</label>
                                        <select id="style-influence">
                                            <option value="modern">现代简约 (Modern)</option>
                                            <option value="vintage">复古风格 (Vintage)</option>
                                            <option value="film">胶片风格 (Film)</option>
                                            <option value="high-fashion">高级时尚 (High Fashion)</option>
                                            <option value="minimalist">极简主义 (Minimalist)</option>
                                            <option value="glamour">魅力风格 (Glamour)</option>
                                            <option value="experimental">实验性风格 (Experimental)</option>
                                            <option value="classic">经典风格 (Classic)</option>
                                            <option value="edgy">前卫风格 (Edgy)</option>
                                            <option value="documentary">纪实风格 (Documentary)</option>
                                            <option value="punk">朋克风格 (Punk)</option>
                                            <option value="bohemian">波希米亚风格 (Bohemian)</option>
                                            <option value="elegant">优雅风格 (Elegant)</option>
                                        </select>
                                    </div>
                                    
                                    <div class="multi-image-num">
                                        <label for="image-number">生成图片数量:</label>
                                        <div class="number-picker">
                                            <button id="decrease-num">-</button>
                                            <input type="number" id="image-number" min="1" max="4" value="1" readonly>
                                            <button id="increase-num">+</button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="tab-pane" id="advanced-options-tab">
                                    <div class="section-title">高级设置</div>
                                    <div class="options-grid">
                                        <div class="form-group">
                                            <label for="art-style">艺术处理风格</label>
                                            <select id="art-style">
                                                <option value="">-- 不指定 --</option>
                                                <option value="photorealistic">超写实 (Photorealistic)</option>
                                                <option value="watercolor">水彩风格 (Watercolor)</option>
                                                <option value="oil-painting">油画风格 (Oil painting)</option>
                                                <option value="sketch">素描风格 (Sketch)</option>
                                                <option value="digital-art">数字艺术 (Digital art)</option>
                                                <option value="pop-art">波普艺术 (Pop art)</option>
                                                <option value="anime">动漫风格 (Anime style)</option>
                                                <option value="comic">漫画风格 (Comic style)</option>
                                            </select>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="color-scheme">色彩方案</label>
                                            <select id="color-scheme">
                                                <option value="vibrant">鲜艳色彩 (Vibrant)</option>
                                                <option value="muted">柔和色调 (Muted)</option>
                                                <option value="monochrome">单色 (Monochrome)</option>
                                                <option value="black-and-white">黑白 (Black and white)</option>
                                                <option value="sepia">复古棕褐色 (Sepia)</option>
                                                <option value="pastel">粉彩色调 (Pastel)</option>
                                                <option value="warm">暖色调 (Warm tones)</option>
                                                <option value="cool">冷色调 (Cool tones)</option>
                                                <option value="complementary">互补色 (Complementary)</option>
                                            </select>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="lens-type">镜头类型</label>
                                            <select id="lens-type">
                                                <option value="standard">标准镜头 (Standard)</option>
                                                <option value="wide-angle">广角镜头 (Wide angle)</option>
                                                <option value="telephoto">长焦镜头 (Telephoto)</option>
                                                <option value="prime-35mm">35mm定焦 (Prime 35mm)</option>
                                                <option value="prime-50mm">50mm定焦 (Prime 50mm)</option>
                                                <option value="prime-85mm">85mm定焦 (Prime 85mm)</option>
                                                <option value="macro">微距镜头 (Macro)</option>
                                                <option value="fisheye">鱼眼镜头 (Fisheye)</option>
                                                <option value="tilt-shift">移轴镜头 (Tilt-shift)</option>
                                            </select>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="camera-settings">相机设置</label>
                                            <select id="camera-settings">
                                                <option value="shallow-dof">浅景深 (Shallow DoF)</option>
                                                <option value="deep-dof">深景深 (Deep DoF)</option>
                                                <option value="long-exposure">长曝光 (Long exposure)</option>
                                                <option value="fast-shutter">高速快门 (Fast shutter)</option>
                                                <option value="bokeh">散景效果 (Bokeh)</option>
                                                <option value="high-iso">高ISO (High ISO)</option>
                                                <option value="motion-blur">动态模糊 (Motion blur)</option>
                                                <option value="hdr">高动态范围 (HDR)</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="aspect-ratio">图像比例</label>
                                        <select id="aspect-ratio">
                                            <option value="9:16">9:16 (手机全屏)</option>
                                            <option value="16:9">16:9 (宽屏)</option>
                                            <option value="3:4">3:4 (标准人像)</option>
                                            <option value="4:5">4:5 (Instagram最佳比例)</option>
                                            <option value="1:1">1:1 (正方形)</option>
                                            <option value="2:3">2:3 (标准打印)</option>
                                        </select>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="custom-keyword">自定义关键词</label>
                                        <input type="text" id="custom-keyword" placeholder="输入自定义关键词，回车添加">
                                    </div>
                                    
                                    <div class="tag-list" id="keyword-tags">
                                        <!-- 用户添加的标签将显示在这里 -->
                                    </div>
                                    
                                    <div class="switch-container">
                                        <label class="switch">
                                            <input type="checkbox" id="high-resolution" checked>
                                            <span class="slider"></span>
                                        </label>
                                        <span>指定高分辨率</span>
                                    </div>
                                    
                                    <div class="switch-container">
                                        <label class="switch">
                                            <input type="checkbox" id="use-quality-prompt" checked>
                                            <span class="slider"></span>
                                        </label>
                                        <span>添加质量提升词</span>
                                    </div>
                                </div>
                                
                                <div class="tab-pane" id="help-tab">
                                    <div class="section-title">使用指南</div>
                                    <div class="tip-box">
                                        <h3>关于人像摄影提示</h3>
                                        <div class="tip-item">• 提供清晰具体的场景、光线和姿势描述能显著提高生成质量</div>
                                        <div class="tip-item">• 不同的摄影风格会带来完全不同的视觉效果</div>
                                        <div class="tip-item">• 使用专业摄影术语（如镜头类型、光线技巧等）有助于获得更专业的结果</div>
                                    </div>
                                    
                                    <div class="tip-box">
                                        <h3>批量生成技巧</h3>
                                        <div class="tip-item">• 选择相似但略有变化的提示可以产生连贯的系列作品</div>
                                        <div class="tip-item">• 1-2张图像生成较快，3-4张可能需要更长时间</div>
                                        <div class="tip-item">• 对于重要创作，建议单张生成以获得最佳质量</div>
                                    </div>
                                    
                                    <div class="tip-box">
                                        <h3>应用场景建议</h3>
                                        <div class="tip-item">• <strong>时尚摄影</strong>: 适合杂志、社交媒体和产品展示</div>
                                        <div class="tip-item">• <strong>艺术肖像</strong>: 非传统创意表达，适合艺术项目</div>
                                        <div class="tip-item">• <strong>商业摄影</strong>: 适合广告、品牌推广和市场营销</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="button-group">
                            <button id="generate-prompt">生成提示语</button>
                            <button id="random-options" class="button-secondary">随机选项</button>
                        </div>
                    </div>
                    
                    <div class="result-panel">
                        <div class="section-title">生成的提示语</div>
                        <div class="prompt-result" id="prompt-result">
选择左侧参数后点击"生成提示语"按钮，这里将显示生成的AI提示语。

提示语将包含人像摄影所需的专业摄影参数与视觉风格描述。
                        </div>
                        
                        <div class="button-group">
                            <button id="copy-prompt" class="button-success">复制提示语</button>
                            <button id="save-prompt">保存提示语</button>
                        </div>
                        
                        <div class="image-result-container" id="image-result-container">
                            <div class="image-result-title">
                                <span>生成的图像</span>
                                <button id="close-image" class="button-secondary" style="padding: 5px 10px; margin: 0;">关闭</button>
                            </div>
                            <div class="image-loading" id="image-loading">
                                <span class="loading-dots">正在生成图像</span>
                            </div>
                            <div class="image-error" id="image-error">生成图像时发生错误</div>
                            <div id="generated-images" class="generated-images">
                                <!-- 生成的图像将在这里显示 -->
                            </div>
                            <p class="save-image-text">右键点击图片并选择"保存图片"以下载</p>
                        </div>
                        
                        <div class="history-container">
                            <div class="section-title">历史提示语</div>
                            <div id="history-list">
                                <!-- 历史提示语将显示在这里 -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    bindEvents() {
        // 获取所有必要的DOM元素
        this.getElements();
        
        // 绑定基础事件
        this.bindBasicEvents();
        
        // 绑定高级功能事件
        this.bindAdvancedEvents();
    }

    getElements() {
        // 基础元素
        this.portraitStyle = document.getElementById('portrait-style');
        this.sceneSetting = document.getElementById('scene-setting');
        this.poseType = document.getElementById('pose-type');
        this.facialExpression = document.getElementById('facial-expression');
        this.framingComposition = document.getElementById('framing-composition');
        this.lighting = document.getElementById('lighting');
        this.styleInfluence = document.getElementById('style-influence');
        this.imageNumber = document.getElementById('image-number');
        this.decreaseNum = document.getElementById('decrease-num');
        this.increaseNum = document.getElementById('increase-num');
        
        // 高级选项
        this.artStyle = document.getElementById('art-style');
        this.colorScheme = document.getElementById('color-scheme');
        this.lensType = document.getElementById('lens-type');
        this.cameraSettings = document.getElementById('camera-settings');
        this.aspectRatio = document.getElementById('aspect-ratio');
        this.customKeyword = document.getElementById('custom-keyword');
        this.keywordTags = document.getElementById('keyword-tags');
        this.highResolution = document.getElementById('high-resolution');
        this.useQualityPrompt = document.getElementById('use-quality-prompt');
        
        // 按钮和结果
        this.generateBtn = document.getElementById('generate-prompt');
        this.randomBtn = document.getElementById('random-options');
        this.promptResult = document.getElementById('prompt-result');
        this.copyBtn = document.getElementById('copy-prompt');
        this.saveBtn = document.getElementById('save-prompt');
        this.historyList = document.getElementById('history-list');
        
        // 标签页
        this.tabButtons = document.querySelectorAll('.tab-button');
        this.tabPanes = document.querySelectorAll('.tab-pane');
        
        // 图像相关
        this.imageResultContainer = document.getElementById('image-result-container');
        this.imageLoading = document.getElementById('image-loading');
        this.imageError = document.getElementById('image-error');
        this.generatedImages = document.getElementById('generated-images');
        this.closeImageBtn = document.getElementById('close-image');
        
        // 图片查看器
        this.imageViewer = document.getElementById('photo-image-viewer');
        this.viewerImage = document.getElementById('photo-viewer-image');
        this.prevButton = document.querySelector('.prev');
        this.nextButton = document.querySelector('.next');
        this.closeViewer = document.querySelector('.close-viewer');
        this.imageCounter = document.querySelector('.image-number');
    }

    bindBasicEvents() {
        // 图片数量增减
        this.decreaseNum.addEventListener('click', () => {
            let num = parseInt(this.imageNumber.value);
            if (num > 1) {
                this.imageNumber.value = num - 1;
            }
        });
        
        this.increaseNum.addEventListener('click', () => {
            let num = parseInt(this.imageNumber.value);
            if (num < 4) {
                this.imageNumber.value = num + 1;
            }
        });
        
        // 标签页切换
        this.tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.tabButtons.forEach(btn => btn.classList.remove('active'));
                this.tabPanes.forEach(pane => pane.classList.remove('active'));
                
                button.classList.add('active');
                const tabId = button.getAttribute('data-tab');
                const tabElement = document.getElementById(tabId);
                if (tabElement) {
                    tabElement.classList.add('active');
                }
            });
        });
        
        // 生成提示语
        this.generateBtn.addEventListener('click', () => {
            this.generatePrompt();
        });
        
        // 随机选项
        this.randomBtn.addEventListener('click', () => {
            this.randomizeOptions();
        });
        
        // 复制提示语
        this.copyBtn.addEventListener('click', () => {
            this.copyPrompt();
        });
        
        // 保存提示语
        this.saveBtn.addEventListener('click', () => {
            this.savePrompt();
        });
        
        // 深色模式切换
        const modeToggle = document.getElementById('photo-mode-toggle');
        if (modeToggle) {
            modeToggle.addEventListener('click', () => {
                this.container.classList.toggle('dark-mode');
            });
        }
    }

    bindAdvancedEvents() {
        // 自定义关键词
        this.customKeyword.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && this.customKeyword.value.trim()) {
                this.addKeyword(this.customKeyword.value.trim());
                this.customKeyword.value = '';
            }
        });
        
        // 图片查看器事件
        if (this.closeViewer) {
            this.closeViewer.addEventListener('click', () => this.closeImageViewer());
        }
        if (this.prevButton) {
            this.prevButton.addEventListener('click', () => this.showPrevImage());
        }
        if (this.nextButton) {
            this.nextButton.addEventListener('click', () => this.showNextImage());
        }
        
        // 键盘导航
        document.addEventListener('keydown', (e) => {
            if (this.imageViewer && this.imageViewer.style.display === 'block') {
                if (e.key === 'ArrowLeft') {
                    this.showPrevImage();
                } else if (e.key === 'ArrowRight') {
                    this.showNextImage();
                } else if (e.key === 'Escape') {
                    this.closeImageViewer();
                }
            }
        });
        
        // 关闭图像结果
        if (this.closeImageBtn) {
            this.closeImageBtn.addEventListener('click', () => {
                this.imageResultContainer.style.display = "none";
            });
        }
    }

    // 检测深色模式
    detectColorScheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.container.classList.add('dark-mode');
        }
        
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            if (event.matches) {
                this.container.classList.add('dark-mode');
            } else {
                this.container.classList.remove('dark-mode');
            }
        });
    }

    // 添加关键词
    addKeyword(keyword) {
        if (this.customKeywords.includes(keyword)) return;
        
        this.customKeywords.push(keyword);
        
        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.innerHTML = `${keyword} <span class="remove-tag" data-keyword="${keyword}">×</span>`;
        this.keywordTags.appendChild(tag);
        
        // 添加删除事件
        tag.querySelector('.remove-tag').addEventListener('click', () => {
            this.customKeywords = this.customKeywords.filter(k => k !== keyword);
            tag.remove();
        });
    }

    // 随机选择选项
    randomizeOptions() {
        const selectElements = [
            this.portraitStyle, this.sceneSetting, this.poseType, 
            this.facialExpression, this.framingComposition, this.lighting, 
            this.styleInfluence, this.artStyle, this.colorScheme, 
            this.lensType, this.cameraSettings, this.aspectRatio
        ];
        
        selectElements.forEach(select => {
            if (select) {
                const options = select.options;
                const randomIndex = Math.floor(Math.random() * options.length);
                select.selectedIndex = randomIndex;
            }
        });
        
        // 随机切换复选框
        this.highResolution.checked = Math.random() > 0.3;
        this.useQualityPrompt.checked = Math.random() > 0.2;
        
        // 随机设置图片数量
        this.imageNumber.value = Math.floor(Math.random() * 4) + 1;
    }

    // 生成提示语
    generatePrompt() {
        let prompt = `Professional ${this.portraitStyle.value} photography of a model, ${this.poseType.value} pose with ${this.facialExpression.value} expression, in ${this.sceneSetting.value} setting, ${this.framingComposition.value} composition, with ${this.lighting.value} lighting, ${this.styleInfluence.value} style`;
        
        // 添加高级选项
        if (this.artStyle.value) {
            prompt += `, ${this.artStyle.value} art style`;
        }
        
        prompt += `, ${this.colorScheme.value} color scheme`;
        prompt += `, shot with ${this.lensType.value} lens, ${this.cameraSettings.value}`;
        
        if (this.highResolution.checked) {
            prompt += ', high resolution';
        }
        
        if (this.useQualityPrompt.checked) {
            prompt += ', professional, detailed, sharp focus, high quality, 8k';
        }
        
        if (this.customKeywords.length > 0) {
            prompt += `, ${this.customKeywords.join(', ')}`;
        }
        
        const ratio = this.aspectRatio.value;
        if (ratio) {
            prompt += ` --aspect ${ratio}`;
        }
        
        this.promptResult.textContent = prompt;
        return prompt;
    }

    // 复制提示语
    copyPrompt() {
        const promptText = this.promptResult.textContent.trim();
        if (!promptText || promptText.includes('选择左侧参数')) return;
        
        if (this.copyTextToClipboard(promptText)) {
            const originalText = this.copyBtn.textContent;
            this.copyBtn.textContent = '已复制!';
            setTimeout(() => {
                this.copyBtn.textContent = originalText;
            }, 2000);
        } else {
            this.showToast('复制失败，请手动复制文本');
        }
    }

    // 保存提示语
    savePrompt() {
        const promptText = this.promptResult.textContent.trim();
        if (!promptText || promptText.includes('选择左侧参数')) return;
        
        if (!this.promptHistory.includes(promptText)) {
            this.promptHistory.unshift(promptText);
            
            if (this.promptHistory.length > 10) {
                this.promptHistory.pop();
            }
            
            this.renderHistory();
            
            const originalText = this.saveBtn.textContent;
            this.saveBtn.textContent = '保存成功!';
            setTimeout(() => {
                this.saveBtn.textContent = originalText;
            }, 2000);
        }
    }

    // 显示历史提示语
    renderHistory() {
        this.historyList.innerHTML = '';
        this.promptHistory.slice(0, 5).forEach((prompt) => {
            const item = document.createElement('div');
            item.className = 'history-item';
            item.textContent = prompt.substring(0, 50) + (prompt.length > 50 ? '...' : '');
            item.addEventListener('click', () => {
                this.promptResult.textContent = prompt;
            });
            this.historyList.appendChild(item);
        });
    }

    // 复制到剪贴板
    copyTextToClipboard(text) {
        const copyTextarea = document.getElementById('photo-copy-textarea');
        copyTextarea.value = text;
        copyTextarea.style.position = 'fixed';
        copyTextarea.style.opacity = 0;
        copyTextarea.style.top = '0';
        document.body.appendChild(copyTextarea);
        copyTextarea.focus();
        copyTextarea.select();
        
        let successful = false;
        try {
            successful = document.execCommand('copy');
        } catch (err) {
            console.error('无法复制文本: ', err);
        }
        
        copyTextarea.style.top = '-9999px';
        return successful;
    }

    // 显示提示消息
    showToast(message) {
        const toast = document.getElementById('photo-error-toast');
        if (toast) {
            toast.textContent = message;
            toast.style.display = 'block';
            
            setTimeout(() => {
                toast.style.display = 'none';
            }, 3000);
        }
    }

    // 图片查看器方法
    openImageViewer(src, index) {
        this.viewerImage.src = src;
        this.currentImageIndex = index;
        this.imageViewer.style.display = 'block';
        this.updateImageCounter();
        
        document.body.style.overflow = 'hidden';
    }
    
    closeImageViewer() {
        this.imageViewer.style.display = 'none';
        document.body.style.overflow = '';
    }
    
    showPrevImage() {
        if (this.imageUrls.length <= 1) return;
        
        this.currentImageIndex = (this.currentImageIndex - 1 + this.imageUrls.length) % this.imageUrls.length;
        this.viewerImage.src = this.imageUrls[this.currentImageIndex];
        this.updateImageCounter();
    }
    
    showNextImage() {
        if (this.imageUrls.length <= 1) return;
        
        this.currentImageIndex = (this.currentImageIndex + 1) % this.imageUrls.length;
        this.viewerImage.src = this.imageUrls[this.currentImageIndex];
        this.updateImageCounter();
    }
    
    updateImageCounter() {
        if (this.imageUrls.length <= 1) {
            this.imageCounter.style.display = 'none';
            this.prevButton.style.display = 'none';
            this.nextButton.style.display = 'none';
            return;
        }
        
        this.imageCounter.textContent = `${this.currentImageIndex + 1} / ${this.imageUrls.length}`;
        this.imageCounter.style.display = 'block';
        this.prevButton.style.display = 'flex';
        this.nextButton.style.display = 'flex';
    }
}

// 初始化函数
function initPhotographyTool(containerId = 'photography-tool-container') {
    if (document.getElementById(containerId)) {
        return new PhotographyTool(containerId);
    }
    return null;
} 