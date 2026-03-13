# Project Memory

## Product Positioning

- 项目名称：`heyue_dental`
- 目标载体：平板优先的口腔门诊展示站
- 当前形态：`Vite + React + TypeScript` 静态前端站点
- 使用方式：
  - GitHub Pages 线上访问
  - PWA 添加到平板主屏幕
  - `dist/` 可作为离线网页包分发

## Current Design Direction

- 整体风格关键词：`简洁 / 专业 / 温馨`
- 避免的状态：
  - 太挤
  - 太乱
  - 像表格
  - 一屏塞满细项
- 当前优化原则：
  - 先分组，再展示项目
  - 先给判断信息，再给细项
  - 用留白和层级替代表格式堆砌
  - 减少陌生图库图带来的廉价感或不真实感

## Information Architecture Rules

- 服务项目页不再按“单纯项目列表”展示，而是按就诊意图分组：
  - 日常护理与疼痛处理
  - 修复与笑容改善
  - 儿童与家庭照护
  - 补充诊疗目录
- 每个项目优先展示：
  - 适合谁
  - 这类重点
  - 一句话概括
- 细项不在总览页全部铺开，只展示少量重点，更多内容进入详情页

## Content Rules

- 当前版本已去除价格展示
- 不在页面上直接展示参考价格、材料价格或带金额的服务细项
- 关于我们页面不再使用不匹配品牌感的通用图库图
- “关于我们”优先使用品牌信息面板、门诊定位、故事与价值观表达

## Deploy Memory

- Pages 发布方式：`GitHub Actions`
- 自动部署工作流：`.github/workflows/deploy-pages.yml`
- 线上地址：`https://wesleylwh.github.io/heyue_dental/`
- PWA 已配置：
  - `public/manifest.webmanifest`
  - `public/sw.js`
  - `public/icons/*`

## Completed Optimizations

- 已支持 GitHub Pages 自动部署
- 已支持 PWA 安装到平板主屏幕
- 已将生产资源路径改为相对路径，便于离线打开
- 已移除价格展示与价格数据输出
- 已重构“服务项目”总览页的信息架构
- 已重构“服务详情”页的内容层级
- 已重构“关于我们”页，移除不协调图片表达

## Ongoing Update Rule

- 从现在开始，每次做页面优化或信息架构调整时，必须同步更新本文件
- 更新内容至少包括：
  - 本次改了什么
  - 为什么改
  - 当前页面风格或结构规则有没有变化
  - 是否影响部署、PWA 或内容展示策略
- 完成代码修改后，默认一起提交并 push，保持仓库状态和 Memory 同步

## Next Suggested Targets

- 首页 Hero 与首页各模块风格统一
- 案例库页结构收敛，避免继续像旧模板
- 专家页信息层级优化，避免继续偏“卡片堆叠”
