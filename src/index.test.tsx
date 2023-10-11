import { render, screen } from '@testing-library/react';
import { NextAntd } from '.';

describe('<NextAntd/>', () => {
  it('render', async () => {
    render(<NextAntd>Hello</NextAntd>);

    const elem = await screen.findByText('Hello');

    expect(elem.className).toBe('NextAntd');
  });
});
