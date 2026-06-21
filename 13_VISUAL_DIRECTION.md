# Gold Summit Capital 视觉方向规范 V1

最后更新：2026-05-19  
用途：公共网站 V1 视觉方向、设计语言和前端样式基础  
依据：`10_WEBSITE_MVP_PRD.md`、`11_PUBLIC_SITE_COPY.md`、`12_PUBLIC_SITE_WIREFRAME.md`

## 1. 设计目标

Gold Summit Capital 的公共网站应呈现现代私人银行与精品投资机构的气质：稳重、克制、专业、有温度。

网站不应像：

- 基金销售页
- 奢华财富广告
- SaaS 产品官网
- 普通公司宣传页
- PPT 长图

网站应更接近：

- 克制的私人银行网站
- 高端金融出版物
- 安静的机构介绍
- 有温度但不煽情的家族财富叙事

## 2. 参考对象

主要参考 J.P. Morgan Private Bank 的公共网站审美，但不复制其品牌资产、图片、具体版式或交互。

参考链接：

- https://privatebank.jpmorgan.com/nam/en/home
- https://privatebank.jpmorgan.com/nam/en/services

可借鉴的方向：

- 深色与暖中性色建立信任感。
- 大留白与清晰排版降低销售感。
- 内容像金融刊物一样组织，而不是用夸张数字轰炸用户。
- 导航层级克制，内容模块有明确秩序。
- 图片用于承托气质，不喧宾夺主。

不可复制：

- J.P. Morgan 的品牌色、Logo、具体页面布局、图片素材和组件细节。
- 其大机构规模背书、200 年历史等叙事方式。
- 以 Insights 内容流作为首页主体的结构，因为 Gold Summit Capital V1 不做公开 Insights。

## 3. 视觉关键词

核心关键词：

- 克制
- 稳重
- 有温度
- 专业
- 长期主义
- 编辑出版感
- 私密关系
- 低销售感

反向关键词：

- 炫耀
- 奢华
- 金光闪闪
- 高收益暗示
- 互联网感
- 过度卡片化
- 活动海报感
- 课程销售感

## 4. 色彩系统

## 4.1 色彩原则

用户喜欢 J.P. Morgan Private Bank 式的深棕、浅金棕、灰色和米色底色。Gold Summit Capital 可以采用同一类气质，但需要避免页面变成单一棕色系。

原则：

- 深棕作为品牌锚点，但不大面积滥用。
- 米白作为主要背景，提供温度和留白。
- 暖灰用于分区和信息层级。
- 金棕只做小面积强调，不做奢华金色。
- 加入少量石墨灰和低饱和绿色灰，避免整体过于“咖啡色”。

## 4.2 建议色板

### Brand Anchor

```text
Deep Umber        #2B211C   主品牌深棕，用于页脚、深色区块、重要标题
Chestnut Brown    #5A3F32   次级深棕，用于 hover、细节和分隔
Antique Bronze    #9B7A52   金棕强调色，用于细线、标签、按钮 hover
```

### Background

```text
Ivory Sand        #F4EFE6   主背景米白
Warm Stone        #E7DFD2   次级背景，适合区块分隔
Soft Greige       #D6D0C4   轻微边界、分割线和浅底区域
```

### Text

```text
Near Brown Black  #1B1714   主标题和正文
Graphite          #3F3D39   正文和导航
Muted Grey        #6F6A63   说明文字
```

### Balancing Accent

```text
Sage Grey         #7C8577   少量平衡色，用于图表、标签或状态，不作为主色
Parchment         #FAF7F0   高亮底色和轻量背景
```

## 4.3 使用比例

建议视觉比例：

- 米白 / 浅暖灰背景：55%-65%
- 深棕文字与深色区块：15%-20%
- 石墨灰文字与线条：10%-15%
- 金棕强调：5% 以内
- 平衡色 Sage Grey：5% 以内

这样可以保留私人银行式暖调，同时避免页面被棕色完全主导。

## 4.4 禁止使用

- 大面积亮金色
- 金属质感渐变
- 黑金奢华风
- 大面积咖啡色背景
- 彩色金融图表风
- 高饱和蓝紫渐变
- 纯黑背景配金字

## 5. 字体系统

## 5.1 字体气质

字体应体现“金融出版感 + 中文可读性”。标题可以更有书卷感，正文必须清晰可靠。

## 5.2 中文字体建议

### 标题

优先：

- Noto Serif SC
- 思源宋体
- Source Han Serif SC

替代：

- 系统宋体作为兜底，但需要控制字重和行高。

使用方式：

- 用于 H1、H2、重点引语和少量品牌性标题。
- 不要全文使用宋体，避免阅读疲劳。

### 正文

优先：

- Noto Sans SC
- 思源黑体
- Source Han Sans SC

使用方式：

- 用于正文、导航、按钮、页脚、说明文字。
- 字重以 Regular / Medium 为主。

