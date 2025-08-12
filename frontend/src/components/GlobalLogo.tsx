import Logo from '../assets/Screenshot_2024-06-23_173525-removebg-preview 1.svg';
import '../styles/GlobalLogo.css';

const GlobalLogo = () => (
  <div className="global-logo">
    <img src={Logo} alt="Kovalty Logo" className="global-logo-img" />
  </div>
);

export default GlobalLogo;
