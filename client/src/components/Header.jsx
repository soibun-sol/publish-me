import React, { useState } from 'react';
import '../assets/css/Header.css';

export default function Header() {
  const [showCategories, setShowCategories] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <header className="header">
      <div className="logo">BookCraft</div>
      <nav>
        {/* Features Dropdown - Positioned under button */}
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

        {/* Categories Dropdown - unchanged */}
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

        {/* Login Dropdown - unchanged */}
        <div 
          className="login-dropdown"
          onMouseEnter={() => setShowLogin(true)}
          onMouseLeave={() => setShowLogin(false)}
        >
          <button className="login-btn">Login</button>
          {showLogin && (
            <div className="login-dropdown-menu">
              <a className="login-dropdown-item" href="/author-login">Author Login</a>
              <a className="login-dropdown-item" href="/reader-login">Reader Login</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}