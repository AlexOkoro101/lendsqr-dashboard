import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../common/dashboard/navbar';
import Sidebar from '../../common/dashboard/sidebar';

const DefaultLayout = () => {
  // sidebar state
  const [sidebarIsVisible, setSidebarIsVisible] = useState(false);

  return (
    <div className="default-layout">
      <Navbar />
      <div className="main-content">
        <Sidebar
          sidebarIsVisible={sidebarIsVisible}
        />
        <div className="dashboard-outlet">
          <Outlet />
        </div>
        <button
          className="toggle-sidebar"
          onClick={() => setSidebarIsVisible(prev => !prev)}
        >
          Toggle Sidebar
        </button>
      </div>
    </div>
  );
};

export default DefaultLayout;
