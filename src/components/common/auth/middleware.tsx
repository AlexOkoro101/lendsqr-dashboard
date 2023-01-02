import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/auth';

export interface MiddlewareAttributes {
  // eslint-disable-next-line no-undef
  children: JSX.Element;
}

export const Middleware: React.FC<MiddlewareAttributes> = ({ children }) => {
  const { isLoading, user }: any = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="">
        <Navigate to="/login" state={{ from: location }} replace />
      </div>
    );
  }

  return children;
};
