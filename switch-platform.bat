@echo off
echo ===========================================
echo     AI与玄学研究院 - 平台切换脚本
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
    echo 要部署到Vercel，请：
    echo 1. git add .
    echo 2. git commit -m "更新内容"
    echo 3. git push origin main
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
    echo 要部署到Gitee，可以：
    echo 1. 运行 deploy-gitee.bat 手动部署
    echo 2. 或者 git push gitee gitee-pages 自动部署
    echo.
) else if "%choice%"=="3" (
    echo.
    echo 当前分支状态:
    git branch
    echo.
    echo 当前分支详情:
    git status
    echo.
) else if "%choice%"=="4" (
    echo 退出脚本
    exit /b 0
) else (
    echo 无效选择！
    pause
    goto :eof
)

pause 