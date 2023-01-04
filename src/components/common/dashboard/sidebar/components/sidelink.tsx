import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { SideLinkProps } from '../../../../../types/models';

const SideLink: FC<SideLinkProps> = ({ name, icon, dropdown, className }) => {
  return (
    <li className={'sidebar-list-item ' + className}>
        <img src={`/img/dashboard/icons/sidebar/${icon}.svg`} />
        <NavLink
          className="sidebar-link"
          to=""
        >
          {name}
        </NavLink>
      {dropdown === true && (
        <img src="/img/dashboard/icons/caret-down.svg" />
      )}
    </li>
  );
};

export default SideLink;
