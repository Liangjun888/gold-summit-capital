# Gold Summit Capital 技术与部署方案比较 V1

最后更新：2026-05-19  
用途：公共网站 V1 技术选型、部署方案与 V1.5 客户专属区预留  
依据：`10_WEBSITE_MVP_PRD.md`、`12_PUBLIC_SITE_WIREFRAME.md`、`13_VISUAL_DIRECTION.md`

## 1. 结论先行

推荐方案：

> V1 采用 Astro 静态网站 + Netlify 部署。  
> V1.5 再单独引入认证、文件权限、资料库和访问日志。

理由：

- Gold Summit Capital V1 是内容型公共官网，不是高交互 Web App。
- Astro 适合内容驱动网站，默认尽量少发送客户端 JavaScript，有利于速度、SEO 和维护。
- Astro 的文件路由和 i18n 机制适合 `/zh-CN/`、`/zh-HK/`、`/en/` 的长期结构。
- Netlify 对静态站和 Astro 支持成熟，Git 部署、预览链接、自定义域名、SSL 和后续 Functions / Identity 扩展都比较顺。
- V1 不做真实客户登录，避免第一阶段被后端、认证、安全和文件权限拖住。

不建议第一阶段直接做完整客户后台。客户资料、月报、基金信息、访问日志和文件权限涉及合规与安全，应在 V1 公共官网上线后作为 V1.5 单独设计。

## 2. 当前需求拆分

## 2.1 V1 公共网站

必须支持：

- 5 个公共页面
- `/zh-CN/` 语言路径
- 未来预留 `/zh-HK/` 和 `/en/`
- 响应式设计
- 自定义域名
- HTTPS / SSL
- 基础访问统计
- 高性能加载
- 后续可扩展客户专属区入口

不需要：

- 真实登录
- 数据库
- 文件权限
- 在线表单
- 后台 CMS
- 动态个性化内容

## 2.2 V1.5 客户专属区

未来可能需要：

- 用户认证
- 邀请制账号
- 权限分层：投资人、家族成员、管理员
- 月报和研究报告资料库
- 文件下载或在线阅读权限
- 基础访问日志
- 文件水印或下载控制
- 管理员上传内容

这些不应在 V1 中实现，但 V1 技术栈不应阻碍后续扩展。

## 3. 官方资料核对

已参考的官方资料：

- Astro 官方文档：Astro 适合快速、SEO 友好的内容网站，并强调默认减少客户端 JavaScript。  
  https://docs.astro.build/en/concepts/why-astro/

- Astro i18n 官方文档：支持用 `/[locale]/` 文件夹和 i18n routing 生成多语言 URL。  
  https://docs.astro.build/en/guides/internationalization/

- Netlify Astro 官方文档：Astro 可部署到 Netlify；如不需要服务器功能和 Netlify Image CDN，可不使用 adapter。  
  https://docs.netlify.com/integrations/frameworks/astro/

- Netlify 部署官方文档：支持 Git-based deploy、deploy preview、branch deploy、manual deploy 和 CLI。  
  https://docs.netlify.com/deploy/deploy-overview/

- Vercel Astro 官方文档：静态 Astro 应用可 zero configuration 部署到 Vercel。  
  https://vercel.com/docs/frameworks/astro

- Vercel 部署官方文档：支持 Git、CLI、Deploy Hooks 和 REST API 部署。  
  https://vercel.com/docs/deployments/deployment-methods

- Cloudflare Pages Astro 官方文档：Astro 可部署到 Cloudflare Pages，常见 build command 为 `npm run build`，输出目录为 `dist`。  
  https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/

- Next.js 静态导出官方文档：可通过 `output: 'export'` 输出静态 HTML/CSS/JS 到 `out` 文件夹。  
  https://nextjs.org/docs/pages/guides/static-exports

- Netlify Identity 官方文档：新项目应使用 `@netlify/identity`，可用于 gated content、member-only experience 和 role-based access。  
  https://docs.netlify.com/manage/security/secure-access-to-sites/identity/get-started/

## 4. 方案 A：Astro + Netlify

## 4.1 描述

使用 Astro 构建公共网站，输出静态页面，部署到 Netlify。

