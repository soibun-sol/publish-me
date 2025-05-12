export default function ReaderLogin() {
    return (
      <div className="reader-login-page">
        <h1>Reader Login</h1>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }