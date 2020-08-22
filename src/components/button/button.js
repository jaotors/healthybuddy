import React from 'react';
import { Button as GrommetBtn } from 'grommet';

const Button = ({
  label,
  color = 'custom-primary',
  className,
  onClick,
  primary = true,
  type,
  icon,
}) => (
  <GrommetBtn
    type={type}
    icon={icon}
    label={label}
    color={color}
    primary={primary}
    onClick={onClick}
    className={className}
  />
);

export default Button;
