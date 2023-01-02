import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/auth';

export interface MiddlewareAttributes {
  // eslint-disable-next-line no-undef
  children: JSX.Element;
}

export const Middleware: React.FC<MiddlewareAttributes> = ({ children }) => {
  const { isLoading, isLoggedIn }: any = useAuth();
  const location = useLocation();
  const Spinner = require('react-spinkit');

  if (isLoading) {
    return (
      <div className="">
        <Spinner
          name="double-bounce"
          color="purple.500"
        />
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="">
        <Navigate to="/login" state={{ from: location }} replace />
      </div>
    );
  }

  return children;
};
