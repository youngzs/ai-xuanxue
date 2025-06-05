# 字符编码问题修复说明

## 问题描述

在Windows环境下运行批处理文件时出现中文乱码，这是因为：

1. **编码不匹配**：批处理文件使用UTF-8编码，但Windows CMD默认使用GBK/ANSI编码
2. **PowerShell编码**：PowerShell的默认编码设置可能与文件编码不匹配

## 解决方案

### 方案一：使用英文版脚本（推荐）

使用英文版本的脚本避免编码问题：
- `switch-platform.bat` - 英文版平台切换脚本
- `deploy-gitee.bat` - 英文版Gitee部署脚本  
- `sync-content.bat` - 英文版内容同步脚本

这些脚本在文件开头添加了 `chcp 65001` 命令来设置UTF-8编码。

### 方案二：使用中文版脚本

如果需要中文界面，可以使用：
- `switch-platform-cn.bat` - 中文版平台切换脚本

此脚本使用GBK编码保存，与Windows CMD默认编码匹配。

### 方案三：手动设置编码

在运行脚本前，可以手动设置命令行编码：

```cmd
# 设置为UTF-8编码
chcp 65001

# 然后运行脚本
switch-platform.bat
```

```cmd
# 设置为GBK编码
chcp 936

# 然后运行中文脚本
switch-platform-cn.bat
```

## 编码说明

| 编码格式 | 代码页 | 适用场景 | 脚本文件 |
|---------|--------|----------|----------|
| UTF-8 | 65001 | 国际化，支持多语言 | switch-platform.bat |
| GBK/ANSI | 936 | 中文Windows默认 | switch-platform-cn.bat |

## 建议

1. **优先使用英文版脚本**，避免编码问题
2. 如果必须使用中文，使用对应编码保存的脚本文件
3. 在脚本开头添加 `chcp` 命令设置正确编码
4. 使用现代终端（如Windows Terminal）可以更好地处理编码问题

## 测试验证

修复后的脚本应该能正常显示，无乱码现象：

```
===========================================
    AI Blog - Platform Switch Tool
===========================================

Please select platform:
[1] Vercel Deploy (main branch)
[2] Gitee Pages Deploy (gitee-pages branch)
[3] View current branch status
[4] Exit
``` 