# Card

## free

Fusion Design 提供了一种新的 `free` 模式，将 `Card.Header` 和 `Card.Content` 等组件拆开来自由组合。Ant Design 不支持这种用法，遇到某些情况，需要自行用 div 实现。

```jsx
// Fusion Design
import { Card } from '@alifd/next';

<Card free>
  <Card.Header title="标题" />
  <Card.Content>内容</Card.Content>
</Card>;
```

```jsx
// Ant Design
import { Card } from 'antd';

<Card title="标题">内容</Card>;
```
