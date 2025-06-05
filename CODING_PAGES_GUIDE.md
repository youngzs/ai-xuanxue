# Coding Pages 部署指南

## 🎯 简介
Coding Pages 是腾讯云开发者平台提供的免费静态网站托管服务，国内访问速度快，完全免费。

## 🚀 部署步骤

### 1. 注册Coding账号
- 访问：https://coding.net/
- 使用QQ、微信或邮箱注册

### 2. 创建项目
1. 登录后点击"创建项目"
2. 选择"DevOps项目"
3. 项目名称：`ai-xuanxue-blog`
4. 选择"私有项目"或"公开项目"

### 3. 代码仓库设置
1. 进入项目 → "代码仓库"
2. 如果是空仓库，会显示推送指令

### 4. 推送代码到Coding
```bash
# 添加Coding远程仓库
git remote add coding https://e.coding.net/您的用户名/ai-xuanxue-blog/ai-xuanxue-blog.git

# 推送main分支
git push coding main

# 推送gitee-pages分支 
git push coding gitee-pages
```

### 5. 配置持续部署
1. 进入项目 → "持续部署" → "静态网站"
2. 点击"立即发布静态网站"
3. 配置如下：
   - **代码源**：选择刚创建的代码仓库
   - **分支**：`gitee-pages`
   - **构建命令**：
     ```bash
     npm install
     npm run clean
     npm run build
     ```
   - **发布目录**：`public`
   - **网站名称**：`ai-xuanxue-blog`

### 6. 自定义域名（可选）
1. 在"静态网站"页面找到"自定义域名"
2. 添加您的域名
3. 配置DNS解析

## 📝 修改配置文件

### 更新_config.yml
将URL修改为Coding Pages地址：

```yaml
# URL
url: https://您的用户名.coding-pages.com/ai-xuanxue-blog/
```

### 创建构建脚本
在package.json中确保有以下脚本：

```json
{
  "scripts": {
    "build": "hexo generate",
    "clean": "hexo clean",
    "deploy": "hexo deploy"
  }
}
```

## 🔄 自动化部署配置

### 创建.coding-ci.yml（可选）
```yaml
master:
  push:
    - stages:
        - name: 安装依赖
          image: node:16
          commands:
            - npm install
        - name: 构建
          image: node:16
          commands:
            - npm run clean
            - npm run build
        - name: 部署
          image: coding-public-docker.pkg.coding.net/public/docker/git:latest
          commands:
            - cd public
            - git init
            - git add .
            - git commit -m "Deploy"
            - git push -f https://您的用户名:${CODING_TOKEN}@e.coding.net/您的用户名/ai-xuanxue-blog/pages.git master
```

## 🎯 访问地址

部署成功后，您的博客将在以下地址访问：
- **默认地址**：https://您的用户名.coding-pages.com/ai-xuanxue-blog/
- **自定义域名**：https://您的域名.com/

## 💡 优势总结

### Coding Pages vs Gitee Pages
| 功能 | Coding Pages | Gitee Pages |
|------|-------------|-------------|
| 费用 | ✅ 完全免费 | 🔴 已暂停服务 |
| 国内速度 | ✅ 很快 | - |
| 自定义域名 | ✅ 支持 | - |
| HTTPS | ✅ 支持 | - |
| 构建支持 | ✅ 支持 | - |

## 🔧 故障排除

### 1. 构建失败
- 检查package.json中的脚本
- 确保node_modules在.gitignore中
- 查看构建日志

### 2. 访问404
- 确认发布目录设置为`public`
- 检查index.html是否存在
- 确认分支选择正确

### 3. 样式丢失
- 检查_config.yml中的url配置
- 确认所有资源路径正确

## 📞 技术支持
- Coding官方文档：https://help.coding.net/
- 静态网站托管文档：https://help.coding.net/docs/cd/static-website.html 