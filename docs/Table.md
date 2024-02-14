# Table

## Column cell

Fusion Design 自定义渲染的方法叫 cell，而 Ant Design 的自定义渲染的方法叫 render。虽然都是三个参数，但是参数的顺序也不一样。

```jsx static
// Fusion Design
import { Table } from '@alifd/next';

<Table>
  <Table.Column cell={(value, index, record) => record.id + record.name} />
</Table>;
```

```jsx static
// Ant Design
import { Table } from '@alifd/next';

<Table>
  <Table.Column render={(value, record, index) => record.id + record.name} />
</Table>;
```
