# 🚀 双平台部署完整指南

## 🎯 项目概述

AI与玄学研究院现在支持**双平台同时部署**：

- **🌍 Vercel** (主要面向海外用户): https://ai-xuanxue.vercel.app/
- **🇨🇳 Gitee Pages** (主要面向国内用户): https://youngzs.gitee.io/ai-xuanxue-blog/

## 📋 分支结构

| 分支名称 | 用途 | 部署平台 | 配置特点 |
|---------|------|----------|----------|
| `main` | 主分支，内容编辑 | Vercel | 保持原有Vercel配置 |
| `gitee-pages` | Gitee部署分支 | Gitee Pages | 专门的Gitee配置 |

## 🛠️ 快速工具

### 1. 平台切换工具
```bash
switch-platform.bat
```
- 快速在两个部署分支间切换
- 显示当前分支状态
- 提供部署指导

### 2. 内容同步工具
```bash
sync-content.bat
```
- 一键同步内容到两个平台
- 自动处理分支切换和合并
- 智能检测是否有新内容

### 3. Gitee专用部署工具
```bash
deploy-gitee.bat
```
- 专门用于Gitee Pages的手动部署
- 包含完整的构建和部署流程

## 📝 日常使用流程

### 方案一：使用同步脚本（推荐）

1. **编辑内容** (在任意分支)
   ```bash
   # 创建新文章
   hexo new post "新文章标题"
   # 编辑文章内容...
   ```

2. **一键同步到两个平台**
   ```bash
   sync-content.bat
   ```
   脚本会自动：
   - 切换到main分支
   - 提交并推送到Vercel
   - 切换到gitee-pages分支
   - 合并main分支内容
   - 推送到Gitee Pages

### 方案二：手动分别部署

1. **部署到Vercel**
   ```bash
   git checkout main
   git add .
   git commit -m "新增内容"
   git push origin main
   ```

2. **部署到Gitee Pages**
   ```bash
   git checkout gitee-pages
   git merge main
   git push gitee gitee-pages
   ```

## 🔧 初次设置

### 1. 创建Gitee仓库
- 登录 [Gitee](https://gitee.com)
- 创建公开仓库：`ai-xuanxue-blog`

### 2. 添加Gitee远程仓库
```bash
git remote add gitee https://gitee.com/youngzs/ai-xuanxue-blog.git
```

### 3. 推送gitee-pages分支
```bash
git checkout gitee-pages
git push gitee gitee-pages
```

### 4. 启用Gitee Pages服务
- 在Gitee仓库中，进入 `服务 → Gitee Pages`
- 选择 `master` 分支作为部署分支
- 点击"启动"按钮

### 5. (可选) 配置Gitee Actions自动部署
- 在Gitee仓库设置中添加密钥：
  - `GITEE_USERNAME`: 你的Gitee用户名
  - `GITEE_PASSWORD`: 你的Gitee密码  
  - `GITEE_REPO`: `ai-xuanxue-blog`

## 📊 访问地址

部署完成后，你的博客可以通过以下地址访问：

- **Vercel (海外)**: https://ai-xuanxue.vercel.app/
- **Gitee Pages (国内)**: https://youngzs.gitee.io/ai-xuanxue-blog/

## ⚠️ 注意事项

### 1. 内容编辑原则
- ✅ **推荐**：始终在 `main` 分支编辑内容
- ✅ **推荐**：使用 `sync-content.bat` 同步到两个平台
- ❌ **避免**：直接在 `gitee-pages` 分支编辑内容

### 2. 配置文件差异
- 两个分支的配置文件会有差异（URL、部署设置等）
- Git合并时会自动保持各分支的配置差异
- 不要手动同步配置文件

### 3. 依赖管理
- `package.json` 在 `gitee-pages` 分支包含额外的 `hexo-deployer-git`
- 这个差异是正常的，不会影响功能

## 🔍 故障排除

### 1. 分支切换失败
```bash
# 检查是否有未提交的更改
git status

# 暂存更改后再切换
git stash
git checkout <target-branch>
git stash pop
```

### 2. 合并冲突
```bash
# 如果merge时出现冲突
git status  # 查看冲突文件
# 手动解决冲突后
git add .
git commit -m "解决合并冲突"
```

### 3. Gitee Pages未更新
- 检查Gitee Pages服务是否启动
- 确认选择了正确的分支
- Gitee Pages更新可能需要几分钟

### 4. Vercel部署失败
- 检查GitHub仓库连接
- 查看Vercel构建日志
- 确认 `vercel.json` 配置正确

## 📚 相关文档

- [GITEE_DEPLOY.md](./GITEE_DEPLOY.md) - 详细的Gitee部署指南
- [README.md](./README.md) - 项目总览和功能介绍

## 🎉 总结

双平台部署让你的博客能够：
- 📈 **覆盖更广用户群体**：国内外用户都能快速访问
- 🔄 **内容统一管理**：一处编辑，多处发布
- 🚀 **部署自动化**：简单脚本实现一键部署
- 🛡️ **高可用性**：单平台故障不影响另一平台

现在你可以专注于内容创作，让技术为创作服务！ 🎯 