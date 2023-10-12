import { ButtonProps } from '@alifd/next/types/button';
import { Button as Button_, ButtonProps as ButtonProps_ } from 'antd';

export function Button({
  className,
  type,
  text,
  ghost,
  size,
  warning,
  ...rest
}: ButtonProps) {
  const props: ButtonProps_ = { ...rest };
  props.size = size === 'medium' ? 'middle' : size;
  props.className = className || '';
  props.ghost = !!ghost;
  props.danger = !!warning;

  if (text) {
    if (type === 'primary') {
      props.type = 'link';
    } else {
      props.type = 'text';
    }
  } else {
    if (type === 'primary') {
      props.type = 'primary';
    } else if (type === 'secondary') {
      props.type = 'default';
    }
  }
  return <Button_ {...props} />;
}
