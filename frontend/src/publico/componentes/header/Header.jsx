import React from "react";
import { Link } from "react-router-dom";
import NavMenu from "../navMenuPublico/NavMenu";
import "./Header.css";
import Logo from "../../../assets/logo.jpeg";

const Header = () => {
    return (
        <header className="dashboard-header">
            <div className="logo">
                <Link to="/"> {/* Redirige al dashboard */}
                    <img src={Logo} alt="logo" className="logo-img" />
                </Link>
            </div>
            <NavMenu />
        </header>
    );
}
export default Header;
