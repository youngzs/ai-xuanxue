# 卦象图片资源目录

本目录包含64卦的传统图片资源，用于在应用中显示卦象。

## 📁 目录结构

```
hexagrams/
├── 01-qian.png          # 第1卦：乾为天
├── 02-kun.png           # 第2卦：坤为地
├── 03-zhun.png          # 第3卦：水雷屯
├── 04-meng.png          # 第4卦：山水蒙
├── 05-xu.png            # 第5卦：水天需
├── 06-song.png          # 第6卦：天水讼
├── 07-shi.png           # 第7卦：地水师
├── 08-bi.png            # 第8卦：水地比
├── 09-xiaoxu.png        # 第9卦：风天小畜
├── 10-lu.png            # 第10卦：天泽履
├── 11-tai.png           # 第11卦：地天泰
├── 12-pi.png            # 第12卦：天地否
...
├── 63-jiji.png          # 第63卦：水火既济
├── 64-weiji.png         # 第64卦：火水未济
└── structure/           # 卦象结构图
    ├── 01-structure.png # 乾卦结构图
    ├── 02-structure.png # 坤卦结构图
    ...
    └── 64-structure.png # 未济卦结构图
```

## 🎨 图片规格

### 主卦图片
- **格式**: PNG
- **尺寸**: 建议 200x300 像素
- **背景**: 透明或白色
- **内容**: 传统六十四卦象图形

### 结构图片
- **格式**: PNG
- **尺寸**: 建议 150x200 像素
- **背景**: 透明或白色
- **内容**: 显示上下两个三角形组合

## 📊 图片来源

### 在线资源
1. **易安居网站**: http://www.zhouyi.cc/
   - 提供完整的64卦传统图片
   - 包含主卦、互卦、错卦、综卦等

2. **中华传统文化网**: 各种传统卦象图形

### 生成方式
可以使用数据抓取脚本自动下载图片：

```bash
# 运行图片抓取脚本
npm run extract-images
```

## 🔧 使用方法

### 在JavaScript中引用
```javascript
// 获取卦象图片URL
function getHexagramImage(number) {
    return `assets/hexagrams/${number.toString().padStart(2, '0')}-${hexagramNames[number]}.png`;
}

// 示例使用
const qianImage = getHexagramImage(1); // assets/hexagrams/01-qian.png
```

### 在HTML中使用
```html
<!-- 显示乾卦图片 -->
<img src="assets/hexagrams/01-qian.png" alt="乾为天" class="hexagram-image">

<!-- 显示结构图 -->
<img src="assets/hexagrams/structure/01-structure.png" alt="乾卦结构" class="structure-image">
```

### CSS样式示例
```css
.hexagram-image {
    width: 100px;
    height: 150px;
    object-fit: contain;
    margin: 10px;
}

.structure-image {
    width: 80px;
    height: 100px;
    object-fit: contain;
}
```

## 📝 64卦文件名对照表

| 卦号 | 文件名 | 卦名 | 说明 |
|------|--------|------|------|
| 01 | 01-qian.png | 乾为天 | 纯阳之卦 |
| 02 | 02-kun.png | 坤为地 | 纯阴之卦 |
| 03 | 03-zhun.png | 水雷屯 | 起始维艰 |
| 04 | 04-meng.png | 山水蒙 | 启蒙奋发 |
| 05 | 05-xu.png | 水天需 | 守正待机 |
| 06 | 06-song.png | 天水讼 | 慎争戒讼 |
| 07 | 07-shi.png | 地水师 | 行险而顺 |
| 08 | 08-bi.png | 水地比 | 诚信团结 |
| 09 | 09-xiaoxu.png | 风天小畜 | 蓄养待进 |
| 10 | 10-lu.png | 天泽履 | 脚踏实地 |
| ... | ... | ... | ... |
| 63 | 63-jiji.png | 水火既济 | 盛极将衰 |
| 64 | 64-weiji.png | 火水未济 | 事业未竟 |

## 🖼️ 替代方案

如果本地图片不可用，可以使用以下替代方案：

### 1. 文字版卦象
```
乾 ☰☰  坤 ☷☷  屯 ☵☳  蒙 ☶☵
需 ☵☰  讼 ☰☵  师 ☷☵  比 ☵☷
```

### 2. Unicode符号
- 乾: ☰ (2630)
- 兑: ☱ (2631) 
- 离: ☲ (2632)
- 震: ☳ (2633)
- 巽: ☴ (2634)
- 坎: ☵ (2635)
- 艮: ☶ (2636)
- 坤: ☷ (2637)

### 3. 在线CDN资源
可以使用在线图片资源作为备用：
```javascript
const fallbackImageUrl = `https://example.com/hexagrams/${hexNumber}.png`;
```

## 🔄 图片更新

如需更新图片资源：

1. 将新图片放入对应目录
2. 确保文件名符合命名规范
3. 更新数据库中的图片路径
4. 测试显示效果

## 📄 版权说明

- 传统卦象图形属于公共文化资源
- 现代设计图形请注意版权问题
- 建议使用开源或自制图片资源

---

*传统文化的数字化传承需要我们共同努力* 