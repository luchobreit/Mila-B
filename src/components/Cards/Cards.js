import "./Cards.scss";
import { Link } from "react-router-dom";
import Typical from 'react-typical'



function Cards() {



  return (
    <div className="c-card" id="cards">
      <div className="ti-container">
        <div className="card-container">
          <Link to="/category/swtr"><img src="Imgs/Cards-img/chica1.jpg"  alt="chica1" className="card-img" /></Link>
          <div className="card-t-c">
            <h3>Mila for <label className="card-txt1">Her</label></h3>
          </div>
        </div>


        <div className="card-container">
          <Link to="/category/swtr"><img src="Imgs/Cards-img/chico1.jpg" alt="chico1" className="card-img card-img2" /></Link>
          <div className="card-t-c">
            <h3>Mila for <label className="card-txt2">Him</label></h3>
          </div>
        </div>


        <div className="card-container">
        <Link to="/category/swtr"><img src="Imgs/Cards-img/chicas1.png" alt="chico1" className="card-img card-img2" /></Link>
          <div className="card-t-c">
            <h3>Mila for <label className="card-txt3">Them</label></h3>
          </div>
        </div>          
      </div>

            
      <div className="just-us bg-warning">
          <div className="text-us">
            <h1 className="texto-us1">Just
            <br />
            <Typical
              steps={['sweaters', 3500,'mila...', 3500]}
              loop={Infinity}
              wrapper="p"
            /></h1>
          </div>
      </div>  
    </div>
  )
}

export default Cards