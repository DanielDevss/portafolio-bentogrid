import { FaArrowUpRightFromSquare } from "react-icons/fa6";


const Portfolio = () => {
  return (
    <main className="portfolio">
        <header className="portfolio__header">
            <h1 className="title-alien">Proyectos</h1>
        </header>
        <article className="portfolio__container">
            <aside className="portfolio__lateral">
                <h3 className="title-lateral">Portfolio</h3>
            </aside>

            <section className="portfolio__proyectos">

                <article className="portfolio__item">
                    <section className="portfolio__item__info">
                        <a  className="link" href=""><span className="">Ver proyecto</span> <FaArrowUpRightFromSquare /></a>
                        <h2>Nombre del proyecto</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem nemo dicta ea non culpa maxime exercitationem rerum excepturi fuga. Autem eligendi iure quos nam, veritatis illum eveniet voluptatum porro perspiciatis molestias nostrum illo.</p>
                    </section>
                    <figure className="portfolio__item__figure">
                        <img src="https://via.placeholder.com/800x600" alt="Imagen de prueba" />
                    </figure>
                </article>

                <article className="portfolio__item">
                    <section className="portfolio__item__info">
                        <a className="link"  href=""><span className="">Ver proyecto</span> <FaArrowUpRightFromSquare /></a>
                        <h2>Nombre del proyecto</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem nemo dicta ea non culpa maxime exercitationem rerum excepturi fuga. Autem eligendi iure quos nam, veritatis illum eveniet voluptatum porro perspiciatis molestias nostrum illo.</p>
                    </section>
                    <figure className="portfolio__item__figure">
                        <img src="https://via.placeholder.com/800x600" alt="Imagen de prueba" />
                    </figure>
                </article>

            </section>
        </article>
    </main>
  )
}

export default Portfolio
