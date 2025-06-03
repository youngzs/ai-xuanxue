#!/usr/bin/env python3
"""
创建玄学相关的占位符图片
"""
import os
from PIL import Image, ImageDraw, ImageFont

def create_placeholder(width, height, text, filename, bg_color=(67, 126, 234), text_color=(255, 255, 255)):
    """创建占位符图片"""
    img = Image.new('RGB', (width, height), bg_color)
    draw = ImageDraw.Draw(img)
    
    # 尝试使用系统字体
    try:
        font = ImageFont.truetype("arial.ttf", 40)
    except:
        try:
            font = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", 40)
        except:
            font = ImageFont.load_default()
    
    # 计算文字位置
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    draw.text((x, y), text, fill=text_color, font=font)
    
    # 保存图片
    img.save(filename, 'WEBP', quality=95)
    print(f"创建图片: {filename}")

def main():
    # 确保目录存在
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    # 创建各种占位符图片
    images = [
        (800, 400, "玄学文档展示工具", "cover.webp", (52, 73, 94)),
        (800, 400, "奇门遁甲", "qimen-cover.webp", (142, 68, 173)),
        (800, 400, "八卦理论", "bagua-cover.webp", (39, 174, 96)),
        (600, 400, "项目预览", "xuanxue-preview.png", (231, 76, 60)),
        (600, 300, "首页展示", "homepage.png", (230, 126, 34)),
        (600, 300, "文档阅读", "document.png", (41, 128, 185)),
        (600, 300, "搜索功能", "search.png", (155, 89, 182)),
    ]
    
    for width, height, text, filename, color in images:
        filepath = os.path.join(current_dir, filename)
        create_placeholder(width, height, text, filepath, color)
    
    print(f"\n✅ 成功创建 {len(images)} 个占位符图片！")

if __name__ == "__main__":
    main() 