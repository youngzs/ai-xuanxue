// Stagewise开发工具集成
// 仅在开发环境下加载

(function() {
    'use strict';
    
    // 检查是否为开发环境
    const isDevelopment = window.location.hostname === 'localhost' || 
                         window.location.hostname === '127.0.0.1' ||
                         window.location.port === '4000';
    
    if (!isDevelopment) {
        return; // 生产环境不加载
    }
    
    console.log('🚀 正在加载Stagewise开发工具...');
    
    // 先加载CSS样式
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = '/css/stagewise.css';
    document.head.appendChild(cssLink);
    
    // 动态加载stagewise工具包
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
        import { initToolbar } from '/js/stagewise-lib.js';
        
        const stagewiseConfig = {
            plugins: [],
            theme: 'dark',
            position: 'bottom-right'
        };
        
        try {
            initToolbar(stagewiseConfig);
            console.log('✅ Stagewise工具栏已初始化');
        } catch (error) {
            console.warn('⚠️ Stagewise初始化失败:', error);
            // 创建一个简单的替代工具栏
            createFallbackToolbar();
        }
        
        function createFallbackToolbar() {
            const toolbar = document.createElement('div');
            toolbar.innerHTML = '🔧 DEV TOOLS';
            toolbar.style.cssText = \`
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: #2d3748;
                color: white;
                padding: 10px 15px;
                border-radius: 8px;
                font-size: 12px;
                font-weight: bold;
                z-index: 10000;
                font-family: monospace;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            \`;
            
            toolbar.onclick = function() {
                alert('Stagewise开发工具 - 用于AI辅助编辑');
            };
            
            document.body.appendChild(toolbar);
            console.log('📦 创建了替代工具栏');
        }
    `;
    
    document.head.appendChild(script);
    
    // 添加开发模式指示器
    const devIndicator = document.createElement('div');
    devIndicator.innerHTML = '🛠️ DEV';
    devIndicator.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        background: #ff6b6b;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: bold;
        z-index: 10000;
        font-family: monospace;
    `;
    document.body.appendChild(devIndicator);
    
})(); 