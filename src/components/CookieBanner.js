import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem('mau_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('mau_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        <div style={styles.textSection}>
          <span style={styles.icon}>🍪</span>
          <p style={styles.text}>
            Modibbo Adama University uses cookies to enhance your browsing experience, 
            serve personalized content, and analyze our traffic. By clicking "Accept All", 
            you consent to our use of cookies. Read our 
            <Link to="PrivacyPolicy" style={styles.link}> Privacy Policy</Link>.
          </p>
        </div>
        <div style={styles.buttonSection}>
          <button onClick={acceptCookies} style={styles.acceptBtn}>
            Accept All
          </button>
          <button onClick={() => setIsVisible(false)} style={styles.declineBtn}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '90%',
    maxWidth: '800px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 10px 30px rgba(0,0,0,0.2)',
    borderRadius: '12px',
    padding: '20px',
    zIndex: 9999,
    border: '1px solid #eee',
    display: 'flex',
    animation: 'slideUp 0.5s ease-out'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
    gap: '15px'
  },
  textSection: {
    display: 'flex',
    alignItems: 'center',
    flex: '1',
    minWidth: '300px'
  },
  icon: {
    fontSize: '30px',
    marginRight: '15px'
  },
  text: {
    fontSize: '14px',
    color: '#444',
    margin: 0,
    lineHeight: '1.5'
  },
  link: {
    color: '#004d40',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  buttonSection: {
    display: 'flex',
    gap: '10px'
  },
  acceptBtn: {
    backgroundColor: '#004d40',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px'
  },
  declineBtn: {
    backgroundColor: '#f5f5f5',
    color: '#666',
    border: '1px solid #ddd',
    padding: '10px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px'
  }
};

export default CookieBanner;