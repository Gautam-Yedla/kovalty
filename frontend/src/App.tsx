import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Testimonials from './components/Testimonials';
import ResponsiveServices from './components/Services/ResponsiveServices';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import Error404 from './pages/404Error';
import AboutUs from './components/About/AboutUs';

function Home() {
  return (
    <>
      <ResponsiveServices />
      <Testimonials />
      {/* Your page content here */}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
