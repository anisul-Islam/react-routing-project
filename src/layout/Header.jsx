import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const [isSiginIn, setIsSiginIn] = useState(false);
  useEffect(() => {
    const userData =
      localStorage.getItem('userData') &&
      JSON.parse(localStorage.getItem('userData'));

    setIsSiginIn(userData.isSignedIn);
  }, []);

  const handleSignOut = () => {
    setIsSiginIn(false);
    localStorage.setItem('isSignIn', JSON.stringify(true));
  };
  return (
    <>
      <header className="navbar">
        <div className="navbar__brand">
          <Link to="/">MyApp</Link>
        </div>
        <nav className="navbar__links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            {isSiginIn && (
              <>
                <li>
                  <Link to="/signout" onClick={handleSignOut}>
                    Signout
                  </Link>
                </li>
              </>
            )}
            {!isSiginIn && (
              <>
                <li>
                  <Link to="/signin">Signin</Link>
                </li>
              </>
            )}

            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <ToastContainer />
      <Outlet />
    </>
  );
};

export default Header;
