# Gold Summit Capital 官网部署指南

## 推荐顺序

第一步先用 GitHub Pages 发布一个临时线上版本。你现在只有 GitHub 账号也可以完成，不需要先买域名。

第二步再购买正式域名，例如 `goldsummitcapital.com` 或更合适的变体，并把域名指向 GitHub Pages 或 Netlify。

第三步等客户专属区需要真正登录、权限和内容管理时，再迁移到 Netlify 或更完整的后端方案。

## A. 只用 GitHub 发布临时官网

1. 在 GitHub 新建一个 repository，建议名称：`gold-summit-capital-site`。
2. 把本文件夹里的代码上传到该 repository。
3. 进入 repository 的 `Settings`。
4. 左侧点击 `Pages`。
5. 在 `Build and deployment` 里选择 `GitHub Actions`。
6. 回到 `Actions` 页面，等待 `Deploy static site to GitHub Pages` 跑完。
7. 成功后会得到一个临时网址，通常类似：

```text
https://你的GitHub用户名.github.io/gold-summit-capital-site/
```

如果这个 repository 以后改成组织账号或公司账号，网址也可以变得更正式。

## B. 买域名时怎么选

优先考虑：

- `goldsummitcapital.com`
- `goldsummitcap.com`
- `goldsummitcapital.hk`
- `goldsummitcapital.co`

建议购买渠道：

- Cloudflare Registrar：价格透明，DNS 管理强，但需要注册 Cloudflare 账号。
- Namecheap：购买流程对新手友好。
- GoDaddy：知名度高，但续费和附加服务需要仔细看清楚。

购买域名需要你本人完成，因为涉及账号、付款、注册人信息和邮箱验证。

## C. 域名连接到网站

买好域名后，有两种常见方式：

1. 继续用 GitHub Pages：在 GitHub Pages 设置里填写 custom domain，然后去域名商后台配置 DNS。
2. 改用 Netlify：用 GitHub 登录 Netlify，导入 repository，Netlify 会自动构建 `dist`，以后更适合做登录区、表单和权限。

当前项目已经保留了 Netlify 配置：

```text
Build command: node scripts/build.mjs
Publish directory: dist
```

## D. 你需要亲自做的事情

- 创建 GitHub repository，或授权我使用你的 GitHub connector。
- 如果要买域名，你需要自己登录域名商并付款。
- 如果要用 Netlify，你需要用 GitHub 登录 Netlify 并授权导入 repository。

## E. 我可以继续替你做的事情

- 整理并上传代码到 GitHub repository。
- 检查 GitHub Actions 是否成功。
- 根据 GitHub Pages 或 Netlify 给出的地址配置项目文档。
- 买好域名后，告诉你 DNS 应该填哪些记录。
- 部署后做桌面端和手机端视觉检查。
