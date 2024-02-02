import { useState } from "react";
import Isotipo from "../assets/svg/iso.svg";

const Navbar = () => {

  const [ active, setActive ] = useState(false);
  const handleActive = () => setActive(!active);
  return (
    <header className="header">
      <section className={ "navbar" + (active ? " active" : "") }>
        <button onClick={handleActive} className="navbar__toggle">
          <div></div>
          <div></div>
          <div></div>
        </button>
        <a className="navbar__iso" href="/">
          <img height={50} src={Isotipo} alt="DaniDevs Logotipo" />
        </a>
        <nav className="navbar__nav">
          <a className="navbar__link" href={"#home"}>Sobre mí</a>
          <a className="navbar__link" href={"#services"}>Servicios</a>
          <a className="navbar__link" href={"#prejects"}>Portfolio</a>
          <a className="navbar__link" href={"#contact"}>Contacto</a>
        </nav>
      </section>
    </header>
  )
}

export default Navbar
