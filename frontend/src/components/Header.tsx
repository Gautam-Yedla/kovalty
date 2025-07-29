import { useState, useRef, useEffect, type CSSProperties } from 'react';
import { ContactArrowIcon, ChevronDownIcon } from '../icons/Icons';
import { navItems, services } from '../data/header';
import '../styles/Header.css';
import Logo from "../assets/kovalty_logo.png"



const Header = () => {
  const [activeNav, setActiveNav] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navRef = useRef<HTMLUListElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState<CSSProperties>({});

  const handleNavClick = (item: string) => {
    setActiveNav(item);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    if (isMenuOpen) {
      setIsServicesOpen(false);
    }
  };
  
  const handleServicesToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsServicesOpen(prev => !prev);
  };

  useEffect(() => {
    const calculateUnderline = () => {
      if (navRef.current && window.innerWidth >= 1024) {
        const activeLiElement = Array.from(navRef.current.children).find(
          (child) => (child as HTMLElement).dataset.navitem === activeNav
        ) as HTMLLIElement | undefined;
        
        if (activeLiElement && navItems.includes(activeNav)) {
          setUnderlineStyle({
            left: activeLiElement.offsetLeft,
            width: activeLiElement.offsetWidth,
          });
        } else {
          setUnderlineStyle({ width: 0, left: 0 });
        }
      } else {
        setUnderlineStyle({});
      }
    };
    
    calculateUnderline();
    window.addEventListener('resize', calculateUnderline);
    return () => window.removeEventListener('resize', calculateUnderline);
  }, [activeNav]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo">
            {/* <LogoIcon className="header-logo-icon" /> */}
            {/* <span className="header-logo-text">Kovalty</span> */}
            <img src={Logo} alt="Kovalty Logo" className="header-logo-img" />

          </div>

          <nav className={`header-nav ${isMenuOpen ? 'header-nav--open' : ''}`}>
            <div className="header-nav-wrapper">
              <ul ref={navRef} className="header-nav-list">
                {navItems.map((item) => (
                  <li key={item} data-navitem={item} className="header-nav-item">
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => { e.preventDefault(); handleNavClick(item); }}
                      className={`header-nav-link ${ activeNav === item ? 'header-nav-link--active' : '' }`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
                
                <li 
                  className="header-nav-item header-nav-item--dropdown-container"
                  onMouseEnter={() => window.innerWidth >= 1024 && setIsServicesOpen(true)}
                  onMouseLeave={() => window.innerWidth >= 1024 && setIsServicesOpen(false)}
                  data-navitem="Services"
                >
                  <a href="#services" onClick={handleServicesToggle} className="header-nav-link header-nav-link--dropdown">
                    Services
                    <ChevronDownIcon className={`header-dropdown-icon ${isServicesOpen ? 'header-dropdown-icon--open' : ''}`} />
                  </a>
                  <div className={`header-dropdown-menu-wrapper ${isServicesOpen ? 'header-dropdown-menu-wrapper--open' : ''}`}>
                    <ul className="header-dropdown-menu">
                        {services.map(service => (
                            <li key={service} className="header-dropdown-item">
                                <a href={`#${service.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} 
                                   onClick={() => {
                                      setActiveNav('Services'); // This will remove underline
                                      setIsMenuOpen(false);
                                      setIsServicesOpen(false);
                                   }}
                                   className="header-dropdown-link">
                                    {service}
                                </a>
                            </li>
                        ))}
                    </ul>
                  </div>
                </li>

              </ul>
              <div className="header-underline-track"></div>
              <div
                className="header-underline"
                style={underlineStyle}
              ></div>
            </div>
          </nav>

          <div className="header-actions">
            <div className="header-contact">
              <button className="header-contact-button">
                <span>CONTACT</span>
                <ContactArrowIcon className="header-contact-button-icon" />
              </button>
            </div>
            <div className="header-mobile-menu-toggle">
              <button 
                onClick={toggleMenu} 
                className={`header-mobile-menu-button ${isMenuOpen ? 'open' : ''}`} 
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;