function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function attrs(attributes) {
  return Object.entries(attributes)
    .filter(([, value]) => value !== undefined && value !== null && value !== false)
    .map(([key, value]) => (value === true ? key : `${key}="${escapeHtml(value)}"`))
    .join(" ");
}

function publicPath(site, value = "") {
  if (!value) return "";
  if (/^(https?:)?\/\//.test(value) || value.startsWith("#") || value.startsWith("mailto:")) {
    return value;
  }

  const basePath = (site.basePath || "").replace(/\/$/, "");
  const path = value.startsWith("/") ? value : `/${value}`;
  return `${basePath}${path}`;
}

function paragraphs(body) {
  if (!body) return "";
  const lines = Array.isArray(body) ? body : [body];
  return lines.map((line) => `<p>${escapeHtml(line)}</p>`).join("");
}

function button(site, link, variant = "primary") {
  if (!link) return "";
  return `<a class="button button--${variant}" href="${escapeHtml(publicPath(site, link.href))}">${escapeHtml(link.label)}</a>`;
}

function renderHeader(site, activeId) {
  const links = site.nav
    .map((item) => {
      const active = item.id === activeId ? "true" : "false";
      return `<a href="${publicPath(site, item.href)}" aria-current="${active === "true" ? "page" : "false"}">${item.label}</a>`;
    })
    .join("");

  return `
    <header class="site-header">
      <a class="wordmark" href="${publicPath(site, "/zh-CN/")}" aria-label="Gold Summit Capital home">Gold Summit Capital</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation">
        <span>Menu</span>
      </button>
      <nav id="site-navigation" class="site-nav" aria-label="Primary navigation">
        ${links}
      </nav>
    </header>
  `;
}

