import './Item.scss'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AOS from 'aos';
import { Link } from 'react-router-dom'

AOS.init()

function Item({producto}) {
  
  return (
        <div className="col-lg-4 p-0" data-aos='flip-right'>
          <Card className="bg-secondary card-c">
            <Card.Img src={producto.img} className='item-img-card' alt="Card image" />
            <Card.ImgOverlay className='item-card-o-c pb-3'>
              <Button as={Link} to={`/product/${producto.id}`} variant="outline-secondary" className='item-button-card' >
                Comprar
              </Button>
            </Card.ImgOverlay>
          </Card>
    </div>
  )
}

export default Item