
import './App.css' 
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { NavBar} from './Navbar/navBar.jsx';
import { ItemListContainer}  from './ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer} from './itemDetailContainer/itemDetailContainer';
import { Checkout } from './Checkout/Checkout'

import { Cart } from './Cart/Cart';
import { createProducts } from '../firebase/firebase.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App=()=> {
//createProducts()
  return ( <>
  <BrowserRouter>
  
    <NavBar/>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/category/:category' element={<ItemListContainer/>} />
      <Route path='/product/:id' element={<ItemDetailContainer/>} />
      <Route path='/Checkout'element={<Checkout/>}></Route>
      
      <Route path='/cart' element={<Cart />} />
      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
    
  </BrowserRouter>

  </>
  );
}

export default App;
