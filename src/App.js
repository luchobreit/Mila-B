import './App.scss';
import Home from './components/home/Home';
import NavbarComponent from './components/Navbar/NavbarComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ItemListContainer from './container/ItemList/ItemListContainer';
import ItemDetailContainer from './container/ItemDetail/ItemDetailContainer';
import { CartContextProvider } from './Context/CartContext';
import Cart from './components/Cart/Cart';
import CartItem from './components/Cart/CartItem';




function App() {
  return (

    <div className="App bg-primary" >
      <CartContextProvider>

        <Router>
          <NavbarComponent/>

          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/category/:type' element={<ItemListContainer/>}/>
            <Route exact path ='/product/:id' element={<ItemDetailContainer/>}/>
            <Route exact path='/cartI' element={<CartItem/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
          </Routes>

        </Router>

      </CartContextProvider>
    </div>
  );
}

export default App;
