export const site = {
  brand: "Gold Summit Capital",
  locale: "zh-CN",
  baseUrl: "https://www.goldsummitcapital.com",
  basePath: process.env.BASE_PATH || "",
  tagline: "长期投资，真实参与，探索财富与智慧的双重传承。",
  nav: [
    { id: "home", label: "首页", href: "/zh-CN/" },
    { id: "about", label: "关于我们", href: "/zh-CN/about/" },
    { id: "approach", label: "投资与传承理念", href: "/zh-CN/approach/" },
    { id: "team", label: "团队", href: "/zh-CN/team/" },
    { id: "client-portal", label: "客户登录", href: "/zh-CN/client-portal/" },
  ],
  footerDisclaimer:
    "本网站内容仅用于介绍 Gold Summit Capital 的公司理念、团队背景和服务方向，不构成任何投资建议、基金销售、认购邀请或回报承诺。任何投资均涉及风险，具体资料请以正式法律文件和合规材料为准。",
  pages: [
    {
      id: "home",
      path: "/zh-CN/",
      seoTitle: "Gold Summit Capital | 长期投资与代际传承",
      seoDescription:
        "Gold Summit Capital 以长期资产管理为基础，陪伴家族建立关于财富、风险、责任与传承的共同语言。",
      hero: {
        eyebrow: "Gold Summit Capital",
        title: "长期投资，真实参与，探索财富与智慧的双重传承。",
        body:
          "Gold Summit Capital 以长期资产管理为基础，陪伴家族建立关于财富、风险、责任与传承的共同语言。",
        primary: { label: "了解我们的理念", href: "/zh-CN/approach/" },
        secondary: { label: "客户专属区", href: "/zh-CN/client-portal/" },
        image: "/assets/hero-research.png",
        imageAlt: "温暖光线下的研究桌面、纸张与建筑线条构成的抽象场景",
      },
      sections: [
        {
          kind: "split",
          eyebrow: "从事业到使命",
          title: "投资不只是管理资本，也是在时间中沉淀判断力。",
          body: [
            "Gold Summit Capital 源自创始人多年金融市场与财富管理经验。我们相信，财富的长期价值不只体现在数字增长，也体现在一代人与下一代之间能否形成共同理解。",
            "市场会变化，周期会更替，人也终将把事业、关系与责任交给下一代。真正值得被传承的，不只是资产本身，还有理解风险的能力、面对不确定性的纪律，以及做长期判断的思维方式。",
          ],
          quote:
            "我们希望把投资过程本身，转化为家族可以共同参与、共同讨论、共同学习的真实场域。",
        },
        {
          kind: "principles",
          eyebrow: "Our Approach",
          title: "以专业资产管理为基础，让投资过程成为可被学习的经验。",
          body:
            "一次成功投资可能来自时机，但长期复利更依赖框架、纪律和边界。Gold Summit Capital 重视研究、比较、风险控制与持续复盘，希望把每一次市场变化中的判断过程沉淀下来。",
          items: [
            {
              title: "纪律",
              text: "在不确定的市场中，保持清晰的原则和边界。",
            },
            {
              title: "复盘",
              text: "把每一次判断转化为下一次更好的决策基础。",
            },
            {
              title: "参与",
              text: "让下一代理解投资背后的逻辑，而不只是事后看到一个数字。",
            },
          ],
        },
        {
          kind: "capability",
          eyebrow: "Core Team",
          title: "金融经验、跨市场视野与长期关系网络。",
          body:
            "Gold Summit Capital 的团队结合了财富管理、跨市场配置、亚洲金融市场、量化研究、一级市场资源和中后台运营经验。我们重视专业判断，也重视与客户长期同行的关系方式。",
          items: ["财富管理", "跨市场配置", "亚洲金融市场", "研究与产品", "产业资源", "运营执行"],
          cta: { label: "了解团队", href: "/zh-CN/team/" },
        },
        {
          kind: "portal",
          eyebrow: "Client Portal",
          title: "一个逐步建设中的投资与传承内容中枢。",
          body:
            "客户专属区未来将用于承载月报、内部研究、基金信息摘要、活动记录与传承内容。它不是普通文件下载区，而是 Gold Summit Capital 与客户家庭持续沟通和内容沉淀的入口。",
          tags: ["月报", "内部研究", "基金信息摘要", "活动记录", "传承内容"],
          cta: { label: "进入客户专属区", href: "/zh-CN/client-portal/" },
        },
        {
          kind: "contact",
          title: "进一步了解 Gold Summit Capital",
          body:
            "Gold Summit Capital 目前主要通过长期关系与专业介绍服务客户。如需进一步了解，请通过您的 Gold Summit Capital 联系人或团队联系。",
        },
      ],
    },
    {
      id: "about",
      path: "/zh-CN/about/",
      seoTitle: "关于我们 | Gold Summit Capital",
      seoDescription:
        "Gold Summit Capital 的创立源于一个朴素的想法：财富可以被管理，也应当被理解、被善用、被有温度地传承。",
      hero: {
        eyebrow: "About Gold Summit Capital",
        title: "从金融事业，到传承使命。",
        body:
          "Gold Summit Capital 的创立源于一个朴素的想法：财富可以被管理，也应当被理解、被善用、被有温度地传承。",
      },
      sections: [
        {
          kind: "text",
          title: "在金融市场中积累经验，也在时间中重新理解财富。",
          body: [
            "创始人在金融市场与财富管理领域深耕多年，长期陪伴客户穿越不同市场环境。越是接近真实的家庭与人生问题，越能感受到财富管理不能只停留在资产本身。",
            "对很多家庭而言，真正重要的问题并不只是如何获得回报，还包括如何理解风险、如何使用资源、如何让下一代具备掌控财富的能力。",
            "Gold Summit Capital 因此不只是一家投资管理机构，也是一项长期建设中的事业：以基金为载体，把专业投资、真实参与和代际传承连接起来。",
          ],
        },
        {
          kind: "highlight",
          title: "Make Human Life Better",
          body:
            "MHB 代表 Make Human Life Better，也代表创始人对这项事业的期待。财富的意义，不应止于数字增长。它应当帮助家庭更从容地面对未来，也帮助下一代更成熟地理解责任、选择和长期价值。",
        },
        {
          kind: "principles",
          title: "一个以长期关系为基础的投资与传承平台。",
          body:
            "Gold Summit Capital 仍处于创业早期。我们选择从小而稳的方式开始，把每一次月度报告、研究分享和客户活动，都视为服务体系的一部分。",
          items: [
            { title: "专业投资管理", text: "以清晰框架、纪律和风险意识服务长期资产管理。" },
            { title: "内容沉淀", text: "把市场判断、研究观点和复盘过程整理成可持续沟通的材料。" },
            { title: "下一代传承", text: "帮助家庭建立关于财富、风险、责任和选择的共同语言。" },
          ],
        },
      ],
    },
    {
      id: "approach",
      path: "/zh-CN/approach/",
      seoTitle: "投资与传承理念 | Gold Summit Capital",
      seoDescription:
        "Gold Summit Capital 希望把投资从偶然的运气，逐步转化为可以被理解、被讨论、被复盘、被传承的能力。",
      hero: {
        eyebrow: "Investment & Legacy",
        title: "基金是资产载体，也是学习判断力的真实场域。",
        body:
          "我们希望把投资从偶然的运气，逐步转化为可以被理解、被讨论、被复盘、被传承的能力。",
      },
      sections: [
        {
          kind: "split",
          title: "投资过程本身，可以成为下一代理解财富的入口。",
          body: [
            "传统的财富传承，常常把重点放在资产如何分配。但资产可以被移交，判断力却无法一次性交付。下一代需要在真实情境中理解市场、风险、周期和选择。",
            "Gold Summit Capital 希望以基金为载体，让投资过程不仅服务于资产管理，也成为客户家庭共同学习的材料。月报、研究、活动和复盘，都是帮助家族建立共同语言的方式。",
          ],
          quote: "资产载体 → 真实案例 → 共同语言",
        },
        {
          kind: "principles",
          title: "长期投资需要框架，而不是情绪。",
          body:
            "市场从来不缺变化。真正困难的，是在变化中保持判断的稳定性。我们重视研究、比较、边界和复盘，希望用清晰的方法对冲情绪化决策。",
          items: [
            { title: "研究", text: "把信息转化为可讨论、可验证的判断基础。" },
            { title: "边界", text: "知道什么可以做，也知道什么不应做。" },
            { title: "纪律", text: "在波动中维持原则，而不是追逐噪音。" },
            { title: "复盘", text: "让每一次判断都成为下一次决策的材料。" },
          ],
        },
        {
          kind: "highlight",
          title: "传承不只是资产转移，而是共同语言的形成。",
          body:
            "一代人有经验、关系和直觉，下一代有新的视野、技术和时代感。两者之间需要一个可以真实对话的场域。我们希望通过投资和活动，把市场变化、资产配置、风险边界、社会趋势和人生选择连接起来。",
        },
        {
          kind: "steps",
          title: "不是只看结果，而是理解结果背后的过程。",
          body:
            "未来的客户专属区将持续沉淀月报、内部研究、活动记录和教育内容，帮助客户家庭回看每一次判断的依据，理解市场环境如何变化，也理解团队如何在不确定中保持纪律。",
          items: ["月报", "研究", "活动记录", "传承内容"],
          cta: { label: "了解客户专属区", href: "/zh-CN/client-portal/" },
        },
      ],
    },
    {
      id: "team",
      path: "/zh-CN/team/",
      seoTitle: "团队 | Gold Summit Capital",
      seoDescription:
        "Gold Summit Capital 的团队结合金融市场经验、跨区域视野、研究能力与运营执行力。",
      hero: {
        eyebrow: "Core Team",
        title: "专业判断，长期同行。",
        body:
          "Gold Summit Capital 的团队结合金融市场经验、跨区域视野、研究能力与运营执行力，服务于长期资产管理与代际传承的共同目标。",
      },
      sections: [
        {
          kind: "split",
          title: "以金融经验为基础，以传承使命为方向。",
          body: [
            "Gold Summit Capital 的创始人拥有多年金融市场与财富管理经验，长期服务高净值客户，理解资产配置、风险管理和客户关系中的复杂性。",
            "创立 Gold Summit Capital，不只是为了延续一段金融事业，更是希望把过去在市场中反复验证的经验、纪律与风险意识，整理成下一代能够理解、参与并延续的能力。",
          ],
          quote: "希望留给下一代的，不只是资源本身，而是用好资源的智慧。",
        },
        {
          kind: "matrix",
          title: "一支围绕长期价值协作的核心团队。",
          body:
            "团队能力覆盖投资判断、跨市场研究、亚洲金融经验、研究与产品能力、产业资源和运营管理。长期服务客户家庭，需要投资前台和中后台都具备稳定、严谨和可持续的能力。",
          items: [
            { title: "跨市场配置", text: "理解不同地区、资产类别和周期环境下的机会与风险。" },
            { title: "亚洲金融市场经验", text: "连接大陆、香港、台湾及更广泛亚洲市场的资源和视角。" },
            { title: "研究与产品能力", text: "将市场信息转化为可讨论、可复盘、可沉淀的投资观点。" },
            { title: "产业与一级市场资源", text: "从真实企业和产业变化中理解长期价值创造。" },
            { title: "运营与服务商协同", text: "确保基金运营、服务商对接和客户交付稳定有序。" },
            { title: "长期客户关系", text: "以持续沟通和信任建设支持家庭层面的长期同行。" },
          ],
        },
        {
          kind: "principles",
          title: "我们共同重视的事。",
          body:
            "Gold Summit Capital 的团队文化并不追求夸张表达，而是把专业、克制、透明和责任落实到每一次判断与交付中。",
          items: [
            { title: "长期主义", text: "不以短期波动定义价值，而是在周期中保持判断和纪律。" },
            { title: "利益一致", text: "重视与客户长期同行的关系，而不是一次性交易。" },
            { title: "透明沟通", text: "用客户能够理解的方式解释判断、风险和变化。" },
            { title: "克制表达", text: "不夸大承诺，不制造焦虑，不把复杂性包装成确定性。" },
            { title: "温度与责任", text: "把财富管理放回真实的人、家庭和关系之中。" },
          ],
        },
      ],
    },
    {
      id: "client-portal",
      path: "/zh-CN/client-portal/",
      seoTitle: "客户专属区 | Gold Summit Capital",
      seoDescription:
        "Gold Summit Capital 客户专属区是逐步建设中的投资与传承内容中枢，仅向受邀客户开放。",
      hero: {
        eyebrow: "Client Portal",
        title: "客户专属区",
        body:
          "一个逐步建设中的投资与传承内容中枢，仅向受邀客户开放。",
      },
      sections: [
        {
          kind: "text",
          title: "不只是资料存放，更是长期沟通的入口。",
          body: [
            "客户专属区未来将用于承载 Gold Summit Capital 与客户家庭之间的持续内容交付，包括月报、内部研究、基金信息摘要、活动记录与传承内容。",
            "我们希望它成为一个安静、清晰、可持续更新的空间，帮助客户回看重要信息，理解投资逻辑，并逐步沉淀关于财富、风险和责任的共同语言。",
          ],
        },
        {
          kind: "matrix",
          title: "未来将逐步开放的内容",
          body:
            "V1 阶段先保留清晰入口，真实权限、资料库和访问记录将在后续版本单独设计。",
          items: [
            { title: "月报", text: "记录市场环境、组合观察和团队观点。" },
            { title: "内部研究", text: "围绕宏观、行业、科技趋势和家族财富议题沉淀观点。" },
            { title: "基金信息摘要", text: "在合规边界内提供必要的基金相关信息。" },
            { title: "活动记录", text: "以文字和非客户识别素材记录活动主题、核心洞察和讨论问题。" },
            { title: "传承与教育内容", text: "帮助下一代理解投资、风险、周期、责任和长期价值。" },
          ],
        },
        {
          kind: "highlight",
          title: "仅向受邀客户开放",
          body:
            "该区域目前处于建设阶段，暂不开放在线账号登录。现阶段，如需获取相关资料，请通过您的 Gold Summit Capital 联系人或团队获取访问安排。",
          cta: { label: "联系您的 Gold Summit Capital 团队", href: "#" },
        },
      ],
    },
  ],
};
