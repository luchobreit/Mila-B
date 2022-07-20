import Cards from "../Cards/Cards"
import Carousel from "../Carousel/Carousel"
import Sections from "../Secciones/Sections"
import "./Home.scss"
function Home() {

  return (
    <div className="home-container bg-warning">
        <Carousel></Carousel>
        <Cards id="cards"/>
        <Sections/>
    </div>
  )
}

export default Home