## 5.3 英文字体建议

### 标题

可选：

- Cormorant Garamond
- Libre Baskerville
- Georgia

### 正文

可选：

- Inter
- Source Sans 3
- system-ui

## 5.4 字体层级

### Desktop

```text
H1: 56-72px, line-height 1.05-1.15, serif
H2: 36-48px, line-height 1.15-1.25, serif
H3: 24-30px, line-height 1.25-1.35, serif or sans
Body Large: 18-20px, line-height 1.7
Body: 16-17px, line-height 1.75
Small: 13-14px, line-height 1.6
Navigation: 14-15px
```

### Mobile

```text
H1: 36-44px, line-height 1.12-1.2
H2: 28-34px, line-height 1.18-1.28
H3: 22-26px, line-height 1.25-1.35
Body: 16px, line-height 1.7
Small: 13-14px, line-height 1.55
```

## 5.5 字体注意

- 不使用负字距。
- 不用 viewport width 动态缩放字体。
- 中文标题不要过度压缩行高。
- 英文大写标签可少量使用，但字距不要夸张。
- 不要使用花体、手写体或过度装饰字体。

## 6. 版式系统

## 6.1 页面宽度

建议：

```text
Max content width: 1180-1240px
Text column width: 680-760px
Wide editorial block: 960-1080px
```

原则：

- 正文段落不要铺满整屏。
- Hero 可以更宽，但文字区仍需控制行宽。
- 大屏不应让内容漂散。

## 6.2 间距

### Desktop

```text
Section vertical padding: 96-140px
Hero vertical padding: 120-160px
Block gap: 40-72px
Paragraph gap: 18-24px
```

### Mobile

```text
Section vertical padding: 56-80px
Hero vertical padding: 72-96px
Block gap: 28-40px
Paragraph gap: 16-20px
```

## 6.3 栅格

建议采用：

- Desktop：12 列栅格
- Tablet：8 列栅格
- Mobile：4 列栅格

常用布局：

- Hero：6/6 或 7/5 左文右图
- 重点段落：7/5 左正文右引语
- 能力矩阵：3 列或 2 列
- 移动端全部转为单列

## 6.4 区块风格

可以使用：

- 全宽米白区块
- 暖灰分区
- 深棕强调区
- 细线分隔
- 大字号引语

避免使用：

- 多层嵌套卡片
- 大圆角卡片
- 彩色图标网格
- 复杂背景纹理
- 装饰性圆球、光斑、渐变云

## 7. 组件规范

## 7.1 Header

结构：

```text
Gold Summit Capital       首页   关于我们   投资与传承理念   团队   客户登录
```

样式：

- 背景：米白或深棕，视首页 Hero 设计决定。
- Logo：文字型 wordmark。
- 导航：小字号、稳定、无强烈装饰。
- 活跃态：细线或文字颜色变化。

注意：

- 不使用大型胶囊按钮。
- 不使用强销售 CTA。
- 移动端菜单展开后保持简洁。

## 7.2 Buttons / CTA

### Primary CTA

用途：

- 了解我们的理念
- 进入客户专属区

样式：

```text
Background: Deep Umber #2B211C
Text: Ivory Sand #F4EFE6
Hover: Chestnut Brown #5A3F32
Border radius: 2-4px
Padding: 12px 22px desktop, 12px 18px mobile
```

### Secondary CTA

样式：

```text
Background: transparent
Text: Deep Umber #2B211C
Border: 1px solid Soft Greige #D6D0C4
Hover border: Antique Bronze #9B7A52
```

注意：

- 按钮文字要短。
- 不做大圆角胶囊。
- 不用图标装饰 CTA，除非是极简箭头。

## 7.3 Page Hero

每个页面 Hero 包含：

- 小标签
- H1
- 副标题
- 可选图片或留白

样式：

- H1 使用衬线字体。
- 小标签用无衬线、小字号、金棕或灰色。
- 副标题控制在 2-4 行。

## 7.4 Highlight Quote

用于：

- 首页重点句
- 创始人引语
- MHB 精神

样式：

- 衬线字体
- 深棕或米白文字
- 不使用巨大的装饰引号
- 可用细线或留白强调

## 7.5 Principle List

用于：

- 纪律 / 复盘 / 参与
- 研究 / 边界 / 纪律 / 复盘
- 团队共同原则

样式：

- 细线分隔
- 标题简短
- 每项说明 1-2 行
- 不需要图标

## 7.6 Capability Matrix

用于团队页能力矩阵。

样式：

- 2x3 或 3x2
- 浅暖灰背景或无背景细线分隔
- 不使用厚重阴影
- 不使用复杂插画

## 7.7 Footer

样式：

```text
Background: Deep Umber #2B211C
Text: Ivory Sand #F4EFE6
Muted text: Warm Stone #E7DFD2
Accent line: Antique Bronze #9B7A52
```

内容：

