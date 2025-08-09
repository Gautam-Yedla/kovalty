// // import { useState } from 'react';
// import '../styles/Footer.css';
// import { FooterLogoIcon, ScrollToTopIcon } from '../icons/Icons';

// const Footer = () => {
//   // const [email, setEmail] = useState('');
//   // const [isSubscribed, setIsSubscribed] = useState(false);
//   // const [isLoading, setIsLoading] = useState(false);

//   // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault();
//   //   setIsLoading(true);

//   //   // Simulate API call
//   //   setTimeout(() => {
//   //     setIsSubscribed(true);
//   //     setIsLoading(false);
//   //     setEmail('');
//   //   }, 1000);
//   // };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <footer className="footer">
//       {/* Top Block */}
//       <div className="footer-container">
//         <div className="footer-grid">
//           {/* Newsletter Block */}
//           {/* <div className="footer-newsletter-block">
//             <h3 className="footer-heading">Get Our Newsletters</h3>
//             {!isSubscribed ? (
//               <form onSubmit={handleSubmit}>
//                 <div className="footer-form-wrapper">
//                   <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
//                   <input
//                     id="newsletter-email"
//                     type="email"
//                     required
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Email Address"
//                     className="footer-input"
//                     disabled={isLoading}
//                   />
//                   <button 
//                     type="submit" 
//                     className="footer-button"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? '...' : 'Subscribe'}
//                   </button>
//                 </div>
//               </form>
//             ) : (
//               <div className="success-message">
//                 <p>✓ Thank you for subscribing!</p>
//               </div>
//             )}
//           </div> */}

//           {/* Quick Link */}
//           <div>
//             <h3 className="footer-heading">Quick Link</h3>
//             <ul className="footer-list">
//               <li className="footer-list-item">
//                 <a href="#features" className="footer-link">Features</a>
//               </li>
//               <li className="footer-list-item">
//                 <a href="#pricing" className="footer-link">Pricing Plan</a>
//               </li>
//               <li className="footer-list-item">
//                 <a href="#contact" className="footer-link">Contact</a>
//               </li>
//               <li className="footer-list-item">
//                 <a href="#404" className="footer-link">404</a>
//               </li>
//             </ul>
//           </div>

//           {/* Resources */}
//           <div>
//             <h3 className="footer-heading">Resources</h3>
//             <ul className="footer-list">
//               <li className="footer-list-item">
//                 <a href="#about" className="footer-link">About Us</a>
//               </li>
//               <li className="footer-list-item">
//                 <a href="#changelog" className="footer-link">Changelog</a>
//               </li>
//               <li className="footer-list-item">
//                 <a href="#blog" className="footer-link">Blog</a>
//               </li>
//               <li className="footer-list-item">
//                 <a href="#terms" className="footer-link">Terms & Condition</a>
//               </li>
//             </ul>
//           </div>

//           {/* Get In Touch */}
//           <div>
//             <h3 className="footer-heading">Get In Touch</h3>
//             <address className="footer-contact">
//               <div className="footer-list-item">
//                 <a href="mailto:hello@pentaclay.com" className="footer-link">
//                   hello@kovalty.com
//                 </a>
//               </div>
//               <div className="footer-list-item">
//                 <a href="https://maps.google.com/?q=55+main+Street,+2nd+blockMelbourne,+Australia" 
//                    target="_blank" 
//                    rel="noopener noreferrer" 
//                    className="footer-link">
//                   55 main Street, 2nd<br/>
//                   blockMelbourne, Australia
//                 </a>
//               </div>
//               <div className="footer-list-item">
//                 <a href="tel:+00012345688" className="footer-link">
//                   +000 (123) 456 88
//                 </a>
//               </div>
//             </address>
//           </div>
//         </div>
//       </div>

