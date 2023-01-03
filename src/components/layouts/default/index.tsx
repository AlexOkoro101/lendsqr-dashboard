import React from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, maxime?
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
