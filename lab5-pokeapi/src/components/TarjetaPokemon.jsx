import { useState, useEffect } from 'react';

function TarjetaPokemon({ nombre, alSeleccionar }) {
  const [detalle, setDetalle] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelado = false;
    setCargando(true);
    setError(null);

    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar detalle');
        return res.json();
      })
      .then((data) => {
        if (!cancelado) setDetalle(data);
      })
      .catch((err) => {
        if (!cancelado) setError(err.message);
      })
      .finally(() => {
        if (!cancelado) setCargando(false);
      });

    return () => { cancelado = true; };
  }, [nombre]);

  if (cargando) return <div className="tarjeta">Cargando...</div>;
  if (error) return <div className="tarjeta error-tarjeta">Error al cargar</div>;

  return (
    <div className="tarjeta" onClick={() => alSeleccionar(detalle)}>
      <img src={detalle.sprites.front_default} alt={nombre} />
      <h3>{nombre}</h3>
      <p>Tipo: {detalle.types.map((t) => t.type.name).join(', ')}</p>
    </div>
  );
}

export default TarjetaPokemon;