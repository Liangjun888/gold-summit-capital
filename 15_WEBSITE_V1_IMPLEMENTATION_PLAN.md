# Gold Summit Capital Website V1 Implementation Plan

最后更新：2026-05-19  
用途：公共网站 V1 的实际搭建记录与下一步执行依据

## 1. 当前执行决定

公共网站 V1 进入实际搭建阶段。

原技术建议仍是：Astro + Netlify。当前本地环境没有可用 `npm`，系统 `node` 也被拒绝访问，因此第一版先采用零依赖静态生成器完成可运行网站原型。这样可以先验证信息架构、文案、视觉方向和响应式页面，不让包管理器问题阻塞公共形象展示。

该原型不是对长期技术路线的否定。后续具备 `npm`、GitHub 和 Netlify 项目后，可以把当前内容数据、样式 token、页面结构迁移到 Astro。

## 2. 代码目录

当前代码目录：

```text
gold-summit-capital-site/
```

核心结构：

```text
gold-summit-capital-site/
  ├─ src/content/site-data.mjs
  ├─ src/styles/main.css
  ├─ src/scripts/main.js
  ├─ scripts/build.mjs
  ├─ scripts/dev-server.mjs
  ├─ tests/site-contract.test.mjs
  ├─ netlify.toml
  └─ dist/
```

## 3. V1 范围

本轮实现：

- 首页 `/zh-CN/`
- 关于我们 `/zh-CN/about/`
- 投资与传承理念 `/zh-CN/approach/`
- 团队 `/zh-CN/team/`
- 客户登录 `/zh-CN/client-portal/`
- 移动端导航
- 统一页脚免责声明
- 可生成静态 HTML
- Netlify 静态部署配置
- 自动检查公开披露边界

本轮不做：

- 真实登录
- 假登录框
- 公开 Insights
- 在线联系表单
- 公开业绩、基金条款、费率、收益目标、持仓
- 客户资料库

## 4. 验收方式

基础自动检查：

```text
node --test tests/site-contract.test.mjs
```

构建检查：

```text
node scripts/build.mjs
```

视觉检查：

本地启动静态服务器后检查桌面端与移动端页面，重点看首页首屏、导航、客户登录页、免责声明和移动端文本是否拥挤。

## 5. 后续迁移 Astro 的条件

满足以下条件后建议迁移：

- 本机或项目环境可使用 `npm`
- 建立 GitHub 仓库
- 建立 Netlify site
- 明确是否继续零依赖静态站，或正式转 Astro

迁移时优先保留：

- `/zh-CN/` 路由结构
- `site-data.mjs` 内容模型
- `main.css` 视觉 token
- 合规边界测试