建议技术：

```text
Framework: Astro
Language: TypeScript
Styling: CSS Modules / global CSS / Tailwind 可选
Deployment: Netlify
Build command: npm run build
Output directory: dist
Routes: /zh-CN/, /zh-CN/about, /zh-CN/approach, /zh-CN/team, /zh-CN/client-portal
```

## 4.2 优点

- 非常适合 V1 内容型官网。
- 默认静态输出，速度快、维护简单。
- 多语言 URL 结构自然。
- 对 SEO、页面标题、meta、Open Graph 等支持好。
- Netlify 的 deploy preview 适合每次文案、视觉、页面改动先预览再上线。
- V1.5 可继续在 Netlify 上用 Functions、Identity 或外部后端扩展。

## 4.3 风险

- 如果未来客户区变成复杂 Dashboard，Astro 不是最典型的全栈应用框架。
- 如果未来需要大量后台管理、复杂权限、动态数据和实时功能，需要引入外部后端或迁移客户区为独立 App。
- Netlify Identity 虽然适合基础认证，但涉及基金文件、客户资料和访问审计时，仍需合规和安全评估。

## 4.4 适合程度

V1 公共网站：非常适合。  
V1.5 轻量客户区：可行，但需安全评估。  
长期复杂客户门户：可能需要独立后端或独立应用。

## 4.5 结论

这是当前推荐方案。

## 5. 方案 B：Astro + Cloudflare Pages

## 5.1 描述

使用 Astro 构建公共网站，部署到 Cloudflare Pages。

建议技术：

```text
Framework: Astro
Deployment: Cloudflare Pages
Build command: npm run build
Output directory: dist
```

## 5.2 优点

- Cloudflare 网络性能和 DNS 能力强。
- Pages 对静态 Astro 支持直接。
- 可与 Cloudflare DNS、SSL、Workers、R2 存储形成完整生态。
- 如果未来希望用 Cloudflare R2 存储客户文件，生态衔接较自然。

## 5.3 风险

- 对非技术运营者来说，Cloudflare 产品线和配置复杂度略高。
- 后续身份认证和权限体系需要更多架构设计，不如 Netlify Identity 直接。
- 如果团队不熟悉 Cloudflare，初期部署和调试成本可能略高。

## 5.4 适合程度

V1 公共网站：适合。  
V1.5 文件存储和边缘安全：有潜力。  
非技术维护：略复杂。

## 5.5 结论

作为第二选择。若公司域名和 DNS 已经在 Cloudflare，或未来明确要用 R2 / Workers，可考虑。

## 6. 方案 C：Next.js + Vercel

## 6.1 描述

使用 Next.js 构建网站，部署到 Vercel。V1 可做静态页面，未来客户区可扩展成更完整的 Web App。

## 6.2 优点

- Vercel 与 Next.js 生态成熟。
- 如果未来客户区变成复杂应用，Next.js 更适合全栈交互、认证、Dashboard、API routes。
- Vercel Git 部署和 Preview Deployments 体验好。
- 招人和外包开发都容易找到 Next.js 经验。

## 6.3 风险

- 对 V1 这种内容型官网来说，Next.js 可能偏重。
- 容易引入不必要的 JavaScript 和应用复杂度。
- 如果用静态导出，需要注意 Next.js 静态导出的限制。
- 对第一阶段的“快速、稳定、克制公共官网”来说，不如 Astro 直接。

## 6.4 适合程度

V1 公共网站：可行但偏重。  
V1.5 客户 Dashboard：适合。  
长期复杂应用：适合。

## 6.5 结论

如果从一开始就决定客户区会是复杂 Web App，可以选。当前不推荐作为 V1 首选。

## 7. 方案 D：纯静态 HTML/CSS

## 7.1 描述

不用框架，直接写 HTML、CSS 和少量 JavaScript，部署到任意静态托管平台。

## 7.2 优点

- 最简单。
- 没有框架依赖。
- 页面性能好。
- 可以直接放到任何静态主机。

## 7.3 风险

- 五个页面会出现重复导航、页脚、组件和样式。
- 多语言扩展不方便。
- 后续维护和复用能力弱。
- 未来接客户区或内容系统会更痛苦。

