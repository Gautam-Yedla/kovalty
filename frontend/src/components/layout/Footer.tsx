'use client';

import { FC } from 'react';
import { Mail, Phone } from 'lucide-react';
import { ScrollToTopIcon } from '@/icons/Icons';
import { Button } from '@/components/ui/Button';

export const Footer: FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className = "relative bg-secondary text-secondary-foreground py-16 overflow-hidden">
            {/* Background Effects */}
            <div className = "absolute inset-0 opacity-10">
                <div className = "absolute top-0 left-0 w-96 h-96 bg-kovalty-blue rounded-full blur-3xl" />
                <div className = "absolute bottom-0 right-0 w-96 h-96 bg-kovalty-blue-light rounded-full blur-3xl" />
            </div>

            <div className = "max-w-7xl mx-auto px-4 relative z-10">
                <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className = "glass rounded-xl p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300">
                        <div className = "flex items-center gap-3 mb-4">
                            <div className = "w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                <Mail className = "w-5 h-5 text-accent" />
                            </div>
                            <div>
                                <p className = "text-sm mb-1" style = {{ color: 'var(--text-secondary)' }}>Email Us</p>
                                <a
                                    href      = "mailto:info@kovalty.com"
                                    className = "text-accent hover:text-kovalty-blue-light transition-colors font-medium"
                                >
                                    info@kovalty.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className = "glass rounded-xl p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300">
                        <div className = "flex items-center gap-3 mb-4">
                            <div className = "w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                <Phone className = "w-5 h-5 text-accent" />
                            </div>
                            <div>
                                <p className = "text-sm mb-1" style = {{ color: 'var(--text-secondary)' }}>Call Us</p>
                                <a
                                    href      = "tel:+917661805678"
                                    className = "text-accent hover:text-kovalty-blue-light transition-colors font-medium"
                                >
                                    +91 76618 05678
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className = "glass rounded-xl p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300">
                        <div className = "flex items-start gap-3">
                            <div className = "w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                                <svg className = "w-5 h-5 text-accent" fill = "none" viewBox = "0 0 24 24" stroke = "currentColor">
                                    <path strokeLinecap = "round" strokeLinejoin = "round" strokeWidth = {2} d = "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap = "round" strokeLinejoin = "round" strokeWidth = {2} d = "M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className = "text-sm mb-2" style = {{ color: 'var(--text-secondary)' }}>Visit Us</p>
                                <a
                                    href      = "https://maps.app.goo.gl/FrizC6mKpXe8YWS29"
                                    target    = "_blank"
                                    rel       = "noopener noreferrer"
                                    className = "text-accent hover:text-kovalty-blue-light transition-colors font-medium block"
                                >
                                    Plot No 54, Tripura Landmark-II,
                                    <br />
                                    Bowrampet, Hyderabad - 500043
                                    <br />
                                    Telangana, India
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className = "glass rounded-xl p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300">
                        <p className = "text-sm mb-4" style = {{ color: 'var(--text-secondary)' }}>Follow Us</p>
                        <div className = "flex gap-4">
                            <a
                                href      = "https://www.linkedin.com/company/kovalty/"
                                aria-label = "LinkedIn"
                                className = "w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-foreground transition-all duration-300 hover:scale-110"
                                target    = "_blank"
                                rel       = "noopener noreferrer"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v5.56z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "relative border-t border-accent/20 py-8 mt-12">
                <div className = "max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 relative">
                    <span className = "text-sm" style = {{ color: 'var(--text-secondary)' }}>
                        © 2025 Kovalty Technologies LLP
                    </span>
                    <div className = "flex gap-6">
                        <a
                            href      = "#"
                            className = "text-sm text-accent hover:text-kovalty-blue-light transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href      = "#"
                            className = "text-sm text-accent hover:text-kovalty-blue-light transition-colors"
                        >
                            Terms of Usage
                        </a>
                    </div>
                    <Button
                        variant   = "accent"
                        size      = "icon"
                        className = "absolute right-4 top-1/2 -translate-y-1/2 glow hover:scale-110 transition-all duration-300"
                        onClick   = {scrollToTop}
                        aria-label = "Scroll to top"
                    >
                        <ScrollToTopIcon />
                    </Button>
                </div>
            </div>
        </footer>
    );
};
