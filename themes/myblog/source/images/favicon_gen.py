import base64

# 创建一个简单的32x32 BMP图标
def create_favicon():
    print("生成favicon图标中...")
    
    # 简化的BMP头部 + 32x32像素数据
    bmp_data = [
        # BMP文件头
        0x42, 0x4D,  # 'BM'
        0x36, 0x04, 0x00, 0x00,  # 文件大小
        0x00, 0x00, 0x00, 0x00,  # 保留字段
        0x36, 0x00, 0x00, 0x00,  # 数据偏移
        
        # DIB头
        0x28, 0x00, 0x00, 0x00,  # DIB头大小
        0x20, 0x00, 0x00, 0x00,  # 宽度32
        0x20, 0x00, 0x00, 0x00,  # 高度32
        0x01, 0x00,              # 颜色平面
        0x18, 0x00,              # 24位色
        0x00, 0x00, 0x00, 0x00,  # 无压缩
        0x00, 0x00, 0x00, 0x00,  # 图像大小
        0x00, 0x00, 0x00, 0x00,  # X分辨率
        0x00, 0x00, 0x00, 0x00,  # Y分辨率
        0x00, 0x00, 0x00, 0x00,  # 颜色表大小
        0x00, 0x00, 0x00, 0x00   # 重要颜色数
    ]
    
    # 简单像素数据 - 创建一个AI图案
    pixels = []
    for y in range(32):
        for x in range(32):
            dx, dy = x - 16, y - 16
            # 创建十字形 + 圆形图案
            if (abs(dx) <= 2 and abs(dy) <= 10) or (abs(dy) <= 2 and abs(dx) <= 10):
                # 白色十字
                pixels.extend([255, 255, 255])
            elif dx*dx + dy*dy <= 225:  # 圆形背景
                # 蓝紫色
                pixels.extend([200, 100, 150])
            else:
                # 深色背景
                pixels.extend([50, 30, 80])
    
    # 写入文件
    with open('favicon.ico', 'wb') as f:
        f.write(bytes(bmp_data + pixels))
    
    print("✅ favicon.ico 生成成功!")

if __name__ == "__main__":
    create_favicon() 