import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Acerca de</h4>
          <ul>
            <li><a href="#about">Acerca de E-Commerce</a></li>
            <li><a href="#investors">Inversionistas</a></li>
            <li><a href="#trends">Tendencias</a></li>
            <li><a href="#news">Noticias</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Ayuda</h4>
          <ul>
            <li><a href="#help">Centro de ayuda</a></li>
            <li><a href="#shipping">Envíos</a></li>
            <li><a href="#returns">Devoluciones</a></li>
            <li><a href="#contact">Contáctanos</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Compra</h4>
          <ul>
            <li><a href="#how-to-buy">Cómo comprar</a></li>
            <li><a href="#payment">Medios de pago</a></li>
            <li><a href="#protection">Protección al comprador</a></li>
            <li><a href="#offers">Ofertas</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Vende</h4>
          <ul>
            <li><a href="#sell">Vender</a></li>
            <li><a href="#seller-center">Centro de vendedores</a></li>
            <li><a href="#shipping-costs">Costos de envío</a></li>
            <li><a href="#promote">Promocionar productos</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Redes sociales</h4>
          <div className="social-links">
            <a href="#facebook" className="social-icon" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#twitter" className="social-icon" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#instagram" className="social-icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#youtube" className="social-icon" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-legal">
            <p>&copy; 2026 E-Commerce. Todos los derechos reservados.</p>
            <div className="footer-legal-links">
              <a href="#terms">Términos y condiciones</a>
              <span>|</span>
              <a href="#privacy">Privacidad</a>
              <span>|</span>
              <a href="#cookies">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
