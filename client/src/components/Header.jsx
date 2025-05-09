import React, { useState } from 'react';
import '../assets/Header.css'; // We'll create this CSS file next

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    { name: 'Books', link: '/books' },
    { name: 'Short Stories', link: '/short-stories' },
    { name: 'Comics', link: '/comics' },
    { name: 'Mangas', link: '/mangas' },
    { name: 'Manhwas', link: '/manhwas' }
  ];

  return (
    <header className="header">
      <div className="logo">BookCraft</div>
      <nav>
        <div 
          className="categories-dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="categories-button">
            Categories
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              {categories.map((category) => (
                <a 
                  key={category.name} 
                  href={category.link}
                  className="dropdown-item"
                >
                  {category.name}
                </a>
              ))}
            </div>
          )}
        </div>
        <a href="#features">Features</a>
        <a href="#publish">Publish</a>
        <button className="login-btn">Author Login</button>
      </nav>
    </header>
  );
}