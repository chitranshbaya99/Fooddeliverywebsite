import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'; // Optional: if you want custom styling

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="home-link">
        Go back to Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
