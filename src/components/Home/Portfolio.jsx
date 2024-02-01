import ProyectItem from "../ProyectItem";

const Portfolio = () => {
  return (
    <main className="portfolio" id="projects">
        <header className="portfolio__header">
            <h1 className="title-alien">Proyectos</h1>
        </header>
        <article className="portfolio__container">
            <aside className="portfolio__lateral">
                <h3 className="title-lateral">Portfolio</h3>
            </aside>

            <section className="portfolio__proyectos">
                
                <ProyectItem img={"https://via.placeholder.com/500x400"} title="Titulo del proyecto" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorem dolore consectetur ipsa consequuntur dicta tempore aut autem quaerat iste quod placeat ipsam voluptas nisi pariatur ut maxime, alias dolor.</ProyectItem>
            
            </section>
        </article>
    </main>
  )
}

export default Portfolio
