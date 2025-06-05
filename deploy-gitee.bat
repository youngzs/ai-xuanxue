@echo off
chcp 65001 >nul 2>&1
echo ===========================================
echo     AI Blog - Gitee Pages Deploy Script
echo ===========================================
echo.

echo Cleaning cache...
call npm run clean
if errorlevel 1 (
    echo Clean failed!
    pause
    exit /b 1
)

echo Building static files...
call npm run build
if errorlevel 1 (
    echo Build failed!
    pause
    exit /b 1
)

echo Deploying to Gitee...
call hexo deploy
if errorlevel 1 (
    echo Deploy failed!
    pause
    exit /b 1
)

echo.
echo ===========================================
echo     Deploy completed!
echo     URL: https://youngzs.gitee.io/ai-xuanxue-blog/
echo ===========================================
pause 