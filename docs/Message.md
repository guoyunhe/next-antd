# Message 静态

Fusion Design 的静态 `Message` 组件对应 Ant Design 的 `Alert` 组件。

## showIcon

Fusion Design 的 `Message` 总是展示图标。而 Ant Design 的 `Alert` 默认不展示图标，需要 `showIcon` 属性启用。

```jsx
// Fusion Design
import { Message } from '@alifd/next';

<Message type="success">这是一条消息</Message>;
```

```jsx
// Ant Design
import { Alert } from 'antd';

<Alert type="success" showIcon message="这是一条消息" />;
```

## title 和 children

Fusion Design 的 `Message` 分别用 `title` 和 `children` 表示标题和内容。而 Ant Design 则比较特殊，`message` 表示内容，`description` 表示小字。

```jsx
// Fusion Design
import { Message } from '@alifd/next';

<Message type="success" title="标题">
  这是一条消息
</Message>;
```

```jsx
// Ant Design
import { Alert } from 'antd';

<Alert type="success" showIcon message="标题" description="这是一条消息" />;
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

<Alert type="info" showIcon message="这是一条消息" />;
```

## type="help"

Ant Design 的 `Alert` 没有 `type="help"`，但是有 `type="info"`，语义和外观上相似，图标需要替换。

```jsx
// Fusion Design
import { Message } from '@alifd/next';

<Message type="help">这是一条消息</Message>;
```

```jsx
// Ant Design
import { Alert } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

<Alert type="info" showIcon icon={<QuestionCircleOutlined />} message="这是一条消息" />;
```

## type="loading"

```jsx
// Fusion Design
import { Message } from '@alifd/next';

<Message type="loading">这是一条消息</Message>;
```

Ant Design 的 `Alert` 没有 `type="loading"`，需要自己进行组装。但是这个用法其实非常少见，大部分情况下都是错误的用法。

```jsx
// Ant Design
import { Alert } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

<Alert showIcon icon={<LoadingOutlined />} message="这是一条消息" />;
```

## size

Ant Design 的 `Alert` 不支持 `size` 属性，只能通过自定义类名实现。

## shape="addon"

Ant Design 的 `Alert` 不支持 `shape="addon"` 这种无边框无填充的版本，只能通过自定义类名实现。

## shape="toast"

Ant Design 的 `Alert` 不支持 `shape="addon"` 这种类似卡片的版本。开发者可以通过自定义类名实现，也可以结合 Card 等组件组装。
