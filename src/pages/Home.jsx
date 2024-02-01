import Head from "../components/Head"
import Navbar from "../components/Navbar"
import AboutMe from "../components/Home/AboutMe"
import Services from "../components/Home/Services"
import Portfolio from "../components/Home/Portfolio"
import Contact from "../components/Home/Contact"

const Home = () => {
  return (
    <>
    <Head />
    <Navbar />
    <AboutMe />
    <Services />
    <Portfolio />
    <Contact />
    </>
  )
}

export default Home
