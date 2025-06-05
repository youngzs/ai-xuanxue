@echo off
chcp 65001 >nul 2>&1
echo ===========================================
echo     AI Blog - Content Sync Script
echo ===========================================
echo.
echo This script will:
echo 1. Deploy current content to Vercel (main branch)
echo 2. Sync content to Gitee Pages (gitee-pages branch)
echo.

set /p confirm=Confirm sync operation? (y/n): 
if /i not "%confirm%"=="y" (
    echo Operation cancelled
    pause
    exit /b 0
)

echo.
echo [1/6] Checking current branch...
for /f "tokens=*" %%i in ('git branch --show-current') do set current_branch=%%i
echo Current branch: %current_branch%

echo.
echo [2/6] Switching to main branch...
git checkout main
if errorlevel 1 (
    echo Failed to switch to main branch!
    pause
    exit /b 1
)

echo.
echo [3/6] Committing and pushing to Vercel...
git add .
git status --porcelain > nul 2>&1
if errorlevel 1 (
    echo No new changes to commit
) else (
    set /p commit_msg=Enter commit message (press Enter for default): 
    if "!commit_msg!"=="" set commit_msg=Content update - %date% %time%
    git commit -m "!commit_msg!"
    git push origin main
    if errorlevel 1 (
        echo Failed to push to Vercel!
        pause
        exit /b 1
    )
    echo Vercel deploy completed!
)

echo.
echo [4/6] Switching to gitee-pages branch...
git checkout gitee-pages
if errorlevel 1 (
    echo Failed to switch to gitee-pages branch!
    pause
    exit /b 1
)

echo.
echo [5/6] Merging main branch content...
git merge main --no-edit
if errorlevel 1 (
    echo Merge failed! Conflicts may exist, please resolve manually
    pause
    exit /b 1
)

echo.
echo [6/6] Pushing to Gitee Pages...
git push gitee gitee-pages
if errorlevel 1 (
    echo Failed to push to Gitee!
    pause
    exit /b 1
)

echo.
echo ===========================================
echo     Sync completed!
echo.
echo     Vercel URL: 
echo     https://ai-xuanxue.vercel.app/
echo.
echo     Gitee Pages URL:
echo     https://youngzs.gitee.io/ai-xuanxue-blog/
echo ===========================================

if not "%current_branch%"=="gitee-pages" (
    echo.
    echo Switch back to original branch (%current_branch%)?
    set /p switch_back=Choose (y/n): 
    if /i "!switch_back!"=="y" (
        git checkout %current_branch%
    )
)

pause 