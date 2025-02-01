import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="dashboard-footer">
            <div className="footer-left">
                <p>&copy; 2025 Detector Zone</p>
            </div>
            <div className="footer-center">
                <Link to="/nosotros" className="footer-link">Nosotros</Link>
                <Link to="/contacto" className="footer-link">Contacto</Link>
                <Link to="/terminos" className="footer-link">Términos y Condiciones</Link>
                <Link to="/privacy-policy" className="footer-link">Política de Privacidad</Link>
            </div>
            <div className="footer-right">
                <a href="#" className="social-icon">FB</a>
                <a href="#" className="social-icon">TW</a>
                <a href="#" className="social-icon">IG</a>
            </div>
        </footer>
    );
};

export default Footer;