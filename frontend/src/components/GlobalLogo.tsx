import Logo from "../assets/kovalty-main-logo.svg";
import "../styles/GlobalLogo.css";
import Image from "next/image";

const GlobalLogo = () => (
  <div className="global-logo">
    <Image 
      src={Logo} 
      alt="Kovalty Logo" 
      className="global-logo-img"
      width={200}
      height={50}
      priority
    />
  </div>
);

export default GlobalLogo;
