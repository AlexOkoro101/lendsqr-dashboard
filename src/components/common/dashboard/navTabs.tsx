import React from 'react';
import { navTabsItems } from '../../../utils';

const NavTabs = () => {
  return (
    <ul className="nav-tabs">
      {navTabsItems.map(item => {
        if (item.id === 1) {
          return <li className="active" key={item.id}>{item.name}</li>;
        }
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
};

export default NavTabs;
