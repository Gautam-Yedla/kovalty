'use client';

import { FC }                            from 'react';
import { Mail, Phone }                    from 'lucide-react';
import { ScrollToTopIcon }               from '@/icons/Icons';

const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className = "bg-secondary text-secondary-foreground py-12">
      <div className = "max-w-7xl mx-auto px-4">
        <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className = "flex items-center gap-3">
            <p className = "text-sm">Drop us a Line at :</p>
            <Mail className = "w-5 h-5" />
            <a
              href      = "mailto:info@kovalty.com"
              className  = "text-accent hover:underline"
            >
              info@kovalty.com
            </a>
          </div>
          <div className = "flex items-center gap-3">
            <p className = "text-sm">Phone :</p>
            <Phone className = "w-5 h-5" />
            <a
              href      = "tel:+917661805678"
              className  = "text-accent hover:underline"
            >
              +91 76618 05678
            </a>
          </div>
          <div className = "flex items-start gap-3">
            <p className = "text-sm">Address :</p>
            <a
              href      = "https://maps.app.goo.gl/FrizC6mKpXe8YWS29"
              target    = "_blank"
              rel       = "noopener noreferrer"
              className  = "text-accent hover:underline"
            >
              Plot No 54, Tripura Landmark-II,
              <br />
              Bowrampet, Hyderabad - 500043
              <br />
              Telangana, India
            </a>
          </div>

          <div>
            <p className = "text-sm mb-2">Social Media</p>
            <div className = "flex gap-4">
              <a
                href      = "https://www.linkedin.com/company/kovalty/"
                aria-label = "LinkedIn"
                className  = "text-accent hover:text-accent/80 transition-colors"
                target    = "_blank"
                rel       = "noopener noreferrer"
              >
                <svg
                  width  = "24"
                  height = "24"
                  fill   = "currentColor"
                  aria-hidden = "true"
                  viewBox = "0 0 24 24"
                >
                  <path d = "M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v5.56z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className = "relative border-t border-border/50 py-8">
        <div className = "max-w-7xl mx-auto px-4 flex items-center justify-between">
          <span className = "text-sm">
            © 2025 Kovalty Technologies LLP
          </span>
          <div className = "flex gap-6">
            <a href = "#" className = "text-sm text-accent hover:underline">
              Privacy Policy
            </a>
            <a href = "#" className = "text-sm text-accent hover:underline">
              Terms of Usage
            </a>
          </div>
          <button
            className  = "absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-accent text-accent-foreground flex items-center justify-center transition-all duration-200 hover:brightness-110 hover:shadow-lg active:scale-95"
            onClick     = {scrollToTop}
            aria-label  = "Scroll to top"
          >
            <ScrollToTopIcon />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
