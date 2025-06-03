@echo off
echo ================================
echo    AI与玄学研究院 - 博客部署
echo ================================
echo.

echo [1/3] 清理旧文件...
call hexo clean
if errorlevel 1 (
    echo 清理失败！
    pause
    exit /b 1
)

echo.
echo [2/3] 生成静态文件...
call hexo generate
if errorlevel 1 (
    echo 生成失败！
    pause
    exit /b 1
)

echo.
echo [3/3] 启动本地服务器...
echo 网站将在 http://localhost:4000 启动
echo 按 Ctrl+C 停止服务器
echo.
call hexo server

pause 