import React from "react";
import { Link } from "react-router-dom";
import "../header/Header.css";
import Logo from "../../../assets/logo.jpeg";


const HeaderSinNavBar = () => {
    return (
        <header className="dashboard-header">
            <div className="logo">
            <Link to="/"> {/* Redirige al dashboard */}
                    <img src={Logo} alt="logo" className="logo-img" />
                </Link>
            </div>
        </header>
    );
}
export default HeaderSinNavBar;
