import { render, screen } from '@testing-library/react';
import { NextAntd } from '.';

describe('NextAntd', () => {
  describe('render', async () => {
    render(<NextAntd>foobar</NextAntd>);
    await screen.findByText('foobar');
  });
});
