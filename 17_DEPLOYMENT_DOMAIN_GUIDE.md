# Gold Summit Capital 部署与域名指南

## 当前判断

你现在只有 GitHub 账号，足够先发布第一版线上预览。第一步不建议先卡在域名、Netlify 或真实客户登录区上，而是先让公共官网有一个可访问的 URL。

## 推荐路线

1. 先用 GitHub Pages 发布临时官网。
2. 确认页面内容、气质、移动端展示和免责声明。
3. 再购买正式域名。
4. 域名接入后，再决定继续用 GitHub Pages，还是切到 Netlify。
5. 等客户专属区需要真实登录、权限和内容管理时，再做 Netlify Identity、受保护内容区或独立后端。

## 为什么先用 GitHub Pages

- 你已经有 GitHub 账号。
- 当前 V1 是静态官网，没有数据库、表单、真实登录。
- GitHub Pages 可以免费发布静态网站。
- 我已经在网站项目里加入 `.github/workflows/pages.yml`，推送到 GitHub 后可以自动构建和部署。

## 买域名的建议

优先考虑 `.com`，其次才是 `.hk`、`.co` 或更短变体。

候选：

- `goldsummitcapital.com`
- `goldsummitcap.com`
- `goldsummitcapital.hk`
- `goldsummitcapital.co`

推荐购买渠道：

- Cloudflare Registrar：适合长期管理，价格透明，DNS 强。
- Namecheap：新手购买流程相对友好。
- GoDaddy：知名度高，但购买时要注意续费价格和附加服务。

域名购买必须由你本人完成，因为涉及付款、注册人信息、邮箱验证和账号安全。

## 我可以替你完成的部分

- 准备 GitHub repository 的代码结构。
- 帮你把网站推到 GitHub。
- 配置 GitHub Pages workflow。
- 检查 Actions 构建结果。
- 给出临时访问链接。
- 买好域名后，告诉你 DNS 后台应该填什么记录。
- 接入域名后做桌面和手机端 QA。

## 需要你亲自完成的部分

- 创建或授权 GitHub repository。
- 如使用 Netlify，用 GitHub 登录 Netlify 并授权 repository。
- 购买域名并完成付款。
- 域名注册邮箱验证。

## 下一步

最实际的下一步是创建 GitHub repository：

```text
Repository name: gold-summit-capital-site
Visibility: Private first, then decide whether to make public
Pages source: GitHub Actions
```

如果你愿意授权 GitHub connector，我可以继续帮你把本地项目整理并发布到 GitHub。
