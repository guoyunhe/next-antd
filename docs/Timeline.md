# Timeline

## Item content

Fusion Design 的 Timeline.Item content 对应 Ant Design 的 Timeline.Item children。

```jsx
// Fusion Design
import { Timeline } from '@alifd/next';

<Timeline>
  <Timeline.Item content="描述" />
</Timeline>;
```

```jsx
// Ant Design
import { Timeline } from 'antd';

<Timeline>
  <Timeline.Item>描述</Timeline.Item>
</Timeline>;
```

## Item title

Fusion Design 的 Timeline.Item title 对应 Ant Design 的 Timeline.Item label。

```jsx
// Fusion Design
import { Timeline } from '@alifd/next';

<Timeline>
  <Timeline.Item title="标题" content="描述" />
</Timeline>;
```

```jsx
// Ant Design
import { Timeline } from 'antd';

<Timeline>
  <Timeline.Item label="标题">描述</Timeline.Item>
</Timeline>;
```
