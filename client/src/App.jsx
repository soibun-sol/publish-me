import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AuthorLogin from './pages/AuthorLogin';
import ReaderLogin from './pages/ReaderLogin';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/author-login" element={<AuthorLogin />} />
        <Route path="/reader-login" element={<ReaderLogin />} />
        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
      <Hero />
      <Footer />
    </div>
  );
}