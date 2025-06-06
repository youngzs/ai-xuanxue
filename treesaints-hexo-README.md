# 三圣妙观 - Hexo博客部署指南

## 问题解决

如果遇到 `Template render error: expected end of comment, got end of file` 错误，这通常是因为Markdown文件中有语法问题。

## 正确的文件放置方法

### 1. Markdown文件
```bash
# 放置到这里
source/_posts/treesaints.md
```

### 2. CSS文件
根据您的Hexo主题，CSS文件应该放置在以下位置之一：

**选项A：主题目录下**
```bash
themes/[你的主题名]/source/css/treesaints.css
```

**选项B：source目录下（推荐）**
```bash
source/css/treesaints.css
```

### 3. JavaScript文件
同样，JS文件应该放置在：

**选项A：主题目录下**
```bash
themes/[你的主题名]/source/js/treesaints.js
```

**选项B：source目录下（推荐）**
```bash
source/js/treesaints.js
```

## 修复步骤

### 1. 检查文件路径
确保CSS和JS文件放在正确的位置。推荐使用source目录：

```bash
your-hexo-blog/
├── source/
│   ├── _posts/
│   │   └── treesaints.md
│   ├── css/
│   │   └── treesaints.css
│   └── js/
│       └── treesaints.js
```

### 2. 修改Markdown文件中的引用路径

如果文件放在source目录下，确保Markdown文件中的引用是：

```html
<link rel="stylesheet" href="/css/treesaints.css">
<script src="/js/treesaints.js"></script>
```

### 3. 重新启动Hexo服务器

```bash
# 停止当前服务器 (Ctrl+C)
hexo clean
hexo generate
hexo server
```

## 故障排除

### 如果仍然有错误：

1. **检查YAML Front Matter**：确保markdown文件开头的YAML格式正确
2. **检查HTML标签**：确保所有HTML标签都正确关闭
3. **检查引号**：确保所有引号都配对

### 常见错误修复：

**错误1：CSS文件404**
- 解决：确保CSS文件路径正确，通常是 `/css/treesaints.css`

**错误2：JS文件404**
- 解决：确保JS文件路径正确，通常是 `/js/treesaints.js`

**错误3：FontAwesome图标不显示**
- 解决：在主题模板中添加FontAwesome CDN链接

## 主题模板修改（可选）

如果您想要全局引用FontAwesome，可以在主题的layout文件中添加：

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

## 最终目录结构示例

```
your-hexo-blog/
├── _config.yml
├── themes/
│   └── [your-theme]/
├── source/
│   ├── _posts/
│   │   └── treesaints.md          # 主文章
│   ├── css/
│   │   └── treesaints.css         # 样式文件
│   └── js/
│       └── treesaints.js          # 脚本文件
└── public/                        # 生成的静态文件（自动生成）
```

## 测试

成功部署后，访问 `http://localhost:4000` 应该能看到：
- ✅ 正确的页面布局
- ✅ 紫色主题样式
- ✅ FontAwesome图标显示
- ✅ 卡片悬停效果
- ✅ 平滑滚动效果

如果还有问题，请检查浏览器控制台的错误信息，通常会显示具体的文件加载失败原因。 