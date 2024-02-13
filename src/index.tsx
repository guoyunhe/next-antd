import cn from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import './index.css';

export interface NextAntdProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function NextAntd({ children, className, style }: NextAntdProps) {
  return <NextAntd className={cn('next-antd', className)} style={style}>{children}</NextAntd>;
}
