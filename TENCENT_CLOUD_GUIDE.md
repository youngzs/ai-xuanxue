# 腾讯云静态网站托管部署指南

## 🎯 简介
腾讯云静态网站托管是一个专门为静态网站设计的托管服务，支持Hexo博客，有免费额度，国内访问速度快。

## 🆓 免费额度
- **存储空间**：5GB
- **CDN流量**：5GB/月
- **请求次数**：1000万次/月
- 对于个人博客来说完全够用！

## 🚀 部署步骤

### 1. 注册腾讯云账号
1. 访问：https://cloud.tencent.com/
2. 注册并完成实名认证（个人即可）

### 2. 开通静态网站托管
1. 登录腾讯云控制台
2. 搜索"静态网站托管"或访问：https://console.cloud.tencent.com/wh
3. 点击"立即使用"
4. 选择"按量计费"（有免费额度）

### 3. 创建环境
1. 点击"新建"创建环境
2. 环境名称：`ai-xuanxue-blog`
3. 选择地域：建议选择距离您最近的地域
4. 点击"下一步" → "确定"

### 4. 配置域名（可选）
1. 在环境管理页面，点击"域名管理"
2. 可以使用默认域名，也可以绑定自定义域名
3. 默认域名格式：`环境ID.tcloudbaseapp.com`

## 📦 部署方式

### 方式一：使用Web控制台上传（推荐新手）

1. **构建网站**
   ```bash
   npm run clean
   npm run build
   ```

2. **打包public文件夹**
   - 将`public`文件夹压缩成zip文件

3. **上传到腾讯云**
   - 进入环境 → "静态网站托管" → "文件管理"
   - 点击"上传文件" → 选择zip文件上传
   - 等待解压完成

### 方式二：使用命令行工具（推荐进阶用户）

1. **安装腾讯云CLI**
   ```bash
   npm install -g @cloudbase/cli
   ```

2. **登录**
   ```bash
   tcb login
   ```

3. **创建配置文件**
   在项目根目录创建`cloudbaserc.json`：
   ```json
   {
     "envId": "您的环境ID",
     "region": "ap-shanghai",
     "$schema": "https://framework-1258016615.tcloudbaseapp.com/schema/latest.json",
     "framework": {
       "name": "hexo",
       "plugins": {
         "client": {
           "use": "@cloudbase/framework-plugin-website",
           "inputs": {
             "buildCommand": "npm run build",
             "outputPath": "public"
           }
         }
       }
     }
   }
   ```

4. **部署**
   ```bash
   tcb framework deploy
   ```

## 🔧 自动化部署脚本

### 创建腾讯云部署脚本

```batch
@echo off
chcp 65001 >nul

echo ===========================================
echo     腾讯云静态网站托管部署脚本
echo ===========================================
echo.

echo [1/4] 清理缓存...
call npm run clean

echo [2/4] 构建网站...
call npm run build

echo [3/4] 部署到腾讯云...
tcb framework deploy

echo [4/4] 部署完成！
echo ✅ 网站已部署到腾讯云
echo 📱 访问地址：https://您的环境ID.tcloudbaseapp.com/
echo.

pause
```

## 🌐 访问地址

部署成功后，您的博客将在以下地址访问：
- **腾讯云默认域名**：https://您的环境ID.tcloudbaseapp.com/
- **自定义域名**（如果配置）：https://您的域名.com/

## 💰 费用说明

### 免费额度（每月）
- 存储：5GB
- CDN流量：5GB
- 请求：1000万次

### 超出免费额度后的价格
- 存储：0.0043元/GB/天
- CDN流量：0.18元/GB
- 请求：0.0025元/万次

**对于个人博客，免费额度完全够用！**

## 🎯 优势对比

| 服务 | 腾讯云静态托管 | Coding Pages | Vercel |
|------|---------------|-------------|---------|
| 费用 | 🆓 有免费额度 | ❓ 可能收费 | 🆓 免费 |
| 国内速度 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| 配置难度 | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 稳定性 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

## 🔧 故障排除

### 1. 部署失败
- 检查网络连接
- 确认腾讯云账号权限
- 检查构建命令是否正确

### 2. 访问404
- 确认index.html存在
- 检查文件路径是否正确
- 确认域名配置正确

### 3. 样式丢失
- 检查_config.yml中的url配置
- 确认所有资源路径正确

## 📞 技术支持
- 腾讯云文档：https://cloud.tencent.com/document/product/876
- 静态网站托管文档：https://cloud.tencent.com/document/product/876/40270 