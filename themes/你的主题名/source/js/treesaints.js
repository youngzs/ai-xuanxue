// 三圣妙观 - 交互功能脚本

document.addEventListener('DOMContentLoaded', function() {
    // 滚动动画
    const scrollElements = document.querySelectorAll('.scroll-animate');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };
    
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // 初始检查
    handleScrollAnimation();
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 模态框功能（简化版）
    const modalButtons = document.querySelectorAll('.view-details');
    
    modalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            // 简单的alert替代模态框
            const cardTitle = this.closest('.buddha-card').querySelector('h3').textContent;
            const cardDesc = this.closest('.buddha-card').querySelector('p').textContent;
            
            alert(`${cardTitle}\n\n${cardDesc}\n\n点击确定了解更多详情。`);
        });
    });
    
    // 添加淡入动画到卡片
    const cards = document.querySelectorAll('.buddha-card');
    cards.forEach((card, index) => {
        card.classList.add('animate-fadeIn');
        card.style.animationDelay = `${(index + 1) * 0.1}s`;
    });
    
    // 添加hover效果增强
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 表格行hover效果
    const tableRows = document.querySelectorAll('.comparison-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(139, 92, 246, 0.08)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
}); 