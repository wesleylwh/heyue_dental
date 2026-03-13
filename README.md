# 禾悦口腔展示站

一个基于 Vite + React 的静态展示站，支持：

- 本地开发调试
- 从 Excel 导入服务项目数据
- 打包后离线分发
- 推送到 GitHub Pages 后直接给平板打开
- 作为 PWA 添加到平板主屏幕，像应用一样启动

## 本地运行

```bash
npm install
npm run dev
```

开发地址默认是 `http://localhost:3001`，同一局域网内的平板也可以通过你电脑的 IP 访问。

## 生产构建

```bash
npm run build
```

构建结果输出到 `dist/`。

## 本地预览生产包

```bash
npm run preview
```

预览地址默认是 `http://<你的电脑IP>:4173`，适合在平板上先验收。

## 线上部署到 GitHub Pages

仓库已经补好了 GitHub Actions 工作流：[.github/workflows/deploy-pages.yml](/Users/wesley/Dev/2026/Project/heyue_dental/.github/workflows/deploy-pages.yml)。

首次启用时只需要做一次：

1. 把代码推到 `main`
2. 打开 GitHub 仓库 `Settings > Pages`
3. `Source` 选择 `GitHub Actions`
4. 之后每次 push 到 `main`，都会自动构建并发布

发布完成后，页面地址通常是：

`https://wesleylwh.github.io/heyue_dental/`

这个链接发到微信里，平板可以直接打开。

## PWA 安装到平板主屏幕

项目已经补好以下 PWA 文件：

- [public/manifest.webmanifest](/Users/wesley/Dev/2026/Project/heyue_dental/public/manifest.webmanifest)
- [public/sw.js](/Users/wesley/Dev/2026/Project/heyue_dental/public/sw.js)
- [public/icons/icon-192.png](/Users/wesley/Dev/2026/Project/heyue_dental/public/icons/icon-192.png)
- [public/icons/icon-512.png](/Users/wesley/Dev/2026/Project/heyue_dental/public/icons/icon-512.png)
- [public/icons/apple-touch-icon.png](/Users/wesley/Dev/2026/Project/heyue_dental/public/icons/apple-touch-icon.png)

安装方式：

1. 先通过 `https` 链接打开页面
2. iPad Safari 点“分享”
3. 选择“添加到主屏幕”
4. 桌面会出现“禾悦口腔”图标，点开就是独立窗口

注意：

- PWA 安装要求 `https` 或 `localhost`
- 直接把 `dist` 压缩包发到平板并双击 `index.html`，只能“打开网页”，不能“安装成桌面应用”
- 所以如果你的目标是“像 App 一样”，应该发线上链接，不该发 zip

## 离线分发

因为生产包已经改成相对资源路径，现在可以直接把 `dist/` 打包发出去：

1. 执行 `npm run build`
2. 压缩整个 `dist/` 文件夹
3. 对方解压后打开 `dist/index.html`

这种方式不需要服务器，但如果页面里有外链图片，离线时这些外链资源仍然依赖网络。
