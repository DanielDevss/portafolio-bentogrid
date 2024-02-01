import { projects } from "../../data/data";
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

                {projects.map(({name, cover, description, link}, key) => (
                    <ProyectItem key={key} link={link} img={cover} title={name} >{description}</ProyectItem>
                ))}
                
            
            </section>
        </article>
    </main>
  )
}

export default Portfolio
