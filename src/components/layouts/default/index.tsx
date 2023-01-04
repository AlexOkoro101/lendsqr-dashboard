import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../common/dashboard/navbar';
import Sidebar from '../../common/dashboard/sidebar';

const DefaultLayout = () => {
  return (
    <div className="default-layout">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="dashboard-outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
