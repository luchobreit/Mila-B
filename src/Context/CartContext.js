import { createContext, useState } from "react";

export const CartContext= createContext()


export const CartContextProvider= ({children})=>{

    const [cart, setCart] = useState([])
    const [count, setCount]=useState(0)
    const [tostada, setTostada]=useState(true)

    const addItem = item =>{
        setTostada(true)
        if (isOnCart(item.id)) {
            if (window.confirm("este item ya se encuentra en el carrito deseas agregarlo")){
                setTostada(false)
                item.quantity+=1
                let s=count + 1
                setCount(s)
            }
           
        }else{
        setCart([...cart,{item}])
        item.quantity=1
        let s=count + 1
        setCount(s)
        setTostada(false)
        };
    }
    
    const isOnCart = id => cart.find(e=>e.item.id)

    return(
        <CartContext.Provider value={{addItem, count,cart, tostada}}>
            {children}
        </CartContext.Provider>
    )
}