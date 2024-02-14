# Tag

Fusion Design 和 Ant Design 的 Tag 默认状态下是很相似的。

```jsx
// Fusion Design
import { Tag } from '@alifd/next';

<Tag>标签</Tag>;
```

```jsx
// Ant Design
import { Tag } from 'antd';

<Tag>标签</Tag>;
```

## type="primary"

填充无边框模式，两者的接口实现不同。Fusion Design 是 `type="primary"`，Ant Design 是 `bordered={false}`。

```jsx
// Fusion Design
import { Tag } from '@alifd/next';

<Tag type="primary">标签</Tag>;
```

```jsx
// Ant Design
import { Tag } from 'antd';

<Tag bordered={false}>标签</Tag>;
```

## color (自定义颜色)

两者基本一致，自定义颜色强制采用填充无边框模式，不管是 Fusion Design 的 `type="primary"` 还是 Ant Design 的 `bordered={false}` 都是强制启用的。

```jsx
// Fusion Design
import { Tag } from '@alifd/next';

<Tag color="#66ccff">标签</Tag>;
```

```jsx
// Ant Design
import { Tag } from 'antd';

<Tag color="#66ccff">标签</Tag>;
```

## color (预设颜色)

内置颜色部分，两者的颜色名不同。Fusion Design 是 `blue`, `green`, `orange`, `red`, `turquoise`, `yellow` 六种。Ant Design 是 `magenta`, `red`, `volcano`, `orange`, `gold`, `lime`, `green`, `cyan`, `blue`, `geekblue`, `purple` 十一种，并提供了 `success`, `processing`, `warning`, `error` 四个语义化别名。

非常不建议使用这种方式，建议使用自定义颜色。

```jsx
// Fusion Design
import { Tag } from '@alifd/next';

<Tag type="primary" color="orange">
  标签
</Tag>;
```

```jsx
// Ant Design
import { Tag } from 'antd';

<Tag color="#ff9300">标签</Tag>;
```
