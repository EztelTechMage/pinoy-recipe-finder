import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useFavorites } from '../contexts/FavoritesContext';

const Header = () => {
  const { favoritesCount } = useFavorites();
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="flex-between" style={{padding: '1rem 0'}}>
          <Link to="/" className="logo">
            <h1 style={{margin: 0, color: 'var(--text-light)', fontSize: '1.8rem'}}>
              🍲 Pinoy Recipe Finder
            </h1>
          </Link>
          
          <nav>
            <ul className="flex" style={{gap: '1.5rem'}}>
              <li>
                <Link 
                  to="/" 
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/favorites" 
                  className={`nav-link ${location.pathname === '/favorites' ? 'active' : ''}`}
                >
                  Favorites 
                  {favoritesCount > 0 && (
                    <span className="favorites-badge">{favoritesCount}</span>
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;