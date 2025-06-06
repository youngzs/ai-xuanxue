@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo ===========================================
echo     腾讯云静态网站托管部署脚本
echo ===========================================
echo.

echo [1/5] 清理缓存...
call npm run clean
if errorlevel 1 (
    echo 错误：清理失败
    pause
    exit /b 1
)

echo.
echo [2/5] 构建网站...
call npm run build
if errorlevel 1 (
    echo 错误：构建失败
    pause
    exit /b 1
)

echo.
echo [3/5] 检查腾讯云CLI...
tcb --version >nul 2>&1
if errorlevel 1 (
    echo 腾讯云CLI未安装，正在安装...
    npm install -g @cloudbase/cli
    if errorlevel 1 (
        echo 错误：腾讯云CLI安装失败
        echo 请手动执行：npm install -g @cloudbase/cli
        pause
        exit /b 1
    )
)

echo.
echo [4/5] 部署到腾讯云...
echo 提示：如果是首次使用，需要先登录腾讯云
echo 执行命令：tcb login
echo.
tcb framework deploy
if errorlevel 1 (
    echo.
    echo 部署失败！可能的原因：
    echo 1. 未登录腾讯云，请执行：tcb login
    echo 2. 未配置cloudbaserc.json文件
    echo 3. 网络连接问题
    echo.
    echo 请参考 TENCENT_CLOUD_GUIDE.md 进行配置
    pause
    exit /b 1
)

echo.
echo [5/5] 部署完成！
echo ✅ 网站已成功部署到腾讯云
echo 📱 访问地址：https://您的环境ID.tcloudbaseapp.com/
echo 💡 提示：网站可能需要1-2分钟时间更新
echo.
echo 🔧 如果部署失败，请：
echo 1. 确保已执行：tcb login
echo 2. 检查cloudbaserc.json配置
echo 3. 参考 TENCENT_CLOUD_GUIDE.md 文档
echo.

pause 