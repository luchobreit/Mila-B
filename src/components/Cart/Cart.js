import  './Cart.scss'
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom";
import CartItem from "./CartItem"
import Table from 'react-bootstrap/Table';


function Cart() {
  const {cart, count} = useContext(CartContext)
console.log(cart, count);


  return (
    <div>
      {
      <div className="cart-container">
        {
        
        count === 0 ?

      
        <div className="bg-light c-nada-container">
          <img src="/Imgs/Cart/ovillo.png" alt="" className="c-img-nada" />
          <h1 className="c-nada">OOPS Todavia no agragaste nada :(</h1>
          <h1 className="c-nada">¿<Link to="/category/all">Quieres volver a la tienda</Link>?</h1>
        </div>

        :
      
        <Table striped bordered hover className='ci-container'>
          <thead className='bg-light'>
            <tr>
              <th className='prod-ci'>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
            </tr>
          </thead>
           {cart.map(produ=><CartItem prod={produ.item} key={produ.id}></CartItem>)}
        </Table>
       
        }
      
      </div>
      }
    </div>
  )
}

export default Cart