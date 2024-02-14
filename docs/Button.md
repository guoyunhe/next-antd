# Button

Fusion Design 和 Ant Design 的 `Button` 接口是非常类似的，大部分时候可以直接替换。这里列举一些差异点。

## type="secondary"

Ant Design 在设计的时候是没有提供 `secondary` 这个样式的，官方明确表示不会考虑这个特性。如果需要的话，只能自己提供一个类名并补全样式。

```jsx
// Fusion Design
import { Button } from '@alifd/next';

<Button type="secondary">按钮</Button>;
```

```jsx
// Ant Design
import { Button } from 'antd';

<Button className="ant-btn-secondary">按钮</Button>;
```

```css
/* Ant Design 自定义样式 */
.ant-btn.ant-btn-secondary {
  color: #1677ff;
  border-color: #1677ff;
}
```

## component={Link}

如果需要 React Router 的 `Link` 与 `Button` 结合，Fusion Design 是支持 `component={Link}` 这种写法的，但是 Ant Design 不支持，只能通过在 Button 外面包裹一层 `Link` 组件。

```jsx
// Fusion Design
import { Button } from '@alifd/next';
import { Link } from 'react-router-dom';

<Button component={Link} to="/">
  按钮
</Button>;
```

```jsx
// Ant Design
import { Button } from 'antd';
import { Link } from 'react-router-dom';

<Link to="/">
  <Button>按钮</Button>
</Link>;
```

## text

Fusion Design 的 `<Button text>` 是无边距的文字按钮（文本色或链接色）。Ant Design 的 `Button` 没有 `text` 属性。而 `<Button type="link">` 或 `<Button type="text">` 是有边距的，视觉效果上并不等价。建议用 `<Typography.Link>` 替代。

```jsx
// Fusion Design
import { Button } from '@alifd/next';

<Button text type="primary">
  操作
</Button>;
```

```jsx
// Ant Design
import { Typography } from 'antd';

<Typography.Link>操作</Typography.Link>;
```
