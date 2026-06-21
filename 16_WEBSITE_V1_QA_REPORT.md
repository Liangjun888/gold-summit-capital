# Gold Summit Capital Website V1 QA Report

最后更新：2026-05-19  
对象：公共网站 V1 本地可运行原型

## 1. 本轮产物

代码目录：

```text
gold-summit-capital-site/
```

已生成静态站点：

```text
gold-summit-capital-site/dist/
```

本地预览地址：

```text
http://127.0.0.1:4173/zh-CN/
```

## 2. 已实现页面

- `/zh-CN/`
- `/zh-CN/about/`
- `/zh-CN/approach/`
- `/zh-CN/team/`
- `/zh-CN/client-portal/`

## 3. 自动检查结果

构建命令：

```text
node scripts/build.mjs
```

结果：

```text
Built 5 pages to gold-summit-capital-site/dist
```

测试命令：

```text
node --test tests/site-contract.test.mjs
```

结果：

```text
3 tests passed
0 failed
```

自动检查覆盖：

- 5 个 V1 路由存在
- 客户专属区页面已构建
- 客户专属区不出现假登录表单
- 客户专属区不出现密码输入框
- 公共源码不出现关键敏感披露词

## 4. 视觉 QA

已用 Edge headless / Playwright 做桌面端与移动端检查。

截图：

```text
gold-summit-capital-site/qa/desktop-home.png
gold-summit-capital-site/qa/mobile-home.png
gold-summit-capital-site/qa/mobile-client-portal.png
```

检查结果：

- 首页桌面端可正常显示
- 首页移动端无横向溢出
- 移动端菜单按钮可见
- Hero 图片正常加载
- 客户专属区移动端无横向溢出
- 客户专属区包含“仅向受邀客户开放”
- 全站未检测到表单或密码输入框

## 5. 当前限制

本地环境当前没有可用 `npm`，系统默认 `node` 被拒绝访问。因此本轮采用 Codex 内置 Node 运行零依赖静态生成器。

这不会影响当前公共网站原型的本地预览和 Netlify 静态部署验证，但如果要按原方案迁移到 Astro，需要先准备：

- 可用 `npm`
- GitHub 仓库
- Netlify 项目
- 是否继续静态生成器或迁移 Astro 的最终确认

## 6. 下一步建议

1. 创始人/团队先审阅当前 V1 页面文案与视觉气质。
2. 确认团队页是否公开真实姓名、照片和完整履历。
3. 确认页脚免责声明是否需要法律顾问调整。
4. 准备 GitHub + Netlify，先部署 preview URL。
5. 预览确认后，再决定是否马上迁移 Astro，或先用当前静态版本上线公共 V1。
