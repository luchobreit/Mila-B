import Item from "./Item"

const ItemList =({productos}) => {
    
  return (
      <>
       <div className="container">
          <div className="row">
              {productos.map (e => <Item producto={e} key={e.id}/>)}
          </div>
      </div>  
      </>      
  )
  }
export default ItemList