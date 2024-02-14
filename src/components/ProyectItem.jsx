import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2"
import PropTypes from "prop-types";

const ProyectItem = ({title, link, img, children}) => {
    return (
        <li className="portfolio__item">
            <section className="portfolio__item__info">
                <a target="_blank" rel="noreferrer" className="link" href={link}><span>Ver proyecto</span> <HiMiniArrowTopRightOnSquare /></a>
                <h2>{title}</h2>
                <p>{children}</p>
            </section>
            <figure className="portfolio__item__figure">
                <img src={img} alt="Imagen de prueba" />
            </figure>
        </li>
    )
}

ProyectItem.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    img: PropTypes.any,
    children: PropTypes.any
}

export default ProyectItem
