import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../common/dashboard/navbar';
import Sidebar from '../../common/dashboard/sidebar';

const DefaultLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
