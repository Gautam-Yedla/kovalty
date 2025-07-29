import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Testimonials from './components/Testimonials';
import Services from './components/Services/Services';


function App() {
  return (
    <div className="app-layout">
      <Header />
      <main className="app-main">
      <Services />
      <Testimonials />
        {/* Your page content here */}
      </main>
      <Footer />
    </div>
  );
}

export default App
