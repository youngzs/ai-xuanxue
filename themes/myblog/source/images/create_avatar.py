#!/usr/bin/env python3
import struct

def create_simple_bmp(width, height, filename):
    """创建简单的BMP格式图片"""
    print(f"创建 {width}x{height} 头像图片...")
    
    # BMP文件头
    row_size = (width * 3 + 3) & ~3  # 4字节对齐
    pixel_data_size = row_size * height
    file_size = 54 + pixel_data_size
    
    # BMP文件头
    header = struct.pack('<2sI4xI', b'BM', file_size, 54)
    
    # DIB头
    dib_header = struct.pack('<IiiHHI4x4x4x4x4x',
                            40,          # DIB头大小
                            width,       # 宽度
                            height,      # 高度
                            1,           # 颜色平面数
                            24,          # 每像素位数
                            0            # 压缩方式
                            )
    
    # 创建像素数据
    pixels = []
    center_x, center_y = width // 2, height // 2
    
    for y in range(height - 1, -1, -1):  # BMP从底部开始
        row = []
        for x in range(width):
            dx = x - center_x
            dy = y - center_y
            distance = (dx*dx + dy*dy) ** 0.5
            
            # 创建渐变背景 + AI神经网络图案
            if distance < 80:  # 主圆形区域
                # 创建神经网络样式图案
                if (abs(dx) < 3 and abs(dy) < 40) or (abs(dy) < 3 and abs(dx) < 40):
                    # 主十字
                    b, g, r = 255, 255, 255
                elif (abs(dx - dy) < 2 and distance < 60) or (abs(dx + dy) < 2 and distance < 60):
                    # 对角线
                    b, g, r = 200, 220, 255
                elif distance > 65 and distance < 75:
                    # 外圈
                    b, g, r = 180, 200, 255
                else:
                    # 渐变背景 (从紫色到蓝色)
                    factor = distance / 80
                    r = int(102 + (150 - 102) * factor)
                    g = int(126 + (180 - 126) * factor) 
                    b = int(234 + (255 - 234) * factor)
            else:
                # 外围深色
                r, g, b = 30, 50, 80
            
            row.extend([b, g, r])  # BMP使用BGR顺序
        
        # 填充到4字节边界
        while len(row) % 4 != 0:
            row.append(0)
        
        pixels.extend(row)
    
    # 写入文件
    with open(filename, 'wb') as f:
        f.write(header + dib_header + bytes(pixels))
    
    print(f"✅ {filename} 生成成功!")

if __name__ == "__main__":
    create_simple_bmp(200, 200, 'avatar.bmp')
    print("🎉 头像生成完成!") 