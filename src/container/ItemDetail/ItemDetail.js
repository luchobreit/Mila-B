import './ItemDetail.scss'
import Figure from 'react-bootstrap/Figure'
import  Button  from 'react-bootstrap/Button'
import Typical from 'react-typical'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'
import {Toaster, toast} from 'react-hot-toast'


function ItemDetail({prod}) {


  const {addItem, tostada} = useContext(CartContext)
  const addCart = ()=>{
    addItem(prod)
    if (tostada) {
      toast.success('Agregado correctamente')
    }
  }

  return (
    <div className='item-dtl-c pt-5'>
      <Figure>
        <Figure.Image
          width={400}
          alt="171x180"
          src={prod.img}
        />
      </Figure> 
      <div className="dtl-txt-c">
      <h1>
        <Typical
        className="model"
        steps={[prod.name, 1800]}
        loop={Infinity}
        wrapper="p"
      />
      </h1>
        
        {
          prod.epcs.map(({color, talles, price})=>
          <ul className='ul-epcs' key={prod.id}>
            <li className='li-epcs'>
              <h4>Color</h4>
              <span className='li-epcs-span' >{color} </span>
            </li>

            <li className='li-epcs li-epcs2'>
            <h4>Talles</h4>
              <span className="li-epcs-span ">{talles}</span>
            </li>

            <li className='li-epcs li-epcs2'>
            <h4>Precio</h4>
              <span className="li-epcs-span ">${prod.price}</span>
            </li>
          </ul>
          )
        }

       
        <Button className='btn-buy' onClick={addCart} variant='outline-dark'>Comprar  </Button>
      </div>
      <Toaster position='top-center'/>
    </div>
  )
}

export default ItemDetail 