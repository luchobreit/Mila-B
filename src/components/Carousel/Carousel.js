import './Carousel.scss'
import Button from 'react-bootstrap/Button'
import { Link } from "react-scroll";

function Carousel() {
  return (
    <div className='c-img' id='card'>
        <img className='img-home-1' src="/Imgs/Home/landscape.jpg" alt="Landscape" />
        <div className="c-txt">
            <p className="subt-text">Temporada otoño</p>
            <h1 className="txt">
                Sale
            </h1>
            <p className="subt-text">hasta 30% off</p>
            <Link 
            to="cards"
            smooth={true}
            duration={500}
            offset={10}>
            <Button size='lg' variant="outline-danger">Descubrinos</Button>
            </Link>
            
            
        </div>
    </div>
  )
}

export default Carousel