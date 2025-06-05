# 双平台部署指南 - Vercel + Gitee Pages

本项目支持同时部署到Vercel（海外用户）和Gitee Pages（国内用户），采用分支分离的方式管理：

- **main分支**: 用于Vercel自动部署，访问地址 https://ai-xuanxue.vercel.app/
- **gitee-pages分支**: 用于Gitee Pages部署，访问地址 https://youngzs.gitee.io/ai-xuanxue-blog/

## 一、准备工作

### 1. 在Gitee上创建仓库
1. 登录 [Gitee](https://gitee.com)
2. 创建新仓库，命名为 `ai-xuanxue-blog`
3. 仓库设置为公开
4. 不要勾选"使用Readme文件初始化这个仓库"

### 2. 修改配置文件
已经自动修改了以下配置：
- `_config.yml` 中的 `url` 配置
- `_config.yml` 中的 `deploy` 配置
- `package.json` 中添加了 `hexo-deployer-git` 依赖

### 3. 替换配置中的用户名
将以下文件中的 `youngzs` 替换为您的实际Gitee用户名：
- `_config.yml` 第15行的 `url` 配置
- `_config.yml` 第103行的 `repo` 配置
- `deploy-gitee.bat` 第32行的访问地址

## 二、平台切换

使用 `switch-platform.bat` 脚本快速切换部署平台：

```bash
# 运行平台切换脚本
switch-platform.bat

# 或者手动切换
git checkout main           # 切换到Vercel分支
git checkout gitee-pages    # 切换到Gitee分支
```

## 三、部署方式

### 方式一：自动部署（推荐）

1. **配置Gitee Actions密钥**
   - 在Gitee仓库中，进入 `设置 → 密钥管理 → Actions密钥`
   - 添加以下密钥：
     - `GITEE_USERNAME`: 您的Gitee用户名
     - `GITEE_PASSWORD`: 您的Gitee密码
     - `GITEE_REPO`: 您的仓库名（如：ai-xuanxue-blog）

2. **推送代码到Gitee**
   ```bash
   # 首次添加Gitee远程仓库
   git remote add gitee https://gitee.com/youngzs/ai-xuanxue-blog.git
   
   # 确保在gitee-pages分支
   git checkout gitee-pages
   
   # 推送到Gitee
   git push gitee gitee-pages
   ```

3. **启用Gitee Pages**
   - 在Gitee仓库中，进入 `服务 → Gitee Pages`
   - 选择 `gh-pages` 分支
   - 点击启动

### 方式二：手动部署

1. **安装依赖**
   ```bash
   npm install
   ```

2. **配置Git用户信息**
   ```bash
   git config --global user.name "youngzs"
   git config --global user.email "您的邮箱"
   ```

3. **运行部署脚本**
   ```bash
   # Windows
   deploy-gitee.bat
   
   # Linux/Mac
   npm run clean && npm run build && hexo deploy
   ```

4. **启用Gitee Pages**
   - 在Gitee仓库中，进入 `服务 → Gitee Pages`
   - 选择 `master` 分支
   - 点击启动

## 三、访问地址

部署完成后，您的博客将在以下地址访问：
```
https://youngzs.gitee.io/ai-xuanxue-blog/
```

## 四、注意事项

1. **首次部署**：Gitee Pages需要手动启动服务
2. **更新部署**：每次推送后，Gitee Pages会自动更新（可能需要几分钟）
3. **域名绑定**：Gitee Pages支持自定义域名绑定
4. **HTTPS**：Gitee Pages默认支持HTTPS

## 五、常见问题

### 1. 部署失败
- 检查Git配置是否正确
- 确认Gitee仓库权限
- 查看构建日志

### 2. 页面404
- 确认Gitee Pages服务已启动
- 检查分支选择是否正确
- 确认public目录已正确生成

### 3. 样式丢失
- 检查_config.yml中的url配置
- 确认CSS文件路径正确

## 六、内容同步管理

### 1. 添加新内容的工作流程

```bash
# 1. 在main分支添加新内容
git checkout main
# 编辑你的博客内容...
git add .
git commit -m "新增文章：xxx"
git push origin main  # 自动部署到Vercel

# 2. 同步到gitee-pages分支
git checkout gitee-pages
git merge main  # 合并main分支的内容
git push gitee gitee-pages  # 部署到Gitee Pages
```

### 2. 一键同步脚本

```bash
# 创建 sync-content.bat 脚本实现一键同步
# 内容更新 → Vercel部署 → 同步到Gitee
```

### 3. 注意事项

- 始终在main分支编辑内容
- 配置文件的差异会在合并时保持
- 定期将main分支的更新合并到gitee-pages分支

## 七、两平台维护 