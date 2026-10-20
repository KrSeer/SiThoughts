# SiThoughts

日常记录与思考，用 [Astro](https://astro.build) 构建，通过 GitHub Pages 发布。

线上地址：<https://krseer.github.io/SiThoughts/>

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321/SiThoughts/
npm run build    # 产物在 dist/
```

## 页面

| 路径 | 说明 |
|---|---|
| `/` | 首页 |
| `/hello/` | 构建流程演示页 |
| `/chat/` | DeepSeek BYOK 对话 demo（纯前端） |

## `/chat/` 说明

浏览器直连 `https://api.deepseek.com/chat/completions`，API key 只保存在用户自己的浏览器里：

- 默认存 `sessionStorage`（关标签页即失效）；勾选“记住 key”才写 `localStorage`
- 页面在构建时注入 CSP `<meta>`，`connect-src` 只允许 `api.deepseek.com`，`script-src 'self'`
- 不引入任何第三方脚本（否则同源脚本能读到 key）
- key 不会出现在 URL、页面源码或本站日志中

**风险提示**：key 在前端意味着同源 JS（包括浏览器扩展、XSS）都能读到。请使用单独的低额度 key，
不要在公共电脑上勾选“记住 key”。本站没有服务器，也不对 key 的泄露承担任何责任。
