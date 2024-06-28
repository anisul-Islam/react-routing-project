import React from 'react';
import { Outlet } from 'react-router-dom';
import SignIn from '../pages/SignIn';

const AdminRoute = () => {
  // api call
  // redux-store -> user login
  const isSignedIn = true;
  const isAdmin = true;
  return isSignedIn && isAdmin ? <Outlet /> : <SignIn />;
};

export default AdminRoute;
