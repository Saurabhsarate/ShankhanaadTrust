import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'mr' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.performances'), path: '/performances' },
    // { name: t('nav.achievements'), path: '/achievements' },
    // { name: t('nav.impact'), path: '/social-initiatives' },
    { name: t('nav.media'), path: '/media' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src="/images/logo.jpeg" alt="Shankhanaad Trust Logo" className="logo-img" />
        </Link>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="nav-actions">
            <button className="lang-switch" title="Switch Language" onClick={toggleLanguage}>
              <Globe size={18} />
              <span>{i18n.language === 'en' ? 'मराठी' : 'English'}</span>
            </button>
            <Link to="/contact" className="btn btn-primary btn-contact">
              {t('nav.contact')}
            </Link>
          </div>
        </nav>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
