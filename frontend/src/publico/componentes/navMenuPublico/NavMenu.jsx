import React from "react";
import { Link } from "react-router-dom";
import "./NavMenu.css";


const NavMenu = () => {
    return (
        <nav className="menu">
            <Link to="/" className="menu-item">Inicio</Link>
            <Link to="/comunidad" className="menu-item">Comunidad</Link>
            <Link to="/eventos" className="menu-item">Eventos</Link>
            <Link to="/productos" className="menu-item">Productos</Link>
            <Link to="/zonas" className="menu-item">Zonas</Link>
            <Link to="/suscripcion" className="menu-item">Suscripción</Link>
            <Link to="/login" className="menu-item btn-large">Acceso</Link>
            <Link to="/registro" className="menu-item btn-large">Únete</Link>
        </nav>
    );
};

export default NavMenu;