document.addEventListener('DOMContentLoaded', function() {
    
    // ===== 移动端菜单切换 =====
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            const isActive = mobileMenu.style.display === 'block';
            
            if (isActive) {
                mobileMenu.style.display = 'none';
                mobileMenuToggle.classList.remove('active');
            } else {
                mobileMenu.style.display = 'block';
                mobileMenuToggle.classList.add('active');
            }
        });
        
        // 点击菜单项后关闭移动端菜单
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.style.display = 'none';
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
    
    // ===== 回到顶部按钮 =====
    const backToTop = document.getElementById('back-to-top');
    
    if (backToTop) {
        // 监听滚动事件
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        
        // 点击回到顶部
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ===== 搜索功能 =====
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    
    if (searchBtn && searchInput) {
        // 搜索按钮点击事件
        searchBtn.addEventListener('click', function() {
            performSearch();
        });
        
        // 搜索框回车事件
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        function performSearch() {
            const query = searchInput.value.trim();
            if (query) {
                // 这里可以集成搜索功能，比如跳转到搜索页面
                window.location.href = `/search/?q=${encodeURIComponent(query)}`;
            }
        }
    }
    
    // ===== 平滑滚动 =====
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== 图片懒加载 =====
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window && images.length > 0) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // ===== 代码块复制功能 =====
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
        const pre = block.parentElement;
        
        // 创建复制按钮
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-code-btn';
        copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
        copyBtn.title = '复制代码';
        
        // 添加复制按钮到代码块
        pre.style.position = 'relative';
        pre.appendChild(copyBtn);
        
        // 复制功能
        copyBtn.addEventListener('click', function() {
            const text = block.textContent;
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    showCopySuccess(copyBtn);
                });
            } else {
                // 兼容旧浏览器
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showCopySuccess(copyBtn);
            }
        });
    });
    
    function showCopySuccess(btn) {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i>';
        btn.style.color = '#27ae60';
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.color = '';
        }, 2000);
    }
    
    // ===== 文章阅读进度条 =====
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    
    // 只在文章页面显示进度条
    if (document.querySelector('.post-content') || document.querySelector('article')) {
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', function() {
            const winHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset;
            const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
            
            progressBar.style.width = Math.min(scrollPercent, 100) + '%';
        });
    }
    
    // ===== 夜间模式切换 =====
    const nightModeToggle = document.createElement('button');
    nightModeToggle.className = 'night-mode-toggle';
    nightModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    nightModeToggle.title = '切换夜间模式';
    nightModeToggle.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 30px;
        width: 50px;
        height: 50px;
        background: #3498db;
        color: #fff;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    `;
    
    document.body.appendChild(nightModeToggle);
    
    // 检查本地存储的夜间模式设置
    if (localStorage.getItem('night-mode') === 'enabled') {
        document.body.classList.add('night-mode');
        nightModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    nightModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('night-mode');
        
        if (document.body.classList.contains('night-mode')) {
            localStorage.setItem('night-mode', 'enabled');
            nightModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('night-mode', 'disabled');
            nightModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
    
    // ===== 为文章卡片添加动画效果 =====
    const postCards = document.querySelectorAll('.post-card');
    
    if ('IntersectionObserver' in window && postCards.length > 0) {
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        postCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            cardObserver.observe(card);
        });
    }
    
    // ===== 控制台彩蛋 =====
    const styles = [
        'color: #667eea',
        'font-size: 16px',
        'font-weight: bold',
        'text-shadow: 1px 1px 2px rgba(0,0,0,0.3)'
    ].join(';');
    
    console.log('%c欢迎来到 AI与玄学研究院！', styles);
    console.log('%c如果你对这个博客的技术实现感兴趣，欢迎访问我们的GitHub！', 'color: #3498db;');
});

