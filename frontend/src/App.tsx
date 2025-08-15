import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GlobalLogo from "./components/GlobalLogo";
import ResponsiveServices from "./components/Services/ResponsiveServices";
import ServicePage from "./pages/ServicePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Error404 from "./pages/404Error";
import AboutUs from "./components/About/AboutUs";
import { useEffect } from "react";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <GlobalLogo />
      <Header />
      <div className="app-layout">
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ResponsiveServices />} />
            <Route path="/services/:serviceId" element={<ServicePage />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
