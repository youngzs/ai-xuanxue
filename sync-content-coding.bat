@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo ===========================================
echo     内容同步脚本 (支持Coding Pages)
echo ===========================================
echo.

echo [1/7] 检查当前分支状态...
git status --porcelain
if errorlevel 1 (
    echo 错误：Git状态检查失败
    pause
    exit /b 1
)

echo.
echo [2/7] 添加所有更改...
git add .

echo.
echo [3/7] 提交更改到当前分支...
set timestamp=%date:~0,4%-%date:~5,2%-%date:~8,2% %time:~0,2%:%time:~3,2%:%time:~6,2%
git commit -m "Content update - %timestamp%"

echo.
echo [4/7] 推送到GitHub (origin)...
git push origin HEAD
if errorlevel 1 (
    echo 警告：推送到GitHub失败，继续其他操作...
)

echo.
echo [5/7] 推送到Coding...
git push coding HEAD
if errorlevel 1 (
    echo 警告：推送到Coding失败，继续其他操作...
)

echo.
echo [6/7] 同步到gitee-pages分支（如果当前在main分支）...
for /f "tokens=*" %%i in ('git branch --show-current') do set current_branch=%%i
if "%current_branch%"=="main" (
    echo 检测到main分支，同步内容到gitee-pages分支...
    git checkout gitee-pages
    git merge main --no-edit
    git push coding gitee-pages
    git checkout main
    echo gitee-pages分支同步完成
) else (
    echo 当前在 %current_branch% 分支，跳过分支同步
)

echo.
echo [7/7] 同步完成！
echo ✅ 内容已同步到所有平台
echo.
echo 📱 访问地址:
echo - Vercel: https://ai-xuanxue.vercel.app/
echo - Coding Pages: https://serverless-100011558155.coding-pages.com/ai-xuanxue-blog/
echo - GitHub Pages: https://youngzs.github.io/ai-xuanxue/
echo.
echo ⏰ 同步时间: %timestamp%
echo 💡 提示：网站可能需要1-2分钟时间更新
echo.

pause 