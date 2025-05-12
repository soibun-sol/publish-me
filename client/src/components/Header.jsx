import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Header.css';

export default function Header() {
  const [showCategories, setShowCategories] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const handleAuthorLogin = () => {
    navigate('/author-login');
    setShowLogin(false);
  };

  const handleReaderLogin = () => {
    navigate('/reader-login');
    setShowLogin(false);
  };

  return (
    <header className="header">
      <div className="logo">BookCraft</div>
      <nav>
        {/* Features Dropdown */}
        <div 
          className="features-dropdown"
          onMouseEnter={() => setShowFeatures(true)}
          onMouseLeave={() => setShowFeatures(false)}
        >
          <button className="nav-button">Features</button>
          {showFeatures && (
            <div className="features-menu">
              <div className="features-column">
                <h4>For Readers</h4>
                <a href="/recommendations">📚 Recommendations</a>
                <a href="/offline-reading">💾 Offline Reading</a>
                <a href="/reading-lists">❤️ Favorites & Lists</a>
              </div>
              <div className="features-column">
                <h4>For Authors</h4>
                <a href="/publish">🚀 Publish New Book</a>
                <a href="/dashboard">📊 Author Dashboard</a>
                <a href="/drafts">✏️ Draft Manager</a>
              </div>
            </div>
          )}
        </div>

        {/* Categories Dropdown */}
        <div 
          className="categories-dropdown"
          onMouseEnter={() => setShowCategories(true)}
          onMouseLeave={() => setShowCategories(false)}
        >
          <button className="categories-button">Categories</button>
          {showCategories && (
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/books">Books</a>
              <a className="dropdown-item" href="/short-stories">Short Stories</a>
              <a className="dropdown-item" href="/comics">Comics</a>
              <a className="dropdown-item" href="/mangas">Mangas</a>
              <a className="dropdown-item" href="/manhwas">Manhwas</a>
            </div>
          )}
        </div>

        {/* Login Dropdown */}
        <div 
          className="login-dropdown"
          onMouseEnter={() => setShowLogin(true)}
          onMouseLeave={() => setShowLogin(false)}
        >
          <button className="login-btn">Login</button>
          {showLogin && (
            <div className="login-dropdown-menu">
              <button 
                className="login-dropdown-item" 
                onClick={handleAuthorLogin}
              >
                Author Login
              </button>
              <button 
                className="login-dropdown-item" 
                onClick={handleReaderLogin}
              >
                Reader Login
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}