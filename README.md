# 文本润色小程序

这是一个使用 AI 进行文本润色的微信小程序。用户可以输入文本，通过 AI 技术进行润色加工，使文本更加流畅自然，并获得相关的主题标签建议。

## 功能特点

1. 文本输入与润色
   - 优雅的文本输入界面
   - 实时文本润色
   - 自动纠正错别字
   - 优化语言表达
   - 智能生成相关标签

2. 历史记录管理
   - 自动保存所有润色记录
   - 清晰的时间戳显示
   - 原文与润色后文本对照
   - 按时间倒序排列

## 界面特色

1. 现代化设计
   - 清新简约的界面风格
   - 统一的绿色主题
   - 优雅的阴影效果
   - 流畅的动画过渡

2. 交互体验
   - 响应式按钮效果
   - 清晰的视觉反馈
   - 直观的结果展示
   - 友好的空状态提示

## 开发设置

1. 克隆项目后，复制配置文件模板：
   ```bash
   cp config/keys.template.js config/keys.js
   ```

2. 在 config/keys.js 中填入你的 API Key：
   ```javascript
   export const API_KEY = 'your-api-key-here'
   ```

3. 在微信开发者工具中导入项目

## 项目结构

```
miniprogram-1/
├── pages/                # 页面文件夹
│   ├── index/           # 首页（文本润色）
│   │   ├── index.js
│   │   ├── index.json
│   │   ├── index.wxml
│   │   └── index.wxss
│   └── history/         # 历史记录页
│       ├── history.js
│       ├── history.json
│       ├── history.wxml
│       └── history.wxss
├── services/            # 服务文件夹
│   └── api.js          # API 服务
├── config/             # 配置文件夹
│   ├── keys.js        # API密钥配置（不提交）
│   └── keys.template.js # API密钥模板
├── app.js              # 小程序入口文件
├── app.json            # 小程序全局配置
├── app.wxss            # 小程序全局样式
└── project.config.json # 项目配置文件
```

## 技术实现

1. 前端技术
   - 微信小程序原生开发
   - Promise 异步处理
   - 组件化开发
   - 响应式设计

2. 数据管理
   - 本地存储历史记录
   - 全局状态管理
   - 数据持久化

3. API 集成
   - Silicon Flow API 集成
   - 错误处理机制
   - 请求状态管理

## 注意事项

1. API 密钥安全
   - 不要将 keys.js 提交到代码仓库
   - 妥善保管 API 密钥

2. 开发建议
   - 建议在开发时关闭域名校验
   - 发布前需要在小程序后台配置合法域名
   - 注意请求频率限制

## 贡献指南

1. Fork 本仓库
2. 创建特性分支
3. 提交更改
4. 发起 Pull Request

## 许可证

MIT License 