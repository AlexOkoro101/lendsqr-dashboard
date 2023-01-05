import React, { FC } from 'react';
import { HeaderProps } from '../../../types/models';

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <h1 className="header">
      {title}
    </h1>
  );
};

export default Header;
