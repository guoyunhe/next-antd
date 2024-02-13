# Balloon

Fusion Design 的 `Balloon` 组件对应的是 Ant Design 的 `Popover` 组件，两者的接口差异也很大。

## trigger 和 children

Fusion Design `Balloon` 的 `trigger` 是触发元素，而 `children` 是气泡内容。Ant Design `Popover` 的 `children` 是触发元素，而 `content` 是气泡内容。

```jsx
// Fusion Design
import { Balloon, Button } from '@alifd/next';

<Balloon trigger={<Button>按钮</Button>}>这是一条气泡内容</Balloon>;
```

```jsx
// Ant Design
import { Button, Popover } from 'antd';

<Popover content="这是一条气泡内容">
  <Button>按钮</Button>
</Popover>;
```