- Wordmark
- 页脚短句
- 页面链接
- 免责声明

注意：

- 免责声明必须可读。
- 不堆积社交媒体图标。
- 不放开放表单。

## 8. 图片方向

## 8.1 图片气质

图片应服务于“可信、安静、真实、长期”的气质。

适合：

- 空间局部
- 城市细节
- 桌面与研究材料
- 会议室自然光
- 建筑材质
- 低饱和摄影

不适合：

- 明显摆拍人物
- 家庭剪影
- 豪车游艇
- 金条钞票
- 股票走势图作为背景
- 客户合照
- 无授权活动照

## 8.2 首页 Hero 图片

建议方向：

- 香港 / 上海 / 台北城市建筑细节
- 会客空间或研究桌面局部
- 纸张、书籍、笔、玻璃、木质桌面等真实材质

不建议：

- 抽象金融曲线
- 过暗城市夜景
- 客户人物
- 投资交易屏幕

## 8.3 图片处理

处理原则：

- 低饱和
- 暖色但不过黄
- 保留真实光线
- 不大幅模糊
- 不做暗黑遮罩压字
- 图片上尽量不放长文字

## 9. 页面风格应用

## 9.1 首页

视觉方向：

- 最强品牌印象页面。
- Hero 可使用左文右图。
- Why We Exist 可用暖灰或米白大留白。
- Client Portal Preview 可使用深棕强调区。

重点：

- H1 要稳，不要营销。
- 首页只需要一个强记忆点：专业资产管理与代际传承的双重属性。

## 9.2 关于我们

视觉方向：

- 更像机构叙事。
- 可以更安静、更文字化。
- MHB 区块可以用深棕背景，但文字要克制。

重点：

- 不要把创始故事写成个人宣传页。
- 让读者感到真诚和长期主义。

## 9.3 投资与传承理念

视觉方向：

- 更像方法论页面。
- 使用概念框、细线、关键词，但不用复杂图表。

重点：

- 不出现收益暗示。
- 不出现具体投资产品条款。
- 强调“理解过程”，而不是“提高回报”。

## 9.4 团队

视觉方向：

- 专业、克制、低隐私暴露。
- 如没有确认照片，先用文字和能力矩阵。

重点：

- 创始人区块权重最高。
- 团队能力矩阵比个人履历堆砌更适合 V1。

## 9.5 客户登录

视觉方向：

- 私密入口，而不是建设中页面。
- 可用深棕或暖灰强调访问说明。

重点：

- 不出现假登录框。
- 不出现注册入口。
- 文案必须说明“仅向受邀客户开放”。

## 10. 可访问性与可读性

要求：

- 正文对比度足够。
- 米白背景上的浅金棕不能用于正文。
- 小字号免责声明也必须可读。
- 移动端正文不小于 16px。
- 点击目标高度不小于 44px。
- 图片不能承载唯一信息。
- 不用颜色作为唯一状态提示。

## 11. 前端样式 token 草案

```css
:root {
  --color-deep-umber: #2B211C;
  --color-chestnut: #5A3F32;
  --color-antique-bronze: #9B7A52;
  --color-ivory-sand: #F4EFE6;
  --color-warm-stone: #E7DFD2;
  --color-soft-greige: #D6D0C4;
  --color-near-brown-black: #1B1714;
  --color-graphite: #3F3D39;
  --color-muted-grey: #6F6A63;
  --color-sage-grey: #7C8577;
  --color-parchment: #FAF7F0;

  --font-serif: "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
  --font-sans: "Noto Sans SC", "Source Han Sans SC", Inter, system-ui, sans-serif;

  --radius-small: 4px;
  --max-content: 1200px;
  --max-text: 720px;
}
```

## 12. 禁用清单

设计和开发时禁止：

- 大面积金色渐变
- 黑金奢华风
- 豪车、游艇、金条、豪宅图片
- 客户正脸或合影
- 未授权人物照片
- 圆角过大的 SaaS 卡片
- 多层卡片嵌套
- 强销售 CTA
- 假登录框
- 公开基金业绩数字
- 公开收益目标
- 公开基金条款
- 用股票曲线当主视觉
- 用装饰性圆球、光斑或渐变云做背景

## 13. 仍需确认

设计落地前需要确认：

- 是否已有可用品牌字体授权。
- 是否允许加载 Google Fonts 或需本地托管字体。
- 是否已有可用的城市、空间、研究桌面或活动非人物照片。
- 是否使用真实团队照片。
- 是否需要设计一个简单图形 logo，还是 V1 只保留 wordmark。
- 是否需要合规审阅所有公开视觉和文案。

## 14. 下一步

完成视觉方向后，建议继续制作：

1. `14_TECH_DEPLOYMENT_OPTIONS.md`：技术与部署方案比较。
2. 公共网站 V1 的可运行原型。
3. 图片素材清单和拍摄/选图规范。

