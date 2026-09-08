function DetallePokemon({ pokemon, alCerrar }) {
  if (!pokemon) return null;

  return (
    <div className="modal-detalle">
      <div className="contenido-detalle">
        <button onClick={alCerrar} className="btn-cerrar">X</button>
        <h2>{pokemon.name.toUpperCase()}</h2>
        <img src={pokemon.sprites.other?.['official-artwork']?.front_default || pokemon.sprites.front_default} alt={pokemon.name} />
        
        <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
        <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
        
        <h3>Estadísticas Base</h3>
        <ul>
          {pokemon.stats.map((s) => (
            <li key={s.stat.name}>
              <strong>{s.stat.name}:</strong> {s.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DetallePokemon;