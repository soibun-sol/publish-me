export default function AuthorLogin() {
    return (
      <div className="author-login-page">
        <h1>Author Login</h1>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }