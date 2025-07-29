// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import ThemeToggle from '../ThemeToggle/ThemeToggle';

// const HeaderSection = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { label: 'Home', href: '#home' },
//     { label: 'About', href: '#about' },
//     { label: 'Services', href: '#services' },
//     { label: 'Portfolio', href: '#portfolio' },
//     { label: 'Contact', href: '#contact' },
//   ];

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <a href="#" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
//               Brand
//             </a>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors relative group"
//               >
//                 {item.label}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             ))}
//           </nav>

//           {/* Right side items */}
//           <div className="flex items-center space-x-4">
//             <ThemeToggle />

//             {/* CTA Button */}
//             <button className="hidden md:inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
//               Get Started
//             </button>

//             {/* Mobile menu button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
//           <div className="px-4 py-3 space-y-3">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.label}
//               </a>
//             ))}
//             <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
//               <button className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default HeaderSection;





import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, Mail } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Services', href: '#services', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export const HeaderSection: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`
        sticky top-0 z-50 w-full
        transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'bg-white/80 dark:bg-kovalty-black/80 backdrop-blur-md shadow-lg border-b border-kovalty-gray/20 dark:border-kovalty-pink/20' 
          : 'bg-white/60 dark:bg-kovalty-black/60 backdrop-blur-sm'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 animate-fade-in">
            <a 
              href="#" 
              className="text-2xl font-bold tracking-wide text-kovalty-black dark:text-white hover:text-kovalty-pink dark:hover:text-kovalty-pink transform hover:scale-105 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-kovalty-pink/50 focus:ring-offset-2 dark:focus:ring-offset-kovalty-black rounded-lg px-2 py-1"
            >
              Kovalty
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2 animate-fade-in">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="inline-block w-4 h-4 mr-2" />
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle className="animate-fade-in" />
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              className="md:hidden p-2 rounded-lg text-kovalty-black dark:text-kovalty-gray hover:text-kovalty-pink dark:hover:text-kovalty-pink hover:bg-kovalty-gray/10 dark:hover:bg-kovalty-pink/10 focus:outline-none focus:ring-2 focus:ring-kovalty-pink/50 focus:ring-offset-2 dark:focus:ring-offset-kovalty-black transform hover:scale-110 active:scale-95 transition-all duration-200 ease-in-out"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isMobileMenuOpen 
            ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0'
          }
        `}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white/95 dark:bg-kovalty-black/95 backdrop-blur-md border-t border-kovalty-gray/20 dark:border-kovalty-pink/20">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMobileMenu}
              className={`
                mobile-menu-item animate-slide-down
                ${index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300'}
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <item.icon className="inline-block w-5 h-5 mr-3" />
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};