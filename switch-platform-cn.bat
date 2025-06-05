@echo off
chcp 936 >nul 2>&1
echo ===========================================
echo     AI博客 - 平台切换脚本
echo ===========================================
echo.
echo 请选择要切换的平台：
echo [1] Vercel部署 (main分支)
echo [2] Gitee Pages部署 (gitee-pages分支)
echo [3] 查看当前分支状态
echo [4] 退出
echo.

set /p choice=请输入选择(1-4): 

if "%choice%"=="1" (
    echo.
    echo 切换到Vercel部署分支...
    git checkout main
    if errorlevel 1 (
        echo 切换失败！
        pause
        exit /b 1
    )
    echo.
    echo 当前配置:
    echo - 分支: main
    echo - 部署平台: Vercel
    echo - 访问地址: https://ai-xuanxue.vercel.app/
    echo.
) else if "%choice%"=="2" (
    echo.
    echo 切换到Gitee Pages部署分支...
    git checkout gitee-pages
    if errorlevel 1 (
        echo 切换失败！
        pause
        exit /b 1
    )
    echo.
    echo 当前配置:
    echo - 分支: gitee-pages
    echo - 部署平台: Gitee Pages
    echo - 访问地址: https://youngzs.gitee.io/ai-xuanxue-blog/
    echo.
) else if "%choice%"=="3" (
    echo.
    echo 当前分支状态:
    git branch
    echo.
) else if "%choice%"=="4" (
    echo 退出脚本
    exit /b 0
) else (
    echo 无效选择！
)

pause 