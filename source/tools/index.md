---
title: AI工具集
date: 2025-01-10 10:00:00
layout: page
---

# AI工具集

欢迎使用我们的AI工具集，这里提供各种实用的AI辅助工具，帮助您在创作和工作中更加高效。

## 🎨 专业人像摄影提示生成器

这是一个强大的AI摄影提示语生成工具，专门用于生成高质量的人像摄影提示语。无论您是专业摄影师还是AI艺术爱好者，都能通过这个工具快速生成符合需求的摄影提示语。

### 🔗 访问工具

<div class="tool-link-container">
    <a href="/tools/photography-prompt-generator.html" class="tool-link" target="_blank">
        <div class="tool-card">
            <div class="tool-icon">📸</div>
            <div class="tool-info">
                <h3>专业人像摄影提示生成器</h3>
                <p>生成精准的人像摄影提示语，支持多种风格和参数设置</p>
            </div>
            <div class="tool-arrow">→</div>
        </div>
    </a>
</div>

### 主要功能

- **🎯 专业摄影参数** - 包含摄影风格、场景设置、光线配置等专业参数
- **🎨 多样化选项** - 支持时尚、艺术、商业等多种摄影风格
- **⚡ 即时生成** - 实时生成高质量的AI提示语
- **🔄 批量创作** - 支持生成1-4张图片的批量创作
- **🌙 深色模式** - 支持明暗主题切换，适应不同使用环境
- **📱 响应式设计** - 完美适配桌面和移动设备

### 技术特点

- 集成多种专业摄影参数选项
- 支持多种图像比例和分辨率设置
- 提供专业摄影术语和技术参数
- 智能提示语优化和质量提升
- 自定义关键词添加功能
- 历史记录保存和管理

## 📸 创作示例

以下是使用本工具生成的实际作品展示：

### 示例提示语
``` 
Professional commercial photography of a model, sitting pose with joyful expression, 
in mountains setting, low-angle composition, with split lighting, modern style, 
photorealistic art style, pastel color scheme, shot with prime-35mm lens, shallow-dof, 
high resolution, professional, detailed, sharp focus, high quality, 8k --aspect 9:16
```

### 生成作品
<div class="example-gallery">
    <div class="example-image">
        <img src="/images/poe-gen/professional_comme_image_1.jpg" alt="AI生成人像摄影作品1" onclick="openImageModal(this.src)">
    </div>
    <div class="example-image">
        <img src="/images/poe-gen/professional_comme_image_2.jpg" alt="AI生成人像摄影作品2" onclick="openImageModal(this.src)">
    </div>
    <div class="example-image">
        <img src="/images/poe-gen/professional_comme_image_3.jpg" alt="AI生成人像摄影作品3" onclick="openImageModal(this.src)">
    </div>
</div>

### 技术参数解析
- **摄影风格**: 商业摄影 (Commercial Photography)
- **姿势表情**: 坐姿，愉悦表情 (Sitting pose, Joyful expression)
- **拍摄场景**: 山脉环境 (Mountains setting)
- **构图方式**: 低角度构图 (Low-angle composition)
- **光线技术**: 分割光线 (Split lighting)
- **艺术风格**: 超写实 (Photorealistic)
- **色彩方案**: 粉彩色调 (Pastel color scheme)
- **镜头设置**: 35mm定焦镜头，浅景深
- **图像比例**: 9:16 (手机全屏)

---

## 🛠 更多工具

敬请期待更多实用的AI工具...

<!-- 图片查看器模态框 -->
<div id="imageModal" class="image-modal">
    <span class="close" onclick="closeImageModal()">&times;</span>
    <img class="modal-content" id="modalImage">
</div>

<style>
/* ========================================
   工具页面样式
   ======================================== */

/* 工具链接卡片 */
.tool-link-container {
    margin: 2rem 0;
}

.tool-link {
    text-decoration: none;
    color: inherit;
    display: block;
}

.tool-card {
    display: flex;
    align-items: center;
    padding: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
    color: white;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    margin-bottom: 1rem;
}

.tool-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.tool-icon {
    font-size: 3rem;
    margin-right: 2rem;
}

.tool-info {
    flex: 1;
}

.tool-info h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.5rem;
    font-weight: 700;
}

.tool-info p {
    margin: 0;
    opacity: 0.9;
    font-size: 1rem;
}

.tool-arrow {
    font-size: 2rem;
    font-weight: bold;
    margin-left: 1rem;
    transition: transform 0.3s ease;
}

.tool-card:hover .tool-arrow {
    transform: translateX(5px);
}

/* 示例图片库 */
.example-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
    padding: 20px;
    background: #f7fafc;
    border-radius: 10px;
    border: 1px solid #e2e8f0;
}

.example-image {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.example-image:hover {
    transform: scale(1.05);
}

.example-image img {
    width: 100%;
    height: auto;
    display: block;
    cursor: pointer;
    transition: opacity 0.3s ease;
}

.example-image img:hover {
    opacity: 0.9;
}

/* 图片查看器模态框 */
.image-modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.9);
}

.modal-content {
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 90%;
    margin-top: 5%;
}

.close {
    position: absolute;
    top: 20px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
}

.close:hover,
.close:focus {
    color: #bbb;
    text-decoration: none;
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
    .example-gallery {
        background: #2d3748;
        border-color: #4a5568;
    }
    
    .example-image {
        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    }
    
    .tool-card {
        background: linear-gradient(135deg, #4c63d2 0%, #5a4c8a 100%);
    }
}

/* 响应式设计 */
@media (max-width: 768px) {
    .example-gallery {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 10px;
        padding: 15px;
    }
    
    .tool-card {
        flex-direction: column;
        text-align: center;
        padding: 1.5rem;
    }
    
    .tool-icon {
        margin-right: 0;
        margin-bottom: 1rem;
    }
    
    .tool-arrow {
        margin-left: 0;
        margin-top: 1rem;
        transform: rotate(90deg);
    }
    
    .tool-card:hover .tool-arrow {
        transform: rotate(90deg) translateX(5px);
    }
}
</style>

<script>
// 图片模态框功能
function openImageModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = src;
}

function closeImageModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
</script> 