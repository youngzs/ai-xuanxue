@echo off
chcp 65001 >nul 2>&1
echo ===========================================
echo     AI Blog - Platform Switch Tool
echo ===========================================
echo.
echo Please select platform:
echo [1] Vercel Deploy (main branch)
echo [2] Gitee Pages Deploy (gitee-pages branch)
echo [3] View current branch status
echo [4] Exit
echo.

set /p choice=Enter your choice (1-4): 

if "%choice%"=="1" (
    echo.
    echo Switching to Vercel deploy branch...
    git checkout main
    if errorlevel 1 (
        echo Switch failed!
        pause
        exit /b 1
    )
    echo.
    echo Current config:
    echo - Branch: main
    echo - Platform: Vercel
    echo - URL: https://ai-xuanxue.vercel.app/
    echo.
    echo To deploy to Vercel:
    echo 1. git add .
    echo 2. git commit -m "update content"
    echo 3. git push origin main
    echo.
) else if "%choice%"=="2" (
    echo.
    echo Switching to Gitee Pages deploy branch...
    git checkout gitee-pages
    if errorlevel 1 (
        echo Switch failed!
        pause
        exit /b 1
    )
    echo.
    echo Current config:
    echo - Branch: gitee-pages
    echo - Platform: Gitee Pages
    echo - URL: https://youngzs.gitee.io/ai-xuanxue-blog/
    echo.
    echo To deploy to Gitee:
    echo 1. Run deploy-gitee.bat for manual deploy
    echo 2. Or git push gitee gitee-pages for auto deploy
    echo.
) else if "%choice%"=="3" (
    echo.
    echo Current branch status:
    git branch
    echo.
    echo Current branch details:
    git status
    echo.
) else if "%choice%"=="4" (
    echo Exit script
    exit /b 0
) else (
    echo Invalid choice!
    pause
    goto :eof
)

pause 