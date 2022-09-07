import React from 'react';
import { useNavigate } from 'react-router';

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Error Page</h2>
      <button
        onClick={() => {
          navigate('/');
        }}>
        Go back to Home
      </button>
    </div>
  );
};

export default Error;
