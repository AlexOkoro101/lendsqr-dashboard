import React, { FC, PropsWithChildren } from 'react';

const Card: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

export default Card;
