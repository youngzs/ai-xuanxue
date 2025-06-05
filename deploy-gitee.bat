@echo off
echo ===========================================
echo     AI与玄学研究院 - Gitee Pages 部署脚本
echo ===========================================
echo.

echo 正在清理缓存...
call npm run clean
if errorlevel 1 (
    echo 清理失败！
    pause
    exit /b 1
)

echo 正在构建静态文件...
call npm run build
if errorlevel 1 (
    echo 构建失败！
    pause
    exit /b 1
)

echo 正在部署到Gitee...
call hexo deploy
if errorlevel 1 (
    echo 部署失败！
    pause
    exit /b 1
)

echo.
echo ===========================================
echo     部署完成！
echo     访问地址: https://youngzs.gitee.io/ai-xuanxue-blog/
echo ===========================================
pause 