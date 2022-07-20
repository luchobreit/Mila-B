import "./Loading.css"
import Lottie from 'react-lottie';
import * as pandaAnimation from "./cute-cat"
const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: pandaAnimation.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

function Loading({}) {   
    return (
        <div>
             <Lottie options={defaultOptions} height={400} width={400}/> 
            <h2>Cargando...</h2>
        </div>
    )
}

export default Loading
