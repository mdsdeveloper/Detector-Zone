import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registro.css";
import Footer from "../footerPublico/Footer";
import HeaderSinNavBar from "../headerSinNavBar/HeaderSinNavBar";

function Registro() {
    const [error, setError] = useState(""); // Estado para errores
    const navigate = useNavigate(); // Inicializa useNavigate


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        const telefono = formData.get("telefono");
        const email = formData.get("email");
        const password = formData.get("password");

        const API_URL = "http://localhost:3000";

        fetch(`${API_URL}/registro`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, telefono, email, password }),
        })
            .then(async (response) => {
                const data = await response.json();
                if (!response.ok) {
                    console.error("Error en la petición:", data.message);
                    throw new Error(data.message);
                }
                console.log("Usuario registrado:", data);
                setError(""); // Borra cualquier error previo
                navigate("/login");  // Redirijo a login

            })
            .catch((error) => {
                console.error("Error en la petición", error);
                setError(error.message);
            });
    };

      // Función para redirigir al login
  const redirectToLogin = () => {
    navigate("/login");
  };

    return (
        <>
        {/* Menu */}
        <HeaderSinNavBar />
        <div className="registro-container">
            <form className="registro-form" onSubmit={handleSubmit}>
                <h2 className="registro-title">Registro</h2>
                {error && <p className="error-message">{error}</p>} {/* Muestra el error si existe */}

                <div className="form-group">
                    <label htmlFor="username">Nombre de Usuario</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Introduce tu nombre de usuario"
                        required />
                </div>

                <div className="form-group">
                    <label htmlFor="telefono">Teléfono (opcional)</label>
                    <input
                        type="text"
                        id="telefono"
                        name="telefono"
                        placeholder="Introduce tu teléfono" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Introduce tu correo electrónico"
                        required />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Introduce tu contraseña"
                        required />
                </div>

                <button type="submit" className="registro-button">
                    Registrarse
                </button>
                <div className="additional-options">
                    <button type="button" onClick={redirectToLogin} className="register-button">
                        Ir al login
                    </button>
                </div>
            </form>
        </div>
           {/* Footer */}
      <Footer />
      </>
    );
}

export default Registro;
