import { projects } from "../../data/data";
import ProyectItem from "../ProyectItem";

const Portfolio = () => {
  return (
    <article className="portfolio" id="prejects">
        <header className="portfolio__header">
            <h2 className="title-alien">Proyectos</h2>
        </header>
        <article className="portfolio__container">
            <aside className="portfolio__lateral">
                <h3 className="title-lateral">Portfolio</h3>
            </aside>

            <ul className="portfolio__proyectos">
                {projects.map(({name, cover, description, link}, key) => (
                    <ProyectItem key={key} link={link} img={cover} title={name} >{description}</ProyectItem>
                ))}
            </ul>
        </article>
    </article>
  )
}

export default Portfolio
