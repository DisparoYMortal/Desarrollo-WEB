import { useState, useEffect } from 'react';

function Home() {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const obtenerDatos = async () => {
    setCargando(true);
    setError(null);
    try {
      // Simula el endpoint de tu proyecto (ej: productos, publicaciones, usuarios)
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
      if (!res.ok) throw new Error('Error al cargar la información');
      const data = await res.json();
      setItems(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  if (cargando) return <p>Cargando datos del proyecto...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main>
      <h2>Página de Inicio</h2>
      <div className="contenedor-tarjetas">
        {items.map((item) => (
          <article key={item.id} className="tarjeta-item">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Home;
