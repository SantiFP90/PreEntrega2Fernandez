import styles from "./Footer.module.css";

const Footer = ({ children }) => {
  return (
    <div>
      {children}
      <div className={styles.container}>
        <div>
          <h2>Información de contacto:</h2>
          <ul>
            <li>
              <p>• Gmail: japanfish@gmail.com </p>
              <p>• Telefono: 4702573 </p>
              <p>• WhatsApp: +54 351 2972100 </p>
              <p>• Instagram: japan_fish' </p>
              <p>• Facebook: Japan Fish' </p>
            </li>
          </ul>
        </div>
        <div className={styles.containerSlogan}>
          <img
            src="https://res.cloudinary.com/dohoagwpd/image/upload/v1678548437/410146_izfgle.png"
            alt="Logo"
            className={styles.imgLogo}
          />
          <h2>ご購入いただきありがとうございます</h2>
        </div>
        <div>
          <iframe
            title="Mapa Ubicación"
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27250.403167690438!2d-64.24190612089846!3d-31.378279599999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943299eb5a9f5869%3A0x4ae09cbc75cf0624!2sCordoba%20Reef!5e0!3m2!1ses-419!2sar!4v1678563127114!5m2!1ses-419!2sar"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
