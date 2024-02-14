import Logo from "../../assets/img/logo.png";
import { MdPhoneCallback } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import CV from "../../assets/pdf/CV.pdf";

import CSS from "../../assets/img/tecs/css.png";
import EXPRESS from "../../assets/img/tecs/express.png";
import SASS from "../../assets/img/tecs/sass.png";
import HTML from "../../assets/img/tecs/html.png";
import JAVASCRIPT from "../../assets/img/tecs/java.png";
import MYSQL from "../../assets/img/tecs/mysql.png";
import NODE from "../../assets/img/tecs/node.png";
import PHP from "../../assets/img/tecs/php.png";
import REACT from "../../assets/img/tecs/react.png";
import STRIPE from "../../assets/img/tecs/stripe.png";

const AboutMe = () => {
    const tecnologias = [
        {name:"HTML",alt:"Icono de html", img:HTML},
        {name:"Express",alt:"Icono de express js", img:EXPRESS},
        {name:"Sass",alt:"Icono de sass", img:SASS},
        {name:"CSS",alt:"Icono de ", img:CSS},
        {name:"JavaScript",alt:"Icono de Javascript", img:JAVASCRIPT},
        {name:"MySQL",alt:"Icono de mysql", img:MYSQL},
        {name:"Node.js",alt:"Icono de node js", img:NODE},
        {name:"PHP",alt:"Icono de node php", img:PHP},
        {name:"React.js",alt:"Icono de react", img:REACT},
        {name:"Stripe",alt:"Icono de la pasarela de pago stripe", img:STRIPE},
    ];
  return (
    <main className="bg-aboutme">
        <div className="gradient"></div>
        <section className="aboutme">

            <article className="aboutme__card aboutme__card--about">
                <h1 className="aboutme__title">Daniel de la Rosa</h1>
                <h2 className="aboutme__subtitle">Full Stack Developer</h2>
                <p>Soy una persona autodidacta, siempre busco oportunidades para mejorar mis habilidades. Tengo experiencia en proyectos independientes y en equipo, incluso e desarrollado para empresas; mi mejor carta de presentación son los proyectos reales en los que he trabajo, asi que, echale un vistaso a mi portafolio.</p>
            </article>

            <figure className="aboutme__card aboutme__card--logotipo">
                <img src={Logo} alt="Logotipo de DaniDevs, desarrollador full stack" />
            </figure>

            <article className="aboutme__card aboutme__card--contact">
                <h3 className="aboutme__subtitle">Contactame</h3>
                <ul className="aboutme__links">
                    <li className="">
                        <MdPhoneCallback className="aboutme__links__icon" />
                        <a target="_blank" rel="noreferrer" href="tel:+527811084478">781 108 4478</a>
                    </li>
                    <li className="">
                        <IoLogoWhatsapp className="aboutme__links__icon" />
                        <a target="_blank" rel="noreferrer" href="https://wa.link/y74b60">(33) 4145 5403</a>
                    </li>
                </ul>
            </article>

            <article className="aboutme__card aboutme__card--web">
                <ul className="aboutme__card__servicios">
                    <li className="aboutme__card__title">Web <br /> Developer</li>
                    <li>Front End</li>
                    <li>Back End</li>
                    <li>UX/UI</li>
                </ul>
            </article>

            <article className="aboutme__card aboutme__card--tec">
                <h2 className="aboutme__title">Tecnologías</h2>
                <section className="aboutme__tecs">
                    {tecnologias.map((img, key) => (
                        <div key={key} className="aboutme__tecs__item">
                            <img src={img.img} alt={img.alt} />
                            <span>{img.name}</span>
                        </div>
                    ))}
                </section>
            </article>

            <article className="aboutme__card aboutme__card--image">
            </article>

            <article className="aboutme__cv ">
                <a href={CV} download="LuisDanielDelaRosa_CV.pdf" className="btn-green">Descargar CV</a>
            </article>

        </section>
    </main>
  )
}

export default AboutMe
