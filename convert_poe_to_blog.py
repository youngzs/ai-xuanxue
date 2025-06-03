#!/usr/bin/env python3
"""
将Poe生成的HTML内容转换为Hexo博客文章
"""
import re
import os
import shutil
from datetime import datetime

def extract_content_from_html(html_file):
    """从HTML文件中提取内容"""
    print(f"📖 读取HTML文件: {html_file}")
    
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 提取标题 - 从title标签中
    title_match = re.search(r'<title>([^<]+)</title>', content)
    if title_match:
        raw_title = title_match.group(1)
        # 清理标题，移除多余的部分
        title = re.sub(r'@FLUX-pro-1\.1\s*', '', raw_title)
        title = re.sub(r'\s*-\s*Poe$', '', title)
        title = title.strip()
    else:
        title = "专业街拍摄影作品"
    
    # 从meta description中提取内容
    desc_match = re.search(r'<meta name="description" content="([^"]+)"', content)
    content_text = ""
    
    if desc_match:
        desc = desc_match.group(1)
        # 分割用户和AI的对话
        parts = desc.split('User:')
        if len(parts) > 1:
            ai_response = parts[0].strip()
            user_prompt = parts[1].strip()
            
            content_text = f"""## 用户提示词

{user_prompt}

## AI生成结果

{ai_response}"""
    
    return {
        'title': title,
        'content': content_text,
        'raw_title': raw_title
    }

def copy_images_to_blog(source_dir, target_dir):
    """复制图片文件到博客目录"""
    print(f"📁 创建图片目录: {target_dir}")
    os.makedirs(target_dir, exist_ok=True)
    
    copied_images = []
    
    # 获取所有图片文件
    for file in os.listdir(source_dir):
        if file.endswith('.jpeg') or file.endswith('.jpg') or file.endswith('.png'):
            source_path = os.path.join(source_dir, file)
            target_path = os.path.join(target_dir, file)
            
            try:
                shutil.copy2(source_path, target_path)
                copied_images.append(file)
                print(f"✅ 复制图片: {file}")
            except Exception as e:
                print(f"❌ 复制失败 {file}: {e}")
    
    return copied_images

def create_markdown_post(extracted_data, copied_images, output_file):
    """创建Markdown格式的博客文章"""
    
    current_time = datetime.now()
    date_str = current_time.strftime("%Y-%m-%d %H:%M:%S")
    
    # 生成Markdown内容
    markdown_content = f"""---
title: {extracted_data['title']}
date: {date_str}
categories:
  - AI艺术
  - 摄影作品
tags:
  - FLUX
  - AI生成
  - 街拍摄影
  - 专业摄影
cover: /images/posts/{copied_images[0] if copied_images else 'default-cover.svg'}
---

# {extracted_data['title']}

{extracted_data['content']}

## 生成的图片作品

"""
    
    # 添加图片展示
    for i, image in enumerate(copied_images, 1):
        markdown_content += f"""
### 作品 {i}

![{extracted_data['title']} - 作品{i}](/images/posts/{image})

"""
    
    # 添加技术信息
    markdown_content += f"""
---

## 技术参数

- **AI模型**: FLUX-pro-1.1
- **风格**: 专业街拍摄影
- **构图**: 中景构图，戏剧性表达
- **场景**: 图书馆环境
- **光线**: 低调照明，纪实风格
- **生成时间**: {date_str}

## 创作说明

这组作品使用FLUX-pro-1.1模型生成，展现了AI在专业摄影领域的创作能力。通过精确的提示词控制，模型成功生成了具有专业水准的街拍摄影作品，展现了人工智能在艺术创作方面的无限可能。

<!-- more -->

**关键词**: 专业摄影、街拍艺术、AI生成、FLUX模型、创意摄影
"""
    
    # 写入文件
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(markdown_content)
    
    print(f"📝 创建博客文章: {output_file}")

def main():
    # 文件路径配置
    html_file = "H:/temp/Professional street photography of a model- Poe.html"
    source_images_dir = "H:/temp/@FLUX-pro-1.1 @FLUX-pro-1.1 Professional street photography of a model, action pose with dramatic expression, in library setting, medium-shot composition, with low-key lighting, documentary style, pop - Poe_files"
    
    # 目标路径（相对于博客根目录）
    target_images_dir = "source/images/posts"
    posts_dir = "source/_posts"
    
    print("🎨 开始转换Poe内容到博客...")
    
    # 1. 提取HTML内容
    extracted_data = extract_content_from_html(html_file)
    print(f"📖 提取标题: {extracted_data['title']}")
    
    # 2. 复制图片文件
    copied_images = copy_images_to_blog(source_images_dir, target_images_dir)
    print(f"🖼️  复制了 {len(copied_images)} 张图片")
    
    # 3. 创建博客文章
    # 生成文件名（使用当前日期）
    date_prefix = datetime.now().strftime("%Y-%m-%d")
    post_filename = f"{date_prefix}-professional-street-photography-ai-generated.md"
    output_file = os.path.join(posts_dir, post_filename)
    
    create_markdown_post(extracted_data, copied_images, output_file)
    
    print(f"""
🎉 转换完成！

📁 文件位置:
   - 博客文章: {output_file}
   - 图片目录: {target_images_dir}
   - 复制图片数量: {len(copied_images)}

🔄 下一步操作:
   1. 删除Hello World文章
   2. 运行 hexo generate 重新生成网站
   3. 运行 hexo server 预览效果
""")

if __name__ == "__main__":
    main() 