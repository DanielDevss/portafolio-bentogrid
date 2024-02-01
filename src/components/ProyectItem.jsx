import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import PropTypes from "prop-types";

const ProyectItem = ({title, link, img, children}) => {
    return (
        <article className="portfolio__item">
            <section className="portfolio__item__info">
                <a className="link" href={link}><span>Ver proyecto</span> <FaArrowUpRightFromSquare /></a>
                <h2>{title}</h2>
                <p>{children}</p>
            </section>
            <figure className="portfolio__item__figure">
                <img src={img} alt="Imagen de prueba" />
            </figure>
        </article>
    )
}

ProyectItem.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    img: PropTypes.any,
    children: PropTypes.any
}

export default ProyectItem
