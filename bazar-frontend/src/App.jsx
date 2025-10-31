import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Reports from "./pages/Reports";

function App() {
  // NOTA: Para producción real, aquí se implementaría un componente 'ProtectedRoute'
  // que redirija al login si el usuario no tiene un token válido.

  return (
    <Router>
      <Routes>
        {/* Ruta de Login (Pública) */}
        <Route path="/" element={<Login />} /> 
        
        {/* Rutas Protegidas (Requieren Login) */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Rutas anidadas que se renderizan dentro del <Outlet> de Dashboard */}
          <Route path="products" element={<Products />} />
          <Route path="sales" element={<Sales />} />
          <Route path="reports" element={<Reports />} />
        </Route>
        
        {/* Puedes añadir una ruta para 404 aquí */}
      </Routes>
    </Router>
  )
}

export default App;