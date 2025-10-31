import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Asegúrate de que esta URL coincida con tu endpoint de Express
const API_URL = 'http://localhost:3000/api/auth/login'; 

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!user || !pass) return alert("Ingrese usuario y contraseña.");

    // ==========================================================
    // LÓGICA DE PRUEBA TEMPORAL (Para la presentación)
    // Esto se elimina una vez que el backend esté listo.
    // ==========================================================
    if (user === "admin" && pass === "1234") {
        console.log("LOGIN DE PRUEBA EXITOSO.");
        localStorage.setItem('authToken', 'token_temporal_para_navegar'); 
        navigate("/dashboard");
        return; // Detiene la ejecución para no llamar a la API
    }
    // ==========================================================
    
    setLoading(true);

    try {
      // Lógica de conexión real al Backend
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, pass }), 
      });

      const data = await response.json();

      if (response.ok) {
        // Si el backend es exitoso, guarda el token y navega
        localStorage.setItem('authToken', data.token); 
        navigate("/dashboard");
      } else {
        // Muestra el mensaje de error del backend
        alert(data.message || "Usuario o contraseña incorrecta.");
      }
    } catch (error) {
      // Maneja errores de conexión (si el backend no está iniciado)
      alert("Error de conexión con el servidor. Verifique que el backend esté corriendo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form 
        // Usa tu clase personalizada shadow-soft
        className="bg-white p-8 rounded-lg shadow-soft w-96"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-lilac-dark">Bazar Santa Lucía</h2>
        
        {/* Campo Usuario */}
        <input 
          type="text" 
          placeholder="Usuario" 
          className="w-full p-2 mb-4 border rounded focus:border-lilac-dark focus:ring-1 focus:ring-lilac-dark outline-none transition" 
          value={user} 
          onChange={(e) => setUser(e.target.value)} 
          required
        />
        
        {/* Campo Contraseña */}
        <input 
          type="password" 
          placeholder="Contraseña" 
          className="w-full p-2 mb-6 border rounded focus:border-lilac-dark focus:ring-1 focus:ring-lilac-dark outline-none transition" 
          value={pass} 
          onChange={(e) => setPass(e.target.value)} 
          required
        />
        
        {/* Botón de Ingreso */}
        <button 
          type="submit" 
          disabled={loading}
          // Usa tu clase personalizada lilac-dark
          className="w-full bg-lilac-dark text-white p-2 rounded hover:bg-lilac transition disabled:bg-gray-400 font-semibold"
        >
          {loading ? 'Ingresando...' : 'Ingresar'}
        </button>
      </form>
    </div>
  );
}