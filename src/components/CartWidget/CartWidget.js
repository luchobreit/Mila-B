import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"


function CartWidget() {
  const {count} = useContext(CartContext)
  return (
    <div>
    <label className="iconCart">{count}</label>
    <i className="bi bi-cart"></i>
    </div>
  )
}

export default CartWidget