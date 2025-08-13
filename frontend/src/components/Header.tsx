import {
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { ContactArrowIcon, ChevronDownIcon } from "../icons/Icons";
import { navItems, services } from "../data/header";
import "../styles/Header.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [activeNav, setActiveNav] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveNavFromPath = useCallback((pathname: string) => {
    if (pathname === "/") return "Home";
    if (pathname === "/about") return "About";
    if (pathname === "/contact") return "Contact";
    if (pathname.startsWith("/services")) return "Services";
    return "Home";
  }, []);

  const handleNavClick = (item: string) => {
    setActiveNav(item);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    // When opening the main menu, ensure the services submenu is closed
    if (!isMenuOpen) {
      setIsServicesOpen(false);
    }
  };
  
  // Handler for the "Services" link
  const handleServicesToggle = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // On mobile (below 1000px), prevent navigation and toggle the submenu
    if (window.innerWidth < 1000) {
      e.preventDefault(); // Prevents the <Link> from navigating
      setIsServicesOpen((prev) => !prev); // Toggles the services dropdown
    } else {
      // On desktop, navigate to the services page
      setActiveNav("Services");
      setIsMenuOpen(false);
      setIsServicesOpen(false);
      navigate('/services');
    }
  };

  useEffect(() => {
    const currentNav = getActiveNavFromPath(location.pathname);
    setActiveNav(currentNav);
  }, [location.pathname, getActiveNavFromPath]);

  useEffect(() => {
    // Prevent body scroll when the mobile menu is open
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header-container">
        {/* The order of elements is changed to facilitate flexbox layout on mobile */}
        <div className="header-content">
          <nav className={`header-nav ${isMenuOpen ? "header-nav--open" : ""}`}>
            <div className="header-nav-wrapper">
              <ul ref={navRef} className="header-nav-list">
                {navItems.map((item) => {
                  if (item === "Services") {
                    return (
                      <li
                        key={item}
                        className="header-nav-item header-nav-item--dropdown-container"
                        onMouseEnter={() =>
                          window.innerWidth >= 1000 && setIsServicesOpen(true)
                        }
                        onMouseLeave={() =>
                          window.innerWidth >= 1000 && setIsServicesOpen(false)
                        }
                        data-navitem="Services"
                      >
                        <Link
                          to="/services"
                          className={`header-nav-link header-nav-link--dropdown ${
                            activeNav === "Services"
                              ? "header-nav-link--active"
                              : ""
                          }`}
                          onClick={handleServicesToggle}
                        >
                          Services
                          <ChevronDownIcon
                            className={`header-dropdown-icon ${
                              isServicesOpen
                                ? "header-dropdown-icon--open"
                                : ""
                            }`}
                          />
                        </Link>
                        <div
                          className={`header-dropdown-menu-wrapper ${
                            isServicesOpen
                              ? "header-dropdown-menu-wrapper--open"
                              : ""
                          }`}
                        >
                          <ul className="header-dropdown-menu">
                            {services.map((service) => {
                              const servicePath = "/services/" + service
                                .toLowerCase()
                                .replace(/ & /g, "-")
                                .replace(/ /g, "-");
                              return (
                                <li key={service} className="header-dropdown-item">
                                  <Link
                                    to={servicePath}
                                    className="header-dropdown-link"
                                    onClick={() => {
                                      setActiveNav("Services");
                                      setIsMenuOpen(false);
                                      setIsServicesOpen(false);
                                    }}
                                  >
                                    {service}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </li>
                    );
                  }

                  let to = "/";
                  if (item === "Home") to = "/";
                  else if (item === "About") to = "/about";
                  else if (item === "Contact") to = "/contact";

                  return (
                    <li key={item} data-navitem={item} className="header-nav-item">
                      <Link
                        to={to}
                        className={`header-nav-link ${
                          activeNav === item ? "header-nav-link--active" : ""
                        }`}
                        onClick={() => handleNavClick(item)}
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
          
          <div className="header-actions">
            <div className="header-mobile-menu-toggle">
              <button
                onClick={toggleMenu}
                className={`header-mobile-menu-button ${
                  isMenuOpen ? "open" : ""
                }`}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </button>
            </div>
          </div>
          <div className="header-contact">
            <button
              className="header-contact-button"
              onClick={() => {
                setIsMenuOpen(false);
                setActiveNav("Contact");
                navigate("/contact");
              }}
            >
              <span>CONTACT</span>
              <ContactArrowIcon className="header-contact-button-icon" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;