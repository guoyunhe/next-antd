# Timeline

## Item content, title, time

Fusion Design 的 Timeline.Item 支持 content title time 三个字段来传入信息。Ant Design 的 Timeline.Item 则只支持 label （时间线左边）和 children（时间线右边）。在实际使用中，最简单的替换方式是直接使用 children 并自己组织布局样式。

```jsx
// Fusion Design
import { Timeline } from '@alifd/next';

<Timeline>
  <Timeline.Item title="标题" content="描述" time="2024-02-18" />
</Timeline>;
```

```jsx
// Ant Design
import { Timeline } from 'antd';

<Timeline>
  <Timeline.Item>
    <div className="my-title">标题</div>
    <div className="my-content">描述</div>
    <div className="my-time">2024-02-18</div>
  </Timeline.Item>
</Timeline>;
```

## Item state

Fusion Design 的 Timeline.Item 用 state 属性来控制节点的颜色。对应 Ant Design 的 Timeline.Item color。

```jsx
// Fusion Design
import { Timeline } from '@alifd/next';

<Timeline>
  <Timeline.Item content="描述" state="process" />
  <Timeline.Item content="描述" state="success" />
  <Timeline.Item content="描述" state="done" />
</Timeline>;
```

```jsx
// Ant Design
import { Timeline } from 'antd';

<Timeline>
  <Timeline.Item color="blue">描述</Timeline.Item>
  <Timeline.Item color="green">描述</Timeline.Item>
  <Timeline.Item color="gray">描述</Timeline.Item>
</Timeline>;
```
