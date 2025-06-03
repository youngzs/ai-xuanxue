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
.night-mode {
    background-color: #1a1a2e !important;
    color: #eee !important;
}

.night-mode #header {
    background: #16213e !important;
    border-bottom: 1px solid #2a2a2a;
}

.night-mode .post-card,
.night-mode .widget,
.night-mode .featured-section {
    background: #16213e !important;
    color: #eee !important;
}

.night-mode .post-title a,
.night-mode .nav-link,
.night-mode .site-title a {
    color: #eee !important;
}

.night-mode .post-excerpt,
.night-mode .site-subtitle {
    color: #bbb !important;
}

.night-mode #footer {
    background: #0f0f23 !important;
}
`;

// 添加夜间模式样式到页面
const styleSheet = document.createElement('style');
styleSheet.textContent = nightModeStyles;
document.head.appendChild(styleSheet); 