## 7.4 结论

不推荐。除非只是做一次性临时页面。

## 8. 方案 E：Webflow / Wix / Squarespace

## 8.1 描述

使用无代码建站工具快速搭建公共网站。

## 8.2 优点

- 可以快速出视觉页面。
- 非技术人员也可编辑内容。
- 托管和 SSL 通常内置。

## 8.3 风险

- 视觉容易模板化。
- 多语言和客户专属区后续扩展不够干净。
- 数据、登录、文件权限、合规控制受平台限制。
- 后续迁移成本可能较高。

## 8.4 结论

不推荐作为 Gold Summit Capital 的长期基础。可以用于极短期视觉试验，但不适合作为创业项目的主技术底座。

## 9. 推荐技术架构

## 9.1 V1 架构

```text
Astro static site
  ├─ src/pages/zh-CN/index.astro
  ├─ src/pages/zh-CN/about.astro
  ├─ src/pages/zh-CN/approach.astro
  ├─ src/pages/zh-CN/team.astro
  ├─ src/pages/zh-CN/client-portal.astro
  ├─ src/components/
  ├─ src/layouts/
  ├─ src/styles/
  └─ public/assets/

Deploy: Netlify
Output: dist
```

## 9.2 组件建议

来自线框文件的组件清单：

- Header
- Footer
- PageHero
- SectionIntro
- TextBlock
- HighlightQuote
- PrincipleList
- CapabilityMatrix
- PortalPreview
- PrivateContactNote

## 9.3 内容组织

第一版可以把内容写在页面或本地 JSON / Markdown 中。

建议：

- 页面结构使用 Astro components。
- 全站文案可先写在 TypeScript / JSON 文件中，方便后续多语言。
- 图片统一放在 `public/assets/` 或 Astro assets 管理。
- 后续若内容更新频繁，再考虑 headless CMS。

## 9.4 多语言预留

V1 只上线简体中文，但目录从第一天保留：

```text
src/pages/zh-CN/
src/pages/zh-HK/   # future
src/pages/en/      # future
```

导航、页脚、CTA 文案不要硬编码到组件内部，建议按 locale 传入。

## 10. 部署方案

## 10.1 推荐：Git-based deploy

流程：

```text
GitHub repo
  ↓ push / pull request
Netlify build
  ↓ deploy preview
Review preview URL
  ↓ merge to main
Production deploy
```

优点：

- 每次改动有记录。
- 可以先看预览链接再上线。
- 适合后续多人协作。
- 适合 Codex 持续迭代。

## 10.2 备选：Manual deploy

流程：

```text
local build
  ↓
netlify deploy
  ↓
netlify deploy --prod
```

优点：

- 不依赖 GitHub。
- 适合早期快速试发。

缺点：

- 版本管理弱。
- 不适合长期多人维护。

## 10.3 不推荐：手工上传静态文件

不推荐通过 FTP 或手动上传文件到传统服务器。

原因：

- 难以回滚。
- 难以审计。
- 容易覆盖错误。
- 不适合长期迭代。

## 11. 域名、SSL 和统计

## 11.1 域名

需要后续确认：

- 主域名是什么。
- 是否使用 `www`。
- 是否需要保留裸域跳转。
- 是否需要单独子域名给客户区，例如 `client.goldsummitcapital.com`。

建议：

```text
Public site: www.goldsummitcapital.com
Client portal future: client.goldsummitcapital.com 或 www.goldsummitcapital.com/zh-CN/client-portal
```

第一阶段可先统一在主站路径下，不急着开独立子域。

## 11.2 SSL

Netlify、Vercel、Cloudflare Pages 均支持自定义域名和 HTTPS。最终选择平台后再按平台配置。

## 11.3 访问统计

V1 可选：

- Netlify Analytics
- Plausible
- Fathom
- Google Analytics

建议：

第一阶段优先选择轻量、隐私友好的统计工具。公共站不收集表单，因此统计需求主要是页面访问量、来源和设备类型。

## 12. V1.5 客户区预留

## 12.1 不要在 V1 伪造登录

