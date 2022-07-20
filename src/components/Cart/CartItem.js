import Table from 'react-bootstrap/Table';
import "./CartItem.scss"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"


function CartItem({prod}) {

  const { count} = useContext(CartContext)



  return (

    <>
    
      <tbody className='bg-secondary'>
        <tr className='ci-body ci-txt'>
          <td>{prod.name}</td>
          <td>{prod.price}</td>
          <td>{prod.quantity}</td>
        </tr>
      </tbody>
    </>
  )
}

export default CartItem