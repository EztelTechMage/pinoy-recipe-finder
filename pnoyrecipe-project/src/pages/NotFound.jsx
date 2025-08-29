import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <div className="not-found-page">
        <div className="not-found-content">
          <h2>404 - Page Not Found</h2>
          <p>Oops! The page you're looking for doesn't exist.</p>
          <p>Maybe you mistyped the URL or the page has been moved.</p>
          <Link to="/" className="cta-button">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
// this use if the recipe is not found its just for better experience