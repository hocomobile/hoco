import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <Link to="/">
                        <img src="/images/logo.png" alt="Hoco Logo" className="logo-img" />
                    </Link>
                </div>

                {isMobile ? (
                    <>
                        <button className="mobile-menu-button" onClick={toggleMenu} aria-label="Toggle menu">
                            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
                        </button>
                        <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
                            <li>
                                <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={toggleMenu}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className={location.pathname === '/products' ? 'active' : ''} onClick={toggleMenu}>
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/repair" className={location.pathname === '/repair' ? 'active' : ''} onClick={toggleMenu}>
                                    Repair
                                </Link>
                            </li>
                            <li>
                                <Link to="/stores" className={location.pathname === '/stores' ? 'active' : ''} onClick={toggleMenu}>
                                    Stores
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={toggleMenu}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={toggleMenu}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </>
                ) : (
                    <ul className="nav-links desktop">
                        <li>
                            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/repair" className={location.pathname === '/repair' ? 'active' : ''}>
                                Repair
                            </Link>
                        </li>
                        <li>
                            <Link to="/stores" className={location.pathname === '/stores' ? 'active' : ''}>
                                Stores
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;