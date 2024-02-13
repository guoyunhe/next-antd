import { render, screen } from '@testing-library/react';

test('render', async () => {
  render(<div>foobar</div>);
  await screen.findByText('foobar');
});
