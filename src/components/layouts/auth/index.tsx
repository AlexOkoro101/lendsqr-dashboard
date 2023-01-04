import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <div className="left-side">
        <img
          className="logo"
          src={'/img/common/logo.svg'}
        />
        <div className="img-container">
          <img
            src={'/img/auth/auth.svg'}
            className="auth-img"
          />
        </div>
      </div>
      <div className="right-side">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
