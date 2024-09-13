import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
}
const Button: FC<Props> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
