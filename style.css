import React, { useState, useRef, useEffect } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const containerRef = useRef(null);
  const mouseMoveRef = useRef({ x: 0, y: 0 });

  // Datos simulados del usuario
  const mockUser = {
    nombre: "Juan Pérez",
    rut: "12.345.678-9",
    direccion: "Calle Falsa 123",
    telefono: "+56 9 1234 5678",
    correo: "juan.perez@example.com",
  };

  // Manejador de inicio de sesión
  const handleLogin = (e) => {
    e.preventDefault();
    setUser(mockUser);
    setIsLoggedIn(true);
  };

  // Captura el movimiento del mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseMoveRef.current = { x, y };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animación suave del contenedor
  useEffect(() => {
    if (!containerRef.current) return;

    let animationFrameId;

    const animate = () => {
      const { x, y } = mouseMoveRef.current;
      const container = containerRef.current;

      const currentTransform = getComputedStyle(container).transform || "none";
      const matrix = currentTransform !== "none" ? new DOMMatrix(currentTransform) : new DOMMatrix();

      const newX = matrix.m41 + (x * 40 - matrix.m41) * 0.05;
      const newY = matrix.m42 + (y * 40 - matrix.m42) * 0.05;

      container.style.transform = `translate(${newX}px, ${newY}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="cloud-background min-h-screen flex items-center justify-center p-4">
      {/* Nubes animadas */}
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`cloud`} style={{ animationDuration: `${30 + i * 10}s`, top: `${10 + i * 15}%`, left: `${i * 20}%` }}></div>
      ))}

      {/* Contenedor que se mueve con el mouse */}
      <div ref={containerRef} className="transition-transform duration-100 ease-out">
        {!isLoggedIn ? (
          <form onSubmit={handleLogin} className="glass-container max-w-md w-full p-8 rounded-xl text-center space-y-6 shadow-lg">
            <h2 className="text-white text-2xl font-semibold">Iniciar Sesión</h2>
            <input
              type="email"
              placeholder="Correo electrónico"
              required
              className="w-full px-4 py-3 rounded-md border-none focus:outline-none text-gray-800 placeholder-gray-500"
            />
            <input
              type="password"
              placeholder="Contraseña"
              required
              className="w-full px-4 py-3 rounded-md border-none focus:outline-none text-gray-800 placeholder-gray-500"
            />
            <button
              type="submit"
              className="w-full bg-white text-gray-800 font-medium py-3 rounded-md hover:bg-opacity-90 transition duration-300"
            >
              Entrar
            </button>
          </form>
        ) : (
          <div className="glass-container max-w-md w-full p-8 rounded-xl text-left shadow-lg">
            <h2 className="text-white text-2xl font-semibold mb-4">Perfil del Usuario</h2>
            <p className="text-white mb-2"><strong>Nombre:</strong> {user.nombre}</p>
            <p className="text-white mb-2"><strong>RUT:</strong> {user.rut}</p>
            <p className="text-white mb-2"><strong>Dirección:</strong> {user.direccion}</p>
            <p className="text-white mb-2"><strong>Teléfono:</strong> {user.telefono}</p>
            <p className="text-white mb-4"><strong>Correo:</strong> {user.correo}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
