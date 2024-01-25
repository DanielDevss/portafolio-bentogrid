import { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link className="navbar__link" to={"#home"}>Sobre mí</Link>
          <Link className="navbar__link" to={"#home"}>Servicios</Link>
          <Link className="navbar__link" to={"#home"}>Portfolio</Link>
          <Link className="navbar__link" to={"#home"}>Contacto</Link>
        </nav>
      </section>
    </header>
  )
}

export default Navbar
