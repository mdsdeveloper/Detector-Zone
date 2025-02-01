import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Importamos el hook useNavigate
import "./Login.css";
import Footer from "../footerPublico/Footer";
import HeaderSinNavBar from "../headerSinNavBar/HeaderSinNavBar";

const Login = () => {
  const [error, setError] = useState(""); // Estado para errores
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const API_URL = "http://localhost:3000";

    fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message);
        }
        // Si el login es exitoso
        localStorage.setItem("username", data[0].username);
        console.log("Usuario logeado:", data[0].username);
        console.log(localStorage.getItem("username"));
        setError(""); // Borra cualquier error previo
      })
      .catch((error) => {
        console.error("Error en la petición", error);
        setError(error.message);
      });
  };

  // Función para redirigir al registro
  const redirectToRegistro = () => {
    navigate("/registro");
  };

  return (
    <>
      {/* Menu */}
      <HeaderSinNavBar />

      <main className="dash-body">
        <div className="contenedor">
          <form  onSubmit={handleSubmit}>
            <h2 className="title">Iniciar sesión</h2>
            {error && <p className="error">{error}</p>} {/* Muestra el error si existe */}
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" id="email" name="email" placeholder="Introduce tu correo" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" placeholder="Introduce tu contraseña" required />
            </div>
            <button type="submit" className="log-button">Iniciar sesión</button>
            <div className="options">
              <button type="button" onClick={() => alert("Funcionalidad de recordar contraseña no implementada")} className="forgot-password">
                ¿Olvidaste tu contraseña?
              </button>
              <button type="button" onClick={redirectToRegistro} className="register-button">
                ¿No tienes cuenta? Regístrate
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Login;
