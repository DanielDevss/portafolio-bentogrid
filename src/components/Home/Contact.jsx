import { redes } from "../../data/data"

const Contact = () => {
  return (
    <footer id="contact" className="contact">
      
      <header className="contact__header">
        <h2 className="title-alien">Contactame</h2>
      </header>

      <article className="contact__container">
        <aside className="contact__lateral">
          <h3 className="title-lateral">Información</h3>
        </aside>

        <section className="contact__section">
          <h3>¿Tienes un proyecto en mente? Vamos a aterrizarlo.</h3>
          <a href="https://wa.link/slmyje" target="_blank" rel="noreferrer" className="btn-green" >Escribeme</a>

          <ul className="contacto__list">
            {redes.map((item, key) => (
            <li key={key} className="contacto__list__item">
              <h4>{item.title}</h4>
              <a rel="noreferrer" target="_blank" href={item.link}>{item.label}</a>
            </li>
            ))}
          </ul>
        </section>
      
      </article>
    </footer>
  )
}

export default Contact
