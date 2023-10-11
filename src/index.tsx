import { ReactNode } from 'react';

export interface NextAntdProps {
  children: ReactNode;
}

export function NextAntd({ children }: NextAntdProps) {
  return <div className="NextAntd">{children}</div>;
}
