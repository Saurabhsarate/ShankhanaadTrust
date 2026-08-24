import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import orgData from '../../data/organization.json';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            SHANKHANAAD<br/>TRUST
          </Link>
          <p className="footer-desc">
            {t('footer.about')}
          </p>
          <div className="footer-social">
            <a href={orgData.contact.instagram} aria-label="Instagram"><span>IG</span></a>
            <a href={orgData.contact.youtube} aria-label="YouTube"><span>YT</span></a>
            <a href="#" aria-label="Facebook"><span>FB</span></a>
          </div>
        </div>
        
        <div className="footer-links-group">
          <h4 className="footer-title">{t('footer.quickLinks')}</h4>
          <ul className="footer-links">
            <li><Link to="/about">{t('nav.about')}</Link></li>
            <li><Link to="/performances">{t('nav.performances')}</Link></li>
            {/* <li><Link to="/achievements">Achievements</Link></li> */}
            {/* <li><Link to="/social-initiatives">{t('nav.impact')}</Link></li> */}
          </ul>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-title">{t('nav.media')}</h4>
          <ul className="footer-links">
            <li><Link to="/media">Gallery</Link></li>
            <li><Link to="/media#videos">Videos</Link></li>
            <li><Link to="/media#press">Press</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="footer-title">{t('footer.contact')}</h4>
          <p>{orgData.contact.address}</p>
          <p><a href={`mailto:${orgData.contact.email}`}>{orgData.contact.email}</a></p>
          <p><a href={`tel:${orgData.contact.phone.replace(/\s+/g, '')}`} className="footer-phone"><Phone size={16} /> {orgData.contact.phone}</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} {t('home.title')}. {t('footer.rights')}</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
