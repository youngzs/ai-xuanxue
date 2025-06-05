@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo ===========================================
echo     Coding Pages 自动部署脚本
echo ===========================================
echo.

:: 检查当前分支
for /f "tokens=2" %%i in ('git branch --show-current') do set current_branch=%%i
echo 当前分支: %current_branch%

:: 确保在正确的分支
if not "%current_branch%"=="gitee-pages" (
    echo 切换到 gitee-pages 分支...
    git checkout gitee-pages
    if errorlevel 1 (
        echo 错误：无法切换到 gitee-pages 分支
        pause
        exit /b 1
    )
)

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
echo [3/5] 添加更改到Git...
git add .

echo.
echo [4/5] 提交更改...
set timestamp=%date:~0,4%-%date:~5,2%-%date:~8,2% %time:~0,2%:%time:~3,2%:%time:~6,2%
git commit -m "Auto deploy to Coding Pages - %timestamp%"

echo.
echo [5/5] 推送到Coding Pages...
git push coding gitee-pages
if errorlevel 1 (
    echo 错误：推送失败
    pause
    exit /b 1
)

echo.
echo ✅ 部署完成！
echo 📱 网站地址: https://serverless-100011558155.coding-pages.com/ai-xuanxue-blog/
echo ⏰ 部署时间: %timestamp%
echo.
echo 💡 提示：网站可能需要1-2分钟时间更新
echo.

pause 