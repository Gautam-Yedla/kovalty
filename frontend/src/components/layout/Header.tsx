'use client';

import { FC, useState, useRef, useEffect, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ContactArrowIcon, ChevronDownIcon } from '@/icons/Icons';
import { navItems, services } from '@/data/header';
import { Button } from '@/components/ui/Button';

export const Header: FC = () => {
    const [activeNav, setActiveNav] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const navContainerRef = useRef<HTMLDivElement | null>(null);
    const menuButtonRef = useRef<HTMLButtonElement | null>(null);

    const router = useRouter();
    const pathname = usePathname();

    const getActiveNavFromPath = useCallback((pathname: string) => {
        if (pathname === '/') return 'Home';
        if (pathname === '/about') return 'About';
        if (pathname === '/contact') return 'Contact';
        if (pathname.startsWith('/services')) return 'Services';
        return 'Home';
    }, []);

    const handleNavClick = (item: string) => {
        setActiveNav(item);
        setIsMenuOpen(false);
        setIsServicesOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
        if (!isMenuOpen) {
            setIsServicesOpen(false);
        }
    };

    const handleServicesToggle = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        if (window.innerWidth < 1000) {
            e.preventDefault();
            setIsServicesOpen((prev) => !prev);
        } else {
            setActiveNav('Services');
            setIsMenuOpen(false);
            setIsServicesOpen(false);
        }
    };

    useEffect(() => {
        if (pathname) {
            const currentNav = getActiveNavFromPath(pathname);
            setActiveNav(currentNav);
        }
    }, [pathname, getActiveNavFromPath]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isMenuOpen &&
                navContainerRef.current &&
                !navContainerRef.current.contains(event.target as Node) &&
                menuButtonRef.current &&
                !menuButtonRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <header className = "fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4">
            <div className = "glass rounded-2xl shadow-2xl border border-accent/20">
                <div className = "flex items-center justify-between h-20 px-6">
                    <nav
                        ref       = {navContainerRef}
                        className = {`${isMenuOpen
                                ? 'fixed inset-0 glass flex flex-col items-center justify-center backdrop-blur-xl'
                                : 'hidden md:flex'
                            }`}
                    >
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <ul className="flex flex-col md:flex-row items-center gap-6">
                                {navItems.map((item) => {
                                    if (item === 'Services') {
                                        return (
                                            <li
                                                key={item}
                                                className="relative"
                                                onMouseEnter={() =>
                                                    window.innerWidth >= 1000 && setIsServicesOpen(true)
                                                }
                                                onMouseLeave={() =>
                                                    window.innerWidth >= 1000 && setIsServicesOpen(false)
                                                }
                                            >
                                                <Link
                                                    href      = "/services"
                                                    className = {`flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-200 ${
                                                        activeNav === 'Services'
                                                            ? 'text-accent bg-accent/10'
                                                            : 'text-foreground hover:text-accent hover:bg-accent/5'
                                                    }`}
                                                    onClick = {handleServicesToggle}
                                                >
                                                    Services
                                                    <ChevronDownIcon
                                                        className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''
                                                            }`}
                                                    />
                                                </Link>
                                                <div
                                                    className = {`absolute top-full left-0 mt-4 glass rounded-xl border border-accent/20 shadow-2xl transition-all duration-300 ${
                                                        isServicesOpen
                                                            ? 'opacity-100 visible translate-y-0'
                                                            : 'opacity-0 invisible -translate-y-2'
                                                    }`}
                                                >
                                                    <ul className="py-2 min-w-[200px]">
                                                        <li>
                                                            <Link
                                                                href="/services"
                                                                className="block px-4 py-2 hover:bg-muted transition-colors"
                                                                onClick={() => {
                                                                    setActiveNav('Services');
                                                                    setIsMenuOpen(false);
                                                                    setIsServicesOpen(false);
                                                                }}
                                                            >
                                                                All Services
                                                            </Link>
                                                        </li>
                                                        {services.map((service) => {
                                                            const servicePath =
                                                                '/services/' +
                                                                service
                                                                    .toLowerCase()
                                                                    .replace(/ & /g, '-')
                                                                    .replace(/ /g, '-');
                                                            return (
                                                                <li key={service}>
                                                                    <Link
                                                                        href={servicePath}
                                                                        className="block px-4 py-2 hover:bg-muted transition-colors"
                                                                        onClick={() => {
                                                                            setActiveNav('Services');
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

                                    let to = '/';
                                    if (item === 'Home') to = '/';
                                    else if (item === 'About') to = '/about';
                                    else if (item === 'Contact') to = '/contact';

                                    return (
                                        <li key={item}>
                                            <Link
                                                href      = {to}
                                                className = {`px-4 py-2 rounded-full transition-all duration-200 ${
                                                    activeNav === item
                                                        ? 'text-accent bg-accent/10'
                                                        : 'text-foreground hover:text-accent hover:bg-accent/5'
                                                }`}
                                                onClick = {() => handleNavClick(item)}
                                            >
                                                {item}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="md:hidden">
                            <button
                                ref={menuButtonRef}
                                onClick={toggleMenu}
                                className={`relative w-8 h-8 flex items-center justify-center ${isMenuOpen ? 'open' : ''
                                    }`}
                                aria-label="Toggle menu"
                                aria-expanded={isMenuOpen}
                            >
                                <div className="relative w-6 h-4">
                                    <span
                                        className={`absolute top-0 left-0 w-full h-0.5 bg-foreground transition-all ${isMenuOpen
                                                ? 'rotate-45 top-2'
                                                : ''
                                            }`}
                                    />
                                    <span
                                        className={`absolute top-2 left-0 w-full h-0.5 bg-foreground transition-all ${isMenuOpen ? 'opacity-0' : ''
                                            }`}
                                    />
                                    <span
                                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-foreground transition-all ${isMenuOpen
                                                ? '-rotate-45 top-2'
                                                : ''
                                            }`}
                                    />
                                </div>
                            </button>
                        </div>
                        <Button
                            variant   = "accent"
                            size      = "default"
                            className = "flex items-center gap-2 glow hover:scale-105 transition-all duration-300"
                            onClick   = {() => {
                                setIsMenuOpen(false);
                                setActiveNav('Contact');
                                router.push('/contact');
                            }}
                        >
                            <span>CONTACT</span>
                            <ContactArrowIcon className="w-3 h-3" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
