# Nginx 配置指南 - Hexo 博客路由处理

## 问题背景

当 Hexo 博客部署到服务器时，某些页面可能因为路径问题无法正常访问，特别是：
- 直接访问文章页面 URL
- 缺少 `ai-xuanxue-blog` 前缀的页面
- 刷新页面时出现 404 错误

## 解决方案

### 1. 基础 try_files 配置

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/ai-xuanxue-blog;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 2. 针对子目录部署的配置

如果博客部署在子目录 `/ai-xuanxue-blog/` 下：

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www;
    index index.html;

    # 处理子目录路由
    location /ai-xuanxue-blog/ {
        alias /var/www/ai-xuanxue-blog/;
        try_files $uri $uri/ /ai-xuanxue-blog/index.html;
    }

    # 可选：自动重定向根目录到博客目录
    location = / {
        return 301 /ai-xuanxue-blog/;
    }
}
```

### 3. 处理缺少前缀的 URL

如果需要处理没有 `ai-xuanxue-blog` 前缀的 URL：

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www;
    index index.html;

    # 主博客路径
    location /ai-xuanxue-blog/ {
        alias /var/www/ai-xuanxue-blog/;
        try_files $uri $uri/ /ai-xuanxue-blog/index.html;
    }

    # 处理没有前缀的路径 - 重定向到带前缀的路径
    location / {
        # 首先检查是否存在对应的博客文件
        try_files /ai-xuanxue-blog$uri /ai-xuanxue-blog$uri/ @redirect_to_blog;
    }

    # 重定向到博客目录
    location @redirect_to_blog {
        return 301 /ai-xuanxue-blog$uri;
    }
}
```

### 4. 完整的生产环境配置

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name your-domain.com www.your-domain.com;

    # 重定向到 HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name your-domain.com www.your-domain.com;

    # SSL 配置
    ssl_certificate /path/to/ssl/cert.pem;
    ssl_certificate_key /path/to/ssl/private.key;

    root /var/www;
    index index.html;

    # 安全头
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;

    # Gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # 静态资源缓存
    location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # 博客主路径
    location /ai-xuanxue-blog/ {
        alias /var/www/ai-xuanxue-blog/;
        try_files $uri $uri/ /ai-xuanxue-blog/index.html;
        
        # 设置正确的 MIME 类型
        location ~* \.html$ {
            add_header Cache-Control "public, max-age=0, must-revalidate";
        }
    }

    # 处理根路径访问
    location = / {
        return 301 /ai-xuanxue-blog/;
    }

    # 处理没有前缀的路径
    location / {
        try_files /ai-xuanxue-blog$uri /ai-xuanxue-blog$uri/ @redirect_to_blog;
    }

    location @redirect_to_blog {
        return 301 /ai-xuanxue-blog$uri;
    }

    # 错误页面
    error_page 404 /ai-xuanxue-blog/404.html;
    error_page 500 502 503 504 /ai-xuanxue-blog/50x.html;
}
```

## 配置说明

### try_files 指令的工作原理

1. **$uri** - 检查请求的确切路径是否存在文件
2. **$uri/** - 如果是目录，检查目录下是否有 index.html
3. **/index.html** - 都不存在时，回退到根 index.html

### 适用场景

✅ **适合使用 try_files 的情况：**
- 单页面应用 (SPA)
- 需要前端路由的静态网站
- 直接访问页面 URL 时防止 404

✅ **对于 Hexo 博客的好处：**
- 直接访问文章 URL 不会 404
- 刷新页面时保持正常显示
- 处理缺失的静态文件

⚠️ **注意事项：**
- 确保 index.html 能够处理所有路由
- 可能影响真正的 404 页面显示
- 注意 SEO 影响

## 测试配置

```bash
# 检查配置语法
sudo nginx -t

# 重新加载配置
sudo nginx -s reload

# 测试不同路径
curl -I http://your-domain.com/
curl -I http://your-domain.com/ai-xuanxue-blog/
curl -I http://your-domain.com/some-article/
```

## 故障排除

1. **检查文件路径是否正确**
2. **确认权限设置**
3. **查看 nginx 错误日志**
   ```bash
   sudo tail -f /var/log/nginx/error.log
   ```
4. **验证 Hexo 生成的文件结构** 