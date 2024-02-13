# Message 静态

Fusion Design 的静态 `Message` 组件对应 Ant Design 的 `Alert` 组件。

## 图标

Fusion Design 的 `Message` 总是展示图标。而 Ant Design 的 `Alert` 默认不展示图标，需要 `showIcon` 属性启用。

```jsx
// Fusion Design
import { Message } from '@alifd/next';

<Message type="success">这是一条消息</Message>;
```

```jsx
// Ant Design
import { Alert } from 'antd';

<Alert type="success" showIcon>
  这是一条消息
</Alert>;
```

## type="notice"

Ant Design 的 `Alert` 没有 `type="notice"`，但是有 `type="info"`，语义和外观上相似。

```jsx
// Fusion Design
import { Message } from '@alifd/next';

<Message type="notice">这是一条消息</Message>;
```

```jsx
// Ant Design
import { Alert } from 'antd';

<Alert type="info">这是一条消息</Alert>;
```

## type="help"

Ant Design 的 `Alert` 没有 `type="help"`，但是有 `type="info"`，语义和外观上相似，图标需要替换。

```jsx
// Fusion Design
import { Message } from '@alifd/next';

<Message type="notice">这是一条消息</Message>;
```

```jsx
// Ant Design
import { Alert } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

<Alert type="info" icon={<QuestionCircleOutlined />}>
  这是一条消息
</Alert>;
```
