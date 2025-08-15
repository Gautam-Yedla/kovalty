import Logo from "../assets/kovalty-main-logo.svg";
import "../styles/GlobalLogo.css";

const GlobalLogo = () => (
  <div className="global-logo">
    <img src={Logo} alt="Kovalty Logo" className="global-logo-img" />
  </div>
);

export default GlobalLogo;
