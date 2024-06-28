import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SignIn from '../pages/SignIn';

const ProtectedRoute = () => {
  const location = useLocation();
  // api call
  // redux-store -> user login
  const userData =
    localStorage.getItem('userData') &&
    JSON.parse(localStorage.getItem('userData'));
  console.log(userData);

  return userData.isSignedIn ? <Outlet /> : <SignIn />;
};

export default ProtectedRoute;
