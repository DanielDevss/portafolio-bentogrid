import Head from "../components/Head"
import Navbar from "../components/Navbar"
import AboutMe from "../components/Home/AboutMe"
import Services from "../components/Home/Services"
import Portfolio from "../components/Home/Portfolio"

const Home = () => {
  return (
    <>
    <Head />
    <Navbar />
    <AboutMe />
    <Services />
    <Portfolio />
    </>
  )
}

export default Home
