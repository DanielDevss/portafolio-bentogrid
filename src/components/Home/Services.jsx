const Services = () => {
  return (
    <article className="services" id="services">
        <header className="services__header">
            <h2 className="title-alien">Servicios</h2>
        </header>
        <section className="servicios__contenido">
            <aside className="servicios__lateral">
                <h3 className="title-lateral">Experiencia</h3>
            </aside>
            <ul className="servicios__lista">
                <li className="servicios__lista__item">
                    <div className="circle"></div>
                    <h4>Desarrollo Front End:</h4>
                    <p>Transforma diseños creativos en experiencias interactivas y atractivas para tus usuarios.</p>
                </li>
                <li className="servicios__lista__item">
                    <div className="circle"></div>
                    <h4>Desarrollo Back End:</h4>
                    <p>Construya la infraestructura sólida que impulsa tu sitio web, garantizando un rendimiento óptimo.</p>
                </li>
                <li className="servicios__lista__item">
                    <div className="circle"></div>
                    <h4>Creación de sitios web complejos:</h4>
                    <p>Diseño y desarrollo de sitios web personalizados, adaptos a tus necesidades especificas.</p>
                </li>
                <li className="servicios__lista__item">
                    <div className="circle"></div>
                    <h4>Desarrollo de API Rest Full:</h4>
                    <p>Facilita la comunicación eficiente entre tus aplicaciones, permitiendo un intercambio fuido de datos.</p>
                </li>
            </ul>
        </section>
    </article>
  )
}

export default Services
