import TarjetaServicio from "./TarjetaServicio";

const servicios = [
  { id: 1, icono: "U1", titulo: "Unidad 1", descripcion: "HTML5 y CSS3" },
  { id: 2, icono: "U2", titulo: "Unidad 2", descripcion: "React Front-End" },
  { id: 3, icono: "U3", titulo: "Unidad 3", descripcion: "Django REST" },
  { id: 4, icono: "U4", titulo: "Proyecto", descripcion: "Integración Final" }
];

function ListaServicios() {
  if (servicios.length === 0) {
    return <p>No hay servicios disponibles.</p>;
  }

  return (
    <section>
      <h2>Servicios</h2>
      {servicios.map(servicio => (
        <TarjetaServicio
          key={servicio.id}
          titulo={servicio.titulo}
          descripcion={servicio.descripcion}
          icono={servicio.icono}
        />
      ))}
    </section>
  );
}

export default ListaServicios;
