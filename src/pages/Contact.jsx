import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin } from 'lucide-react';
import orgData from '../data/organization.json';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info fade-up visible">
              <h2>{t('contact.getInTouch.title')}</h2>
              <p className="contact-desc">
                {t('contact.getInTouch.desc')}
              </p>

              <div className="info-items">
                <div className="info-item">
                  <Phone className="info-icon" />
                  <div>
                    <h4>{t('contact.info.call')}</h4>
                    {orgData.contact.phone.split(',').map((p, i) => (
                      <div key={i}>
                        <a href={`tel:${p.replace(/\s+/g, '')}`}>{p.trim()}</a>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="info-item">
                  <Mail className="info-icon" />
                  <div>
                    <h4>{t('contact.info.email')}</h4>
                    {orgData.contact.email.split(',').map((e, i) => (
                      <div key={i}>
                        <a href={`mailto:${e.trim()}`}>{e.trim()}</a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="info-item">
                  <MapPin className="info-icon" />
                  <div>
                    <h4>{t('contact.info.location')}</h4>
                    <p>{t('contact.info.address')}</p>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h4>{t('contact.social.title')}</h4>
                <div className="social-links">
                  <a href={orgData.contact.instagram} target="_blank" rel="noreferrer" className="btn btn-outline">
                    <span style={{ marginRight: '8px' }}>IG</span> Instagram
                  </a>
                  <a href={orgData.contact.youtube} target="_blank" rel="noreferrer" className="btn btn-outline">
                    <span style={{ marginRight: '8px' }}>YT</span> YouTube
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper fade-up delay-200 visible">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">{t('contact.form.name')}</label>
                  <input type="text" id="name" placeholder={t('contact.form.namePh')} required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">{t('contact.form.phone')}</label>
                  <input type="tel" id="phone" placeholder={t('contact.form.phonePh')} required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">{t('contact.form.email')}</label>
                  <input type="email" id="email" placeholder={t('contact.form.emailPh')} />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">{t('contact.form.subject')}</label>
                  <select id="subject" required defaultValue="">
                    <option value="" disabled>{t('contact.form.subjSelect')}</option>
                    <option value="performance">{t('contact.form.subjPerf')}</option>
                    <option value="join">{t('contact.form.subjJoin')}</option>
                    <option value="support">{t('contact.form.subjSupport')}</option>
                    <option value="other">{t('contact.form.subjOther')}</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">{t('contact.form.message')}</label>
                  <textarea id="message" rows="5" placeholder={t('contact.form.messagePh')} required></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary w-100">{t('contact.form.submit')}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section map-section">
        <div className="container">
          <div className="map-placeholder fade-up visible">
            <p>{t('contact.map.text')}</p>
            <a href="https://maps.app.goo.gl/kGrPEtstb19HVgH19" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
              {t('contact.map.btn')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
