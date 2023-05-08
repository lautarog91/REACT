
import './App.css' 
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import NavBar from './Navbar/NavBar.jsx'
import  ItemListContainer  from './ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './itemDetailContainer/itemDetailContainer';

function App() {
  return ( <>
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/category/:category' element={<ItemListContainer/>} />
      <Route path='/product/:id' element={<ItemDetailContainer/>} />
    </Routes>
  </BrowserRouter>

  </>
  );
}

export default App;
