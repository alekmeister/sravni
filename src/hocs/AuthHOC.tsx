import { isAuthedUser, useAuth } from 'hooks/use-auth';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const AuthHOC = ({ children }: { children: React.ReactElement }): React.ReactElement | null => {
  const location = useLocation();

  const user = useAuth();

  if (!isAuthedUser(user)) {
    return <Navigate to="/sravni" state={{ from: location }} />;
  }
  return children;
};
