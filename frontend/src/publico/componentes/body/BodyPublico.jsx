import React from "react";
import { useNavigate } from "react-router-dom";  // Importamos el hook useNavigate
import "./BodyPublico.css";

function BodyPublico() {

    const navigate = useNavigate(); // Inicializa useNavigate
    // Función para redirigir al registro
    const redirectToRegistro = () => {
        navigate("/registro");
    };
    return (
        <>
            <div className="left-section">
                <p className="body-text">
                    Bienvenido a nuestra plataforma. Aquí podrás acceder a la comunidad, descubrir productos interesantes y mucho más. ¡Únete hoy!
                </p>
                <div className="button-group">
                    <button className="btn-join" onClick={redirectToRegistro}>Únete</button>
                    <button className="btn-info">Más Información</button>
                </div>
            </div><div className="right-section">
                <img src="/path/to/image.jpg" alt="Imagen del dashboard" className="dashboard-img" />
            </div>
        </>
    );

}

export default BodyPublico;
