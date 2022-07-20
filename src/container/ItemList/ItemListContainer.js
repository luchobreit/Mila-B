import ItemList from "./ItemList";
import { useState, useEffect, useContext } from "react";
import "./ItemListContainer.scss";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router-dom";


const productos1=[
  {id: 1, type:"swtr", colection:'w', name:"Jorge", age:37, img:"/Imgs/List/modelo1.png"},
  {id: 2, type:"swtr", colection:'w', name:"Juan", age:36, img:"/Imgs/List/modelo4.png"},
  {id: 3, type:"swtr", colection:'f', name:"Pedro", age:34, img:"/Imgs/List/modelo3.png"},
  {id: 4, type:"swtr", colection:'w', name:"Roberto", age:17, img:"/Imgs/List/modelo2.png"},
  {id: 5, type:"swtr", colection:'f', name:"Martin", age:32, img:"/Imgs/List/modelo5.png"},
  {id: 6, type:"swtr", colection:'w', name:"Sebastian", age:57, img:"/Imgs/List/modelo6.png"},
  {id: 7, type:"scf",  colection:'f',name:"Roberto", age:17, img:"/Imgs/List/modelo-b1.png"},
  {id: 8, type:"scf",  colection:'w',name:"Martin", age:32, img:"/Imgs/List/modelo-b2.png"},
  {id: 9, type:"scf",  colection:'w',name:"Sebastian", age:57, img:'/Imgs/List/modelo-b3.png'},
];

let getProduct = new Promise ((res, rej)=>{
  setTimeout(() => {
    res(productos1)
  }, 3000);
});



function ItemListContainer() {
  
  let param = useParams()



  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true)
  


 
  useEffect(() => {
    if (loading) {
      setLoading(true)
    }

    
    getProduct
    .then(resp=>{
      if (param.type === "f" || param.type === "w" ) {
        setProductos(resp.filter(r=>r.colection===param.type)) 
      }else if (param.type === "swtr" || param.type === "scf" ){
        setProductos(resp.filter(r=>r.type===param.type)) 
      }else{
        setProductos(resp)
      }
      
      setLoading(false)})
  },[param])

  return (

    <div className={loading ? "ilc-c2 pt-3" :"ilc-c pt-3" }>
      { loading ? 
      <Loading/>
      :
      <ItemList productos={productos}/>
      }
    </div>
  )
}

export default ItemListContainer