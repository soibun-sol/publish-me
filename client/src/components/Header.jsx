export default function Header() {
    return (
      <header className="header">
        <div className="logo">BookCraft</div>
        <nav>
          <a href="#features">Features</a>
          <a href="#publish">Publish</a>
          <button className="login-btn">Author Login</button>
        </nav>
      </header>
    );
  }