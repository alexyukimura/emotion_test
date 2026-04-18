## emotion-heal/web（单机前端）

这是一个**完全单机**的情绪治愈前端：呼吸引导 / 情绪倾倒 / 今日打卡，数据仅保存到本机浏览器 `localStorage`。

### 启动

```bash
cd TelegramMini/emotion-heal/web
npm i
npm run dev
```

打开 `http://localhost:5173/`。

### 说明

- 直接浏览器打开：不经过 Telegram 校验，数据仅本地。
- 在 Telegram 内打开：`index.html` 已加载官方 `telegram-web-app.js`，会 `ready()` + `expand()`，并把 `initData` 发到后端 `POST /api/verify`（开发时经 Vite 代理到本机 `server`）。
- 生产环境：设置 `VITE_API_BASE_URL` 为你的 API 根地址，并确保后端 `CORS_ORIGIN` 包含前端域名。

详见上级目录 `../README.md`（BotFather、HTTPS、`setChatMenuButton`）。

---

### 单独部署到 Cloudflare Pages（仅前端）

静态站点由 Cloudflare 托管；**API 仍在别处**（自建、`server` 部署到 Render/Fly 等）。构建时要把后端根地址写进环境变量。

#### 1. 在 Cloudflare Dashboard

1. **Workers & Pages** → **Create** → **Pages** → 连接 Git 仓库，或直接 **Upload assets**。
2. 若仓库是**整个 monorepo**，在构建设置里指定：
   - **Root directory（根目录）**：`TelegramMini/emotion-heal/web`（按你仓库实际路径改）
   - **Build command**：`npm ci && npm run build`
   - **Build output directory**：`dist`
   - **Environment variables（生产环境）**：
     - `VITE_API_BASE_URL` = 你的后端公网根地址，例如 `https://api.你的域名.com`（**不要**尾斜杠；**不要**带 `/api` 路径后缀，前端会自己请求 `/api/verify`）

3. 保存并部署。完成后你会得到 Pages 域名，例如 `https://emotion-heal.pages.dev`（或自定义域）。

#### 2. 后端 CORS

`server` 里 `CORS_ORIGIN` 要包含 Cloudflare 前端来源，例如：

`https://emotion-heal.pages.dev`

若用自定义域，把该域也加进去（多个用英文逗号分隔）。

#### 3. Telegram Mini App 菜单 URL

在 BotFather 或 `setChatMenuButton` 里，把 Web App URL 设为 **Cloudflare 上的 https 地址**（与上面 Pages 域名一致）。

#### 4. 关于 `_redirects` 与 Wrangler 报错 10021

若用 **Wrangler 部署 Workers 静态资源**（`wrangler deploy`），在 `dist` 里放常见 SPA 规则 `/* → /index.html` 可能触发校验：**Invalid _redirects… Infinite loop**（`code: 10021`）。

本项目**没有**基于浏览器路径的前端路由（Tab 全是组件内状态），用户始终打开站点根路径即可，因此**不需要** `_redirects`。

以后若接入 React Router 等深链，请改用 Cloudflare 文档里与 **Workers Assets / `html_handling`** 兼容的配置，或单独查 Workers SDK 对 `_redirects` 的现行规则，不要照搬通用 Netlify 式 `/* /index.html 200`。

