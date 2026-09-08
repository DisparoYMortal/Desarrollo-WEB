import { useState, useEffect } from 'react';
import TarjetaPokemon from './TarjetaPokemon';
import DetallePokemon from './DetallePokemon';

function ListaPokemon() {
  const [pokemones, setPokemones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null);

  const obtenerPokemones = async () => {
    setCargando(true);
    setError(null);
    try {
      const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      if (!respuesta.ok) throw new Error('No se pudo conectar con la API');
      const datos = await respuesta.json();
      setPokemones(datos.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerPokemones();
  }, []);

  const pokemonesFiltrados = pokemones.filter((p) =>
    p.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (cargando) return <p>Cargando pokémon...</p>;

  if (error) (
    <div className="error-box">
      <p>Ocurrió un error: {error}</p>
      <button onClick={obtenerPokemones}>Reintentar</button>
    </div>
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar pokémon..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="buscador"
      />

      <div className="lista-pokemon">
        {pokemonesFiltrados.map((p) => (
          <TarjetaPokemon
            key={p.name}
            nombre={p.name}
            alSeleccionar={(detalle) => setPokemonSeleccionado(detalle)}
          />
        ))}
      </div>

      <DetallePokemon
        pokemon={pokemonSeleccionado}
        alCerrar={() => setPokemonSeleccionado(null)}
      />
    </div>
  );
}

export default ListaPokemon;