function renderFooter(site) {
  const links = site.nav.map((item) => `<a href="${publicPath(site, item.href)}">${item.label}</a>`).join("");
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div>
          <div class="footer-wordmark">Gold Summit Capital</div>
          <p class="footer-tagline">${escapeHtml(site.tagline)}</p>
        </div>
        <nav class="footer-links" aria-label="Footer navigation">${links}</nav>
        <p class="disclaimer">${escapeHtml(site.footerDisclaimer)}</p>
      </div>
    </footer>
  `;
}

function renderHero(site, hero) {
  const actions = [button(site, hero.primary, "primary"), button(site, hero.secondary, "secondary")]
    .filter(Boolean)
    .join("");

  const visual = hero.image
    ? `<figure class="hero-visual"><img src="${escapeHtml(publicPath(site, hero.image))}" alt="${escapeHtml(hero.imageAlt)}" loading="eager" decoding="async"></figure>`
    : "";

  return `
    <section class="hero ${hero.image ? "" : "hero--plain"}">
      <div class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">${escapeHtml(hero.eyebrow)}</p>
          <h1>${escapeHtml(hero.title)}</h1>
          <p class="hero-body">${escapeHtml(hero.body)}</p>
          ${actions ? `<div class="hero-actions">${actions}</div>` : ""}
        </div>
        ${visual}
      </div>
    </section>
  `;
}

function renderSection(site, section) {
  switch (section.kind) {
    case "split":
      return `
        <section class="section section--split">
          <div class="section-grid">
            <div>
              ${section.eyebrow ? `<p class="eyebrow">${escapeHtml(section.eyebrow)}</p>` : ""}
              <h2>${escapeHtml(section.title)}</h2>
              <div class="prose">${paragraphs(section.body)}</div>
            </div>
            <blockquote>${escapeHtml(section.quote)}</blockquote>
          </div>
        </section>
      `;

    case "text":
      return `
        <section class="section">
          <div class="text-column">
            <h2>${escapeHtml(section.title)}</h2>
            <div class="prose">${paragraphs(section.body)}</div>
          </div>
        </section>
      `;

    case "highlight":
      return `
        <section class="section section--dark">
          <div class="highlight">
            <h2>${escapeHtml(section.title)}</h2>
            <div class="prose">${paragraphs(section.body)}</div>
            ${section.cta ? `<div class="section-actions">${button(site, section.cta, "light")}</div>` : ""}
          </div>
        </section>
      `;

    case "principles":
      return `
        <section class="section section--warm">
          <div class="section-heading">
            ${section.eyebrow ? `<p class="eyebrow">${escapeHtml(section.eyebrow)}</p>` : ""}
            <h2>${escapeHtml(section.title)}</h2>
            <p>${escapeHtml(section.body)}</p>
          </div>
          <div class="principle-grid">
            ${section.items
              .map(
                (item) => `
                  <article>
                    <h3>${escapeHtml(item.title)}</h3>
                    <p>${escapeHtml(item.text)}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>
      `;

    case "capability":
      return `
        <section class="section">
          <div class="section-heading">
            <p class="eyebrow">${escapeHtml(section.eyebrow)}</p>
            <h2>${escapeHtml(section.title)}</h2>
            <p>${escapeHtml(section.body)}</p>
          </div>
          <div class="keyword-row">
            ${section.items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
          </div>
          <div class="section-actions">${button(site, section.cta, "secondary")}</div>
        </section>
      `;

    case "matrix":
      return `
        <section class="section">
          <div class="section-heading">
            <h2>${escapeHtml(section.title)}</h2>
            <p>${escapeHtml(section.body)}</p>
          </div>
          <div class="matrix">
            ${section.items
              .map(
                (item) => `
                  <article>
                    <h3>${escapeHtml(item.title)}</h3>
                    <p>${escapeHtml(item.text)}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>
      `;

    case "portal":
      return `
        <section class="section section--portal">
          <div class="section-heading">
            <p class="eyebrow">${escapeHtml(section.eyebrow)}</p>
            <h2>${escapeHtml(section.title)}</h2>
            <p>${escapeHtml(section.body)}</p>
          </div>
          <div class="tag-row">
            ${section.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
          </div>
          <div class="section-actions">${button(site, section.cta, "light")}</div>
        </section>
      `;

    case "steps":
      return `
        <section class="section section--warm">
          <div class="section-heading">
            <h2>${escapeHtml(section.title)}</h2>
            <p>${escapeHtml(section.body)}</p>
          </div>
          <ol class="steps">
            ${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ol>
          <div class="section-actions">${button(site, section.cta, "secondary")}</div>
        </section>
      `;

    case "contact":
      return `
        <section class="section section--contact">
          <div class="text-column">
            <h2>${escapeHtml(section.title)}</h2>
            <p>${escapeHtml(section.body)}</p>
          </div>
        </section>
      `;

    default:
      return "";
  }
}

export function renderPage(site, page) {
  const body = page.sections.map((section) => renderSection(site, section)).join("");

  return `<!doctype html>
<html lang="${escapeHtml(site.locale)}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(page.seoTitle)}</title>
    <meta name="description" content="${escapeHtml(page.seoDescription)}">
    <meta property="og:title" content="${escapeHtml(page.seoTitle)}">
    <meta property="og:description" content="${escapeHtml(page.seoDescription)}">
    <meta property="og:type" content="website">
    <link rel="stylesheet" href="${escapeHtml(publicPath(site, "/styles/main.css"))}">
    <script src="${escapeHtml(publicPath(site, "/scripts/main.js"))}" defer></script>
  </head>
  <body ${attrs({ "data-page": page.id })}>
    <a class="skip-link" href="#main">跳到主要内容</a>
    ${renderHeader(site, page.id)}
    <main id="main">
      ${renderHero(site, page.hero)}
      ${body}
    </main>
    ${renderFooter(site)}
  </body>
</html>`;
}

export function renderNotFound(site) {
  return `<!doctype html>
<html lang="${escapeHtml(site.locale)}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>页面未找到 | Gold Summit Capital</title>
    <link rel="stylesheet" href="${escapeHtml(publicPath(site, "/styles/main.css"))}">
  </head>
  <body>
    ${renderHeader(site, "")}
    <main id="main" class="not-found">
      <section class="section">
        <div class="text-column">
          <p class="eyebrow">404</p>
          <h1>页面未找到</h1>
          <p>请返回首页，或通过您的 Gold Summit Capital 联系人获取正确链接。</p>
          ${button(site, { label: "返回首页", href: "/zh-CN/" }, "primary")}
        </div>
      </section>
    </main>
    ${renderFooter(site)}
  </body>
</html>`;
}
