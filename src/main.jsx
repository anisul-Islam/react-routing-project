import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

import Header from './layout/Header.jsx';
import SignIn from './pages/SignIn.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import UserProfile from './components/user/UserProfile.jsx';
import UserOrder from './components/user/UserOrder.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';
import AdminRoute from './routes/AdminRoute.jsx';
import AdminProfile from './components/admin/AdminProfile.jsx';
import AdminProducts from './components/admin/AdminProducts.jsx';
import AdminCategories from './components/admin/AdminCategories.jsx';
import AdminManageUsers from './components/admin/AdminManageUsers.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Products />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },

      {
        path: '/products/:id',
        element: <ProductDetails />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/signout',
        element: <SignIn />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/dashboard/user',
        element: <ProtectedRoute />,
        children: [
          {
            path: 'profile',
            element: <UserProfile />,
          },
          {
            path: 'orders',
            element: <UserOrder />,
          },
        ],
      },
      {
        path: '/dashboard/admin',
        element: <AdminRoute />,
        children: [
          {
            path: 'profile',
            element: <AdminProfile />,
          },
          {
            path: 'products',
            element: <AdminProducts />,
          },
          {
            path: 'categories',
            element: <AdminCategories />,
          },
          {
            path: 'users',
            element: <AdminManageUsers />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// dashboard/user/profile => UserProfile
// dashboard/user/orders => UserOrder

// dashboard/admin/profile => AdminProfile
// dashboard/admin/products => AdminProducts
// dashboard/admin/categories => AdminCategories
// dashboard/admin/users => AdminManageUsers
