import React from 'react';
import { dashboardRoutes } from '../../../../routes';
import SideLink from './components/sidelink';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="main-routes">
        {dashboardRoutes.mainRoutes.map((route, index) => (
          <SideLink
            key={index}
            name={route.name}
            icon={route.icon}
            dropdown={route.dropdown}
            className={`${index === 0 && 'added-opacity'}`}
          />
        ))}
      </div>

      <div className="secondary-routes">
        {dashboardRoutes.secondaryRoutes.map((item, index) => (
          <div className="secondary-item" key={index}>
            <span className="category">{item.category}</span>
            {item.routes.map((route, idx) => (
              <SideLink
                key={idx}
                name={route.name}
                icon={route.icon}
                dropdown={route.dropdown}
                className={`${route.name === 'Users' && 'active'} added-margin`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="bottom-routes">
        <SideLink
          name="Logout"
          icon="sign-out"
          dropdown={false}
        />
        <span>v1.2.0</span>
      </div>
    </div>
  );
};

export default Sidebar;
