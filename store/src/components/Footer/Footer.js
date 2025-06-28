import React from 'react';
import styles from '../Footer/Footer.module.scss';

const Footer = () => {
  return (
    <footer id="contact-section" className={styles.footer}>
        <section className={styles.footerWrapper}>
            <div className={styles.footerContent}>
                <h1 className={styles.footerLogoName}>
                    <div className={styles.footerLogoIcon}>
                        <i className="fa-solid fa-cake-candles"></i>
                    </div>
                    Cake It
                </h1>
                <div className={styles.socialLinks}>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-instagram fa-2xl"></i></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-facebook fa-2xl"></i></a>
                    <a href="https://www.blogger.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-blogger fa-2xl"></i></a>
                </div>
            </div>
            <div className={styles.footerContent}>
                <h3>Contact Us</h3>
                <div>
                    <p>	316 N Franklin St, Hempstead,<br/>North Dakota, 11550</p>
                    <p>(888) 433-4780</p>
                    <p>cakeit@gmail.com</p>
                    <p><strong>Operating Hours:</strong><br/>Mon - Sun 10:30am - 6pm<br/>Tuesday: Closed</p>
                </div>
            </div>
            <div className={styles.footerContentLinks}>
                <h3>Quick Links</h3>
                <div>
                    <p>About Us</p>
                    <p>FAQs</p>
                    <p>Shipping & Returns</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
            <div className={styles.footerContentLinks}>
                <h3>Resources</h3>
                <div>
                    <p>Help Center</p>
                    <p>Privacy terms</p>
                    <p>Directory</p>
                </div>
            </div>
        </section>
        <section className={styles.footerCredit}>
            <small>Designed and Developed by <a href="https://kristinedejesus.vercel.app" target="_blank" rel="noreferrer noopener">Kristine de Jesus</a></small>
        </section>
    </footer>
  )
}

export default Footer