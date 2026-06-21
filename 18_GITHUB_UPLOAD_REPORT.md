# GitHub 上传记录

## Repository

```text
https://github.com/Liangjun888/gold-summit-capital-site
```

## 上传内容

已上传 Gold Summit Capital 公共网站 V1 源码：

- 五个公共页面内容结构
- 静态构建脚本
- GitHub Pages workflow
- Netlify 配置
- 中文部署说明
- 基础合同测试

未上传：

- `dist/` 构建产物
- `qa/` 截图
- `.server-*.log` 临时日志

这些文件已通过 `.gitignore` 排除。

## Commit

```text
62cc642 Initial public website MVP
```

远端 `main` 分支已确认存在：

```text
62cc642cc6ca4ff3356acf9f28fb6a373a56b618 refs/heads/main
```

## 上传前验证

```text
node scripts/build.mjs
node --test tests/site-contract.test.mjs
```

测试结果：

```text
3 tests passed
0 failed
```

## 下一步

进入 GitHub repository：

```text
Settings -> Pages -> Build and deployment -> Source: GitHub Actions
```

然后打开 `Actions` 页面，查看 `Deploy static site to GitHub Pages` 是否成功。

成功后，GitHub 会给出临时访问地址，通常类似：

```text
https://liangjun888.github.io/gold-summit-capital-site/
```

如果 Actions 没有自动运行，可以在 Actions 页面手动点击 `Deploy static site to GitHub Pages`，再点 `Run workflow`。