V1 客户登录页只做私密入口说明，不出现账号密码框。

原因：

- 没有真实认证时做登录框会降低信任。
- 登录系统涉及安全、隐私、合规和客户资料保护。
- 基金资料和客户内容不适合用临时方案草率上线。

## 12.2 V1.5 认证方案候选

### 方案 1：Netlify Identity + `@netlify/identity`

适合：

- 轻量客户区
- 邀请制账号
- 基础角色权限
- 与 Netlify Functions 配合保护部分内容

注意：

- 新项目应使用 `@netlify/identity`。
- 不使用 `netlify-identity-widget` 或 `gotrue-js`。
- 涉及敏感基金文件时，需要额外评估文件存储、访问日志和下载控制。

### 方案 2：Supabase Auth + Supabase Storage / Database

适合：

- 需要数据库
- 需要文件资料库
- 需要用户、角色、访问记录
- 后续客户区逐步变成真实应用

风险：

- 后端复杂度提高。
- 需要更严谨的数据模型和权限策略。

### 方案 3：独立客户门户工具

适合：

- 想快速交付客户文件
- 不想自己维护认证和文件权限
- 对品牌统一体验要求没那么高

风险：

- 品牌体验割裂。
- 后续迁移成本高。
- 权限和审计能力受工具限制。

## 12.3 客户区安全原则

不管 V1.5 选择哪种方案，都必须满足：

- 邀请制账号
- 强密码或密码重置机制
- 权限分层
- 文件访问权限
- 可撤销访问
- 管理员审核
- 至少基础访问日志
- 敏感文件不直接暴露公开 URL
- 合规或法律审阅

## 13. CMS 与内容维护

## 13.1 V1 不引入 CMS

原因：

- 页面数量少。
- 内容稳定。
- 引入 CMS 会增加配置、权限、编辑流程和安全面。

## 13.2 后续 CMS 候选

若未来公共内容频繁更新，可考虑：

- Decap CMS / Git-based CMS
- Sanity
- Contentful
- Strapi
- Notion 作为内部草稿源，但不建议直接作为正式生产 CMS

## 14. 推荐实施步骤

## Step 1：建立 Astro 项目

```text
Create Astro project
Set TypeScript
Create /zh-CN routes
Add shared layout and components
Add visual tokens
```

## Step 2：实现公共网站 V1

页面：

- `/zh-CN/`
- `/zh-CN/about`
- `/zh-CN/approach`
- `/zh-CN/team`
- `/zh-CN/client-portal`

## Step 3：本地验证

检查：

- 桌面端
- 移动端
- 链接
- 404
- 页面标题
- meta description
- 不出现敏感披露内容

## Step 4：部署预览

推荐：

- GitHub repo + Netlify preview deploy

## Step 5：合规与创始人审阅

上线前检查：

- 文案
- 免责声明
- 团队信息
- 图片授权
- 客户登录页表述

## Step 6：正式上线

配置：

- 自定义域名
- HTTPS
- 访问统计
- sitemap
- robots.txt
- 基础 SEO

## 15. 当前不做

V1 不做：

- 真实登录
- 在线表单
- CMS 后台
- 客户文件库
- 数据库
- 支付
- 投资人在线查看净值
- 在线下载基金资料
- 公开 Insights
- 复杂动画
- 视频背景

## 16. 推荐路线图

### V1

Astro + Netlify 静态公共网站。

### V1.5

客户登录和资料库方案单独评估。优先比较：

- Netlify Identity + Functions
- Supabase Auth + Storage
- 第三方客户门户工具

### V2

客户专属区正式产品化，包括：

- 月报
- 研究
- 基金信息摘要
- 活动记录
- 传承与教育内容
- 权限和日志

## 17. 最终建议

选择：

> Astro + Netlify，Git-based deploy。

先把公共网站做得专业、稳定、可维护。客户专属区不要在 V1 中仓促实现，而应在公共网站上线后作为 V1.5 单独设计。

这条路线最符合当前阶段：

- 快速上线第一印象。
- 保持高端金融网站的速度和稳定。
- 不牺牲未来多语言和客户区扩展。
- 不把敏感文件和认证问题草率前置。

