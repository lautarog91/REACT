
import './App.css' 
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import NavBar from './Navbar/navBar.jsx';
import  ItemListContainer  from './ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './itemDetailContainer/itemDetailContainer';
import { Checkout } from './Checkout/Checkout'
import { DarkModeProvider } from '../context/DarkModeContext'
function App() {
  return ( <>
  <BrowserRouter>
  <DarkModeProvider>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/category/:category' element={<ItemListContainer/>} />
      <Route path='/product/:id' element={<ItemDetailContainer/>} />
      <Route path='/Checkout'element={<Checkout/>}></Route>
    </Routes>
    </DarkModeProvider>
  </BrowserRouter>

  </>
  );
}

export default App;
