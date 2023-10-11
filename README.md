# next-antd

Ant Design 的 Fusion Design 兼容层，用于迁移 Fusion Design 1.x 项目到 Ant Design 5.x

## 如何使用

### 安装依赖

```
npm i -S next-antd antd
```

### 构建器替换

如果是用 Vite 构建，则添加以下配置：

```ts
import { defineConfig } from 'vite';

export default defineConfig({
  // ...
  resolve: {
    alias: {
      '@alifd/next': 'next-antd',
    },
  },
});
```

### 后续工作

next-antd 只是一个过渡工具。后续开发者应该逐渐将代码迁移到原生 antd。

## 局限性

1. Ant Design 和 Fusion Design 的主题和样式是不兼容的，如果你有用主题，或者用了 `.next-*` css 选择器，则还是需要手动迁移样式代码。

## 兼容性

- [ ] Button
- [ ] Input
- [ ] Input.TextArea
- [ ] Select
- [ ] Form
- [ ] Form.Item
