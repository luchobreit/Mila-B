import "./Sections.scss"
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
function Sections() {
  AOS.init()
  return (
    <div className='sect-container bg-light pb-5'>
      <div className="container">
       <div className="row sect-container2">
         <div className="col-lg-4 sect-img " data-aos="fade-right"><img className="img-s-1" src="Imgs/Cards-img-2/sweater2.png" alt="Img1" /></div>
         <div className="col-lg-4 sect-txt sect-txt-1" data-aos="fade-up">
           <h1 className="h1-txt">Hola</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum enim fugiat, cum ducimus earum tempore labore dolor libero. Reiciendis aliquam beatae quam in quisquam quidem, aperiam non sed corporis dolores.</p> 
           </div>
         <div className="col-lg-4 sect-img" data-aos="fade-left"><img className="img-s-2" src="Imgs/Cards-img-2/sweater1.png" alt="hola" /></div>
       </div>
       <div className="row pt-3 sect-container3">
         <div className="col-lg-4 sect-txt sect-txt-2" data-aos="flip-up">
            <h1 className="h1-txt">Hola</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum enim fugiat, cum ducimus earum tempore labore dolor libero. Reiciendis aliquam beatae quam in quisquam quidem, aperiam non sed corporis dolores.</p> </div>
         <div className="col-lg-8 sect-img img-big-sect" data-aos="flip-down"><img src="Imgs/Cards-img-2/bufanda1.png" alt="bufanda" /></div>
       </div>
      </div>
    </div>
  )
}

export default Sections