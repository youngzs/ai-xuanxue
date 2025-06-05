@echo off
echo ===========================================
echo     AI与玄学研究院 - 内容同步脚本
echo ===========================================
echo.
echo 此脚本将：
echo 1. 部署当前内容到Vercel (main分支)
echo 2. 同步内容到Gitee Pages (gitee-pages分支)
echo.

set /p confirm=确认执行同步操作？(y/n): 
if /i not "%confirm%"=="y" (
    echo 操作已取消
    pause
    exit /b 0
)

echo.
echo [1/6] 检查当前分支...
for /f "tokens=*" %%i in ('git branch --show-current') do set current_branch=%%i
echo 当前分支: %current_branch%

echo.
echo [2/6] 切换到main分支...
git checkout main
if errorlevel 1 (
    echo 切换到main分支失败！
    pause
    exit /b 1
)

echo.
echo [3/6] 提交并推送到Vercel...
git add .
git status --porcelain > nul 2>&1
if errorlevel 1 (
    echo 没有新的改动需要提交
) else (
    set /p commit_msg=请输入提交信息（直接回车使用默认）: 
    if "!commit_msg!"=="" set commit_msg=内容更新 - %date% %time%
    git commit -m "!commit_msg!"
    git push origin main
    if errorlevel 1 (
        echo 推送到Vercel失败！
        pause
        exit /b 1
    )
    echo Vercel部署完成！
)

echo.
echo [4/6] 切换到gitee-pages分支...
git checkout gitee-pages
if errorlevel 1 (
    echo 切换到gitee-pages分支失败！
    pause
    exit /b 1
)

echo.
echo [5/6] 合并main分支内容...
git merge main --no-edit
if errorlevel 1 (
    echo 合并失败！可能存在冲突，请手动解决
    pause
    exit /b 1
)

echo.
echo [6/6] 推送到Gitee Pages...
git push gitee gitee-pages
if errorlevel 1 (
    echo 推送到Gitee失败！
    pause
    exit /b 1
)

echo.
echo ===========================================
echo     同步完成！
echo.
echo     Vercel访问地址: 
echo     https://ai-xuanxue.vercel.app/
echo.
echo     Gitee Pages访问地址:
echo     https://youngzs.gitee.io/ai-xuanxue-blog/
echo ===========================================

if not "%current_branch%"=="gitee-pages" (
    echo.
    echo 是否切换回原分支 (%current_branch%)？
    set /p switch_back=请选择 (y/n): 
    if /i "!switch_back!"=="y" (
        git checkout %current_branch%
    )
)

pause 