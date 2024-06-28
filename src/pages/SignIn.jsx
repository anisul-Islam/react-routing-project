import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // email, password
    // https://ecommerce/signin
    if (email === 'anisul@gmail.com' && password === '123456') {
      const user = {
        name: 'Anisul Islam',
        email: 'anisul@gmail.com',
        city: 'Sylhet',
        country: 'Bangladesh',
        admin: false,
      };
      localStorage.setItem(
        'userData',
        JSON.stringify({ user, isSignedIn: true })
      );
      const path = user.admin
        ? '/dashboard/admin/profile'
        : '/dashboard/user/profile';
      navigate(path, { state: user });
    } else {
      toast.error('Email and password do not match');
      // navigate('/signin');
    }
  };

  return (
    <div className="signin-container">
      <h2>User Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
