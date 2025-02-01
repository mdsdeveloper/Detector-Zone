import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Footer from "../footerPublico/Footer";
import HeaderSinNavBar from "../headerSinNavBar/HeaderSinNavBar";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña
  const navigate = useNavigate();

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
        localStorage.setItem("username", data[0].mail_user);
        console.log("Usuario logeado:", data[0].mail_user);
        setError("");
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error en la petición", error);
        setError(error.message);
      });
  };

  const redirectToRegistro = () => {
    navigate("/registro");
  };

  // Función para alternar visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <HeaderSinNavBar />

      <main className="dash-body">
        <div className="contenedor">
          <form onSubmit={handleSubmit}>
            <h2 className="title">Iniciar sesión</h2>
            {error && <p className="error">{error}</p>}
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" id="email" name="email" placeholder="Introduce tu correo" required />
            </div>
            <div className="form-group password-container">
              <label htmlFor="password">Contraseña</label>
              <div >
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Introduce tu contraseña"
                  required
                />
                <span className="eye-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? "👁️" : "🔒"}
                </span>
              </div>
            </div>
            <button type="submit" className="log-button">Iniciar sesión</button>
            <div className="options">
              <button type="button" className="forgot-password" onClick={() => alert("Funcionalidad de recordar contraseña no implementada")}>
                ¿Olvidaste tu contraseña?
              </button>
              <button type="button" className="register-button" onClick={redirectToRegistro}>
                ¿No tienes cuenta? Regístrate
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Login;