// ===== 添加夜间模式样式 =====
const nightModeStyles = `
/* 夜间模式基础样式 */
.night-mode {
    background-color: #1a1a2e !important;
    color: #eee !important;
}

/* 头部导航 */
.night-mode #header {
    background: #16213e !important;
    border-bottom: 1px solid #2a2a2a;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.night-mode .site-title a {
    color: #eee !important;
}

.night-mode .site-subtitle {
    color: #bbb !important;
}

.night-mode .nav-link {
    color: #eee !important;
}

.night-mode .nav-link:hover {
    color: #64b3f4 !important;
}

.night-mode .mobile-menu {
    background: #16213e !important;
    border-top: 1px solid #2a2a2a;
}

.night-mode .mobile-nav-link {
    color: #eee !important;
    border-bottom: 1px solid #2a2a2a;
}

.night-mode .search-box {
    background: #2a2a2a !important;
}

.night-mode #search-input {
    color: #eee !important;
}

.night-mode #search-input::placeholder {
    color: #999 !important;
}

/* 卡片组件 */
.night-mode .post-card,
.night-mode .widget,
.night-mode .featured-section,
.night-mode .featured-item,
.night-mode .category-card {
    background: #16213e !important;
    color: #eee !important;
    border: 1px solid #2a2a2a;
}

.night-mode .post-card:hover {
    box-shadow: 0 8px 30px rgba(0,0,0,0.4) !important;
}

/* 文章内容 */
.night-mode .post-title a,
.night-mode .page-title,
.night-mode .section-title,
.night-mode .widget-title {
    color: #eee !important;
}

.night-mode .post-title a:hover {
    color: #64b3f4 !important;
}

.night-mode .post-excerpt,
.night-mode .post-meta,
.night-mode .page-subtitle {
    color: #bbb !important;
}

.night-mode .post-content,
.night-mode .page-content {
    color: #eee !important;
}

.night-mode .post-content h1,
.night-mode .post-content h2,
.night-mode .post-content h3,
.night-mode .post-content h4,
.night-mode .post-content h5,
.night-mode .post-content h6,
.night-mode .page-content h1,
.night-mode .page-content h2,
.night-mode .page-content h3,
.night-mode .page-content h4,
.night-mode .page-content h5,
.night-mode .page-content h6 {
    color: #eee !important;
}

.night-mode .post-content p,
.night-mode .page-content p,
.night-mode .post-content li,
.night-mode .page-content li {
    color: #ddd !important;
}

.night-mode .post-content a,
.night-mode .page-content a {
    color: #64b3f4 !important;
}

.night-mode .post-content a:hover,
.night-mode .page-content a:hover {
    color: #4a9eff !important;
}

/* 代码块 */
.night-mode .post-content pre,
.night-mode .page-content pre {
    background: #0d1117 !important;
    border: 1px solid #2a2a2a;
}

.night-mode .post-content code,
.night-mode .page-content code {
    background: #2a2a2a !important;
    color: #f8f8f2 !important;
}

.night-mode .post-content pre code,
.night-mode .page-content pre code {
    background: transparent !important;
    color: #f8f8f2 !important;
}

.night-mode .copy-code-btn {
    background: #2a2a2a !important;
    color: #eee !important;
}

/* 引用块 */
.night-mode .post-content blockquote,
.night-mode .page-content blockquote {
    background: #2a2a2a !important;
    border-left: 4px solid #64b3f4 !important;
    color: #ddd !important;
}

/* 表格 */
.night-mode .post-content table,
.night-mode .page-content table {
    background: #16213e !important;
    border: 1px solid #2a2a2a;
}

.night-mode .post-content th,
.night-mode .page-content th {
    background: #2a2a2a !important;
    color: #eee !important;
    border: 1px solid #3a3a3a;
}

.night-mode .post-content td,
.night-mode .page-content td {
    border: 1px solid #2a2a2a;
    color: #ddd !important;
}

.night-mode .post-content tr:hover,
.night-mode .page-content tr:hover {
    background: #2a2a2a !important;
}

/* 标签和分类 */
.night-mode .tag,
.night-mode .tag-link,
.night-mode .category-link {
    background: #2a2a2a !important;
    color: #ddd !important;
}

.night-mode .tag:hover,
.night-mode .tag-link:hover,
.night-mode .category-link:hover {
    background: #64b3f4 !important;
    color: #fff !important;
}

.night-mode .tag.current {
    background: #64b3f4 !important;
    color: #fff !important;
}

/* 分页 */
.night-mode .pagination .page-number,
.night-mode .pagination .prev,
.night-mode .pagination .next {
    background: #16213e !important;
    color: #ddd !important;
    border: 1px solid #2a2a2a;
}

.night-mode .pagination .current {
    background: #64b3f4 !important;
    color: #fff !important;
}

/* 页面头部 */
.night-mode .page-header {
    background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%) !important;
}

.night-mode .hero-banner {
    background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%) !important;
}

/* 分类页面特定样式 */
.night-mode .categories-grid .category-card {
    background: #16213e !important;
    border: 1px solid #2a2a2a;
}

.night-mode .category-name a {
    color: #eee !important;
}

.night-mode .category-name a:hover {
    color: #64b3f4 !important;
}

.night-mode .category-count {
    background: #2a2a2a !important;
    color: #ddd !important;
}

/* 归档页面 */
.night-mode .year-header,
.night-mode .month-header {
    background: #16213e !important;
}

.night-mode .year-title,
.night-mode .month-title {
    color: #eee !important;
}

.night-mode .archive-post {
    border-bottom: 1px solid #2a2a2a;
}

.night-mode .archive-post:hover {
    background: #2a2a2a !important;
}

.night-mode .archive-post .post-title a {
    color: #eee !important;
}

.night-mode .archive-post .post-title a:hover {
    color: #64b3f4 !important;
}

.night-mode .post-date {
    background: #2a2a2a !important;
    color: #ddd !important;
}

/* 搜索页面 */
.night-mode .search-input-wrapper {
    background: #16213e !important;
}

.night-mode #search-input-main {
    background: #2a2a2a !important;
    color: #eee !important;
    border: 1px solid #3a3a3a;
}

.night-mode .search-result-item {
    background: #16213e !important;
    border: 1px solid #2a2a2a;
}

.night-mode .result-title a {
    color: #eee !important;
}

.night-mode .result-title a:hover {
    color: #64b3f4 !important;
}

.night-mode .result-excerpt {
    color: #bbb !important;
}

.night-mode .result-excerpt mark {
    background: #64b3f4 !important;
    color: #fff !important;
}

/* 工具页面特定样式 */
.night-mode .tool-container {
    background: #16213e !important;
    border: 1px solid #2a2a2a;
}

.night-mode .tool-section {
    background: #1a1a2e !important;
    border: 1px solid #2a2a2a;
}

.night-mode .tool-section h3 {
    color: #eee !important;
}

.night-mode .tool-section label {
    color: #ddd !important;
}

.night-mode .tool-section select,
.night-mode .tool-section input,
.night-mode .tool-section textarea {
    background: #2a2a2a !important;
    color: #eee !important;
    border: 1px solid #3a3a3a;
}

.night-mode .btn {
    background: #64b3f4 !important;
    color: #fff !important;
    border: none;
}

.night-mode .btn:hover {
    background: #4a9eff !important;
}

.night-mode .result-display {
    background: #2a2a2a !important;
    color: #eee !important;
    border: 1px solid #3a3a3a;
}

/* 侧边栏 */
.night-mode .profile-info {
    color: #eee !important;
}

.night-mode .profile-name {
    color: #eee !important;
}

.night-mode .profile-desc {
    color: #bbb !important;
}

.night-mode .stat-number {
    color: #64b3f4 !important;
}

.night-mode .stat-label {
    color: #ddd !important;
}

.night-mode .recent-post-link {
    color: #ddd !important;
}

.night-mode .recent-post-link:hover {
    color: #64b3f4 !important;
}

.night-mode .recent-post-date {
    color: #999 !important;
}

/* 页脚 */
.night-mode #footer {
    background: #0f0f23 !important;
    border-top: 1px solid #2a2a2a;
}

.night-mode .copyright,
.night-mode .powered-by {
    color: #bbb !important;
}

.night-mode .social-link {
    background: #2a2a2a !important;
    color: #ddd !important;
}

.night-mode .social-link:hover {
    background: #64b3f4 !important;
    color: #fff !important;
}

/* 职业发展时间线 */
.night-mode .career-step {
    background: #16213e !important;
    border: 1px solid #2a2a2a;
}

.night-mode .career-step:hover {
    background: #1e2a4a !important;
    box-shadow: 0 8px 30px rgba(0,0,0,0.4) !important;
}

.night-mode .step-icon {
    background: linear-gradient(135deg, #64b3f4, #4a9eff) !important;
}

.night-mode .step-title {
    color: #eee !important;
}

.night-mode .step-company {
    color: #64b3f4 !important;
}

.night-mode .step-period,
.night-mode .step-description {
    color: #bbb !important;
}

/* 图片库样式 */
.night-mode .image-gallery {
    background: #16213e !important;
}

.night-mode .gallery-item {
    border: 1px solid #2a2a2a;
}

.night-mode .image-info {
    background: #2a2a2a !important;
    color: #eee !important;
}

.night-mode .image-title {
    color: #eee !important;
}

.night-mode .image-params {
    color: #bbb !important;
}

/* 模态框 */
.night-mode .modal-content {
    background: #16213e !important;
    border: 1px solid #2a2a2a;
}

.night-mode .modal-title {
    color: #eee !important;
}

.night-mode .close {
    color: #ddd !important;
}

.night-mode .close:hover {
    color: #fff !important;
}

/* 其他元素 */
.night-mode hr {
    border-color: #2a2a2a !important;
}

.night-mode .border {
    border-color: #2a2a2a !important;
}

.night-mode .bg-light {
    background: #2a2a2a !important;
}

.night-mode .text-muted {
    color: #999 !important;
}

/* 滚动条样式 */
.night-mode ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

.night-mode ::-webkit-scrollbar-track {
    background: #1a1a2e;
}

.night-mode ::-webkit-scrollbar-thumb {
    background: #2a2a2a;
    border-radius: 4px;
}

.night-mode ::-webkit-scrollbar-thumb:hover {
    background: #3a3a3a;
}
`;

// 添加夜间模式样式到页面
const styleSheet = document.createElement('style');
styleSheet.textContent = nightModeStyles;
document.head.appendChild(styleSheet); 