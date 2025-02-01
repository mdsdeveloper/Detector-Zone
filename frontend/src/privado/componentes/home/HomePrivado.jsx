import React from "react";
import "./HomePrivado.css";


import Header from "../../../publico/componentes/header/Header";
import Footer from "../../../publico/componentes/footerPublico/Footer";

function HomePrivado () {


    return (
        <div className="dashboard-container">
            {/* Menu */}
            <Header />
            {/* Cuerpo */}
            <main className="dashboard-body">
         
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default HomePrivado;
