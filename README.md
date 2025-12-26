# 🍌 nano banana - AI 抽卡游戏

基于 Hono.js 的 AI 图像生成抽卡游戏，可部署到 Cloudflare Workers。

## ✨ 功能特性

- 🎯 AI 图像生成抽卡系统
- 🖼️ 支持图片上传和文字提示
- 🎨 精美的卡片翻转动画
- 📱 响应式设计，支持移动端
- ☁️ 部署到 Cloudflare Workers
- 🔧 内嵌式架构，无需外部文件依赖

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动本地开发服务器
npm run dev:local

# 访问 http://localhost:8791
```

### 部署到 Cloudflare Workers

```bash
# 部署到 Cloudflare
npm run deploy
```

## 📁 项目架构

### 内嵌式设计

项目采用内嵌式架构，所有的 HTML、CSS、JavaScript 都嵌入到 TypeScript 文件中，具有以下优势：

- ✅ **零外部依赖**: 所有资源都内嵌，无需额外的文件系统访问
- ✅ **Cloudflare Workers 兼容**: 完全符合 Workers 的执行环境
- ✅ **快速启动**: 减少文件读取，提升启动速度
- ✅ **简单部署**: 单文件打包，部署更简单

```
nano-img-hono/
├── src/
│   └── index.ts          # 主服务文件（包含所有资源）
├── public/
│   └── index.html        # 原始 HTML 文件（参考用）
├── package.json          # 项目配置
├── wrangler.toml         # Cloudflare Workers 配置
└── tsconfig.json         # TypeScript 配置
```

### 内容组织

`src/index.ts` 包含：
- 🎨 **CSS_CONTENT**: 完整的样式定义
- 📄 **HTML_TEMPLATE**: 页面结构模板
- 🔧 **JS_CONTENT**: 客户端交互逻辑
- 🌐 **Hono.js 路由**: API 代理和页面服务

## 🔧 API 端点

- `GET /` - 主页面
- `POST /api/chat` - AI 图像生成 API 代理
- `GET /health` - 健康检查
- `GET /api/info` - API 信息
- `GET /assets/styles/main.css` - CSS 资源（向后兼容）
- `GET /assets/scripts/main.js` - JS 资源（向后兼容）

## 💡 使用说明

1. 在页面中输入文字提示或上传参考图片
2. 可选择添加 API Key（如果有的话）
3. 点击"🎴 开始抽卡"按钮
4. 等待 AI 生成图像并显示卡片

## ⚙️ 配置

### API 设置

项目默认使用内置的 API 代理端点 `/api/chat`，你也可以：

1. 在页面的"高级设置"中修改 API 端点
2. 添加你的 API Key
3. 调整生成参数

### Cloudflare Workers 配置

在 `wrangler.toml` 中可以配置：
- 项目名称
- 环境变量
- 路由设置

## 🔄 开发命令

```bash
npm run dev:local      # 本地开发（使用 local mode）
npm run dev           # Cloudflare 开发环境
npm run deploy        # 部署到 Cloudflare Workers
npm run build         # 构建检查
npm run format        # 代码格式化
npm run type-check    # 类型检查
```

## 🔧 技术栈

- **框架**: Hono.js (轻量级 Web 框架)
- **运行时**: Cloudflare Workers
- **语言**: TypeScript
- **样式**: 内嵌 CSS (CSS Variables + Flexbox/Grid)
- **动画**: CSS3 Transitions & Keyframes
- **构建**: Wrangler (Cloudflare CLI)

## 📝 开发注意事项

- 所有静态资源都内嵌在 TypeScript 中，符合 Workers 环境
- CSS 使用 CSS Variables 实现主题化
- JavaScript 使用原生 API，无外部库依赖
- API 代理处理 CORS 和错误管理
- 支持文件拖拽上传和 Base64 编码

## 🎨 界面特色

- 现代化的渐变设计
- 平滑的卡片翻转动画
- 响应式布局适配移动端
- 拖拽上传交互体验
- 实时状态反馈

---

**部署成功后，享受你的 AI 抽卡游戏吧！** 🎮✨