//       {/* Divider and Up Arrow */}
//       <div className="footer-divider-container">
//         <div className="footer-divider" />
//         <button 
//           className="footer-up-arrow"
//           onClick={scrollToTop}
//           aria-label="Scroll to top"
//         >
//           <ScrollToTopIcon />
//         </button>
//       </div>

//       {/* Bottom Block */}
//       <div className="footer-bottom-block">
//         <div className="footer-logo-container">
//           <button 
//             className="footer-logo-link"
//             onClick={scrollToTop}
//             aria-label="Go to top"
//           >
//             <FooterLogoIcon className="footer-logo" />
//           </button>
//           <span className="footer-logo-text">Kovalty</span>
//         </div>
//         <div className="footer-copyright">
//           <span className="footer-copyright-text">Copyright</span>
//           <span className="footer-copyright-year">@2025</span>
//           <span className="footer-copyright-company">Kovalty All Rights Reserved</span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;









import { useState } from 'react';
import '../styles/Footer.css';
import { ScrollToTopIcon } from '../icons/Icons';
// import { SocialLinkIcon } from '../icons/Icons';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubscribed(true);
            setIsLoading(false);
            setEmail('');
        }, 1000);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <nav className="footer-nav">
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <a href="/" className="footer-nav-link">Home</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="/project" className="footer-nav-link">Projects</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="/about" className="footer-nav-link">About</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="/services" className="footer-nav-link">Services</a>
                        </li>
                        <li className="footer-nav-item">
                            <a href="/contact" className="footer-nav-link">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="footer-content">
                    <div className="footer-contact-info">
                        <p className="footer-contact-text">Drop us a Line at :</p>
                        <a href="mailto:kovalty@gmail.com" className="footer-link">
                            kovalty@gmail.com
                        </a>
                    </div>
                    <div className="footer-contact-info">
                        <p className="footer-contact-text">Phone :</p>
                        <a href="tel:+919826000000" className="footer-link">
                            +91 9826000000
                        </a>
                    </div>
                    <div className="footer-contact-info">
                        <p className="footer-contact-text">Address :</p>
                        <a href="https://maps.app.goo.gl/HDJY1Y9UG9s8hFbU8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link">
                            55 main Street, 2nd<br />
                            Hyderabad, India
                        </a>
                    </div>

                    <div className="footer-social-media">
                        <p className="footer-social-text">Social Media</p>
                        <div className="footer-social-icons">
                            {/* <a
                                href="https://twitter.com/vibemarketer"
                                aria-label="Twitter"
                                className="social-icon-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg width="24" height="24" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                                    <path d="M22.46 5.924c-.793.352-1.646.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.08A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.014-4.49 4.495 0 .352.04.695.116 1.022C7.728 9.36 4.1 7.57 1.67 4.95a4.49 4.49 0 0 0-.607 2.262c0 1.56.794 2.936 2.003 3.744a4.47 4.47 0 0 1-2.034-.563v.057c0 2.18 1.55 4.002 3.607 4.418a4.51 4.51 0 0 1-2.027.077c.572 1.785 2.23 3.084 4.195 3.12A8.99 8.99 0 0 1 2 19.54a12.7 12.7 0 0 0 6.92 2.03c8.303 0 12.85-6.876 12.85-12.844 0-.196-.004-.392-.013-.586A9.18 9.18 0 0 0 24 4.59a8.98 8.98 0 0 1-2.54.697z"/>
                                </svg>
                            </a> */}
                            <a
                                href="https://linkedin.com/"
                                aria-label="LinkedIn"
                                className="social-icon-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg width="24" height="24" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v5.56z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-divider-container">
                <div className="footer-divider" />
                <button
                    className="footer-up-arrow"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                >
                    <ScrollToTopIcon />
                </button>
            </div>

            <div className="footer-bottom-info">
                <span className="footer-copyright">© 2025 Kovalty Technologies LLP</span>
                <div className="footer-legal-links">
                    <a href="#" className="footer-legal-link">Privacy Policy</a>
                    <a href="#" className="footer-legal-link">Terms of Usage</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;