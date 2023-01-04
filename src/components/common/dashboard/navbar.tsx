import React from 'react';
import { NavLink } from 'react-router-dom';
import { SearchInput } from '../input';

export const MobileNav = () => {
  return (
    <div className="navbar-mobile">
      <div className="left-side">
        <img
          className="logo"
          src="/img/common/logo.svg"
          alt="Lendsqr logo"
        />
      </div>
      <div className="right-side">
        <img
          src="/img/dashboard/icons/navbar/hamburger.svg"
          width={40}
        />
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="left-side">
          <img
            className="logo"
            src="/img/common/logo.svg"
            alt="Lendsqr logo"
          />
          <SearchInput
            placeholder="Search for anything"
            name="search"
            id="search"
            type="text"
            onChange={() => {}}
          />
        </div>
        <div className="right-side">
          <NavLink
            className="link"
            to={'/'}
          >
            Docs
          </NavLink>
          <img
            src="/img/dashboard/icons/navbar/bell.svg"
            alt="bell icon"
            className="notification"
          />
          <div className="user-info">
            <div className="image-container">
              <img
                className="user-image"
                src="/img/dashboard/user.png"
                alt="user image"
              />
            </div>
            <span>Adedeji</span>
            <img
              src="/img/dashboard/icons/caret-down-2.svg"
              alt="dropdown icon"
              className="dropdown-icon"
            />
          </div>
        </div>
      </div>
      <MobileNav />
    </>

  );
};

export default Navbar;
