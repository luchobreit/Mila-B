import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import ItemDetail from "./ItemDetail";

const prod ={id: 1, type:"swtr", name:"Sweater Cap", price:150, epcs:[{color:'verde',talles:'l-xl'}], img:"/Imgs/List/modelo1.png"};

let getProduct = new Promise ((res, rej)=>{
    setTimeout(() => {
      res(prod)
    }, 3000);
  });



function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

    useEffect(()=>{
      if (loading) {
        setLoading(true)
      }
      getProduct
      .then(resp=>{
        setProduct(resp) 
        setLoading(false)})
    },[]);


  return (
    <div className={loading ? "ilc-c2 " :"ilc-c " }>
      {loading ?
        <Loading/>
        :
        <ItemDetail prod={product}/>
      }
    </div>
  )
}

export default ItemDetailContainer