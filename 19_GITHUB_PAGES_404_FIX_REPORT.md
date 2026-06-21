# GitHub Pages 404 修复记录

## 问题

临时网址：

```text
https://liangjun888.github.io/gold-summit-capital-site/
```

打开后出现 404。

## 根因

GitHub Pages 的 project site 会部署在 repository 子路径下：

```text
/gold-summit-capital-site/
```

之前生成的 HTML 使用了站点根路径：

```text
/zh-CN/
/styles/main.css
/assets/hero-research.png
```

浏览器会把它们解析到：

```text
https://liangjun888.github.io/zh-CN/
https://liangjun888.github.io/styles/main.css
```

因此跳转和资源路径会离开 repository 子路径，导致 404 或资源加载失败。

## 修复

新增 `BASE_PATH` 支持：

```text
BASE_PATH=/gold-summit-capital-site
```

GitHub Actions 构建时会自动注入该路径。所有内部链接、CSS、JS、图片和首页跳转都会生成带前缀的 URL。

## Commit

```text
b3a79ae Fix GitHub Pages path prefix
```

## 验证

GitHub Actions:

```text
Deploy static site to GitHub Pages: success
```

线上验证：

```text
https://liangjun888.github.io/gold-summit-capital-site/        -> 200
https://liangjun888.github.io/gold-summit-capital-site/zh-CN/  -> 200
https://liangjun888.github.io/gold-summit-capital-site/styles/main.css -> 200
```

本地测试：

```text
4 tests passed
0 failed
```

## 当前可访问地址

```text
https://liangjun888.github.io/gold-summit-capital-site/zh-CN/
```
