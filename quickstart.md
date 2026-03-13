# 快速开始（含离线发布）

## 环境准备
- Node.js ≥ 18（推荐 20+）
- 包管理器：npm（已内置）

## 安装依赖

```bash
npm i
```

## 本地开发

```bash
npm run dev
```

浏览器打开开发地址（默认）：`http://localhost:3001`

## 从 Excel 导入“服务项目”数据

1) 将表格放到本地目录：`storage/xls/诊疗项目202603131541.xls`（已忽略版本控制）  
2) 运行导入脚本，生成页面使用的数据文件：

```bash
npm run data:import
```

- 成功后会生成：`public/services.json`，页面会自动从该文件读取数据并覆盖内置示例数据
- 若导入结果显示“0 类”，请确认以下事项：
  - 表格的第一行应为表头（建议列名：项目｜子项目｜价格区间｜描述｜类别）
  - 子项目支持用中文或英文分隔符分隔：`、`/`，`/`,`/`/`/`；`
  - 如需自定义表头映射，请编辑脚本 `scripts/xls_to_json.ts` 中的 `headerAliases`（或根据注释扩展模糊匹配规则）

## 构建生产包

```bash
npm run build
```

构建产物在 `dist/` 目录。

### 本地预览（平板验收推荐）

```bash
npm run preview
```

访问 `http://<你的电脑IP>:4173`，可直接在同一 Wi-Fi 下用平板打开，验证构建结果是否正确。

## GitHub Pages 发布（推荐）

仓库已增加自动部署工作流：[.github/workflows/deploy-pages.yml](/Users/wesley/Dev/2026/Project/heyue_dental/.github/workflows/deploy-pages.yml)

第一次配置：

1. 提交并推送到 `main`
2. 在 GitHub 仓库打开 `Settings > Pages`
3. `Source` 选择 `GitHub Actions`

之后每次 push 到 `main` 都会自动发布。

默认访问地址：

`https://wesleylwh.github.io/heyue_dental/`

## 作为 PWA 安装到平板

前提：必须通过 `https` 链接访问，不能是本地文件。

iPad 安装步骤：

1) 用 Safari 打开：`https://wesleylwh.github.io/heyue_dental/`  
2) 点击分享按钮  
3) 选择“添加到主屏幕”  
4) 安装后会以独立窗口启动，体验接近应用  

说明：
- 已配置 `manifest`、`service worker` 和主屏幕图标
- 首次打开后，核心静态资源会缓存，弱网下也更稳
- 如果你只是把 `dist/index.html` 发给平板，本质上是“本地网页”，不是可安装 PWA

## 离线发布（可直接发送给他人）

1) 执行构建：`npm run build`  
2) 将 `dist/` 整个文件夹打包（zip）发送给对方  
3) 对方解压后直接双击 `dist/index.html` 即可打开（无需联网）  

说明：
- 现在生产资源也使用相对路径，因此 `index.html` 双击打开不会再因为 `/assets/...` 路径失效
- 页面会尝试从相对路径加载 `services.json`，因此无需额外服务器
- 如需携带二维码或图片等资源，也会自动打包在 `dist/assets/` 中

## 常见问题

- “服务项目”未显示或数据不完整  
  - 先运行 `npm run data:import` 重新生成 `public/services.json`  
  - 检查表头命名是否规范（项目/子项目/价格/描述/类别）；或在 `scripts/xls_to_json.ts` 中调整匹配规则  
  - 如果数据包含合并单元格，建议先在 Excel 中取消合并或导出为 CSV 再导入
