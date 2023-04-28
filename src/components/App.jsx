
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import NavBar from './Navbar/NavBar.jsx'
import  ItemListContainer  from './ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './itemDetailContainer/itemDetailContainer';
function App() {
  return ( <>
    
    <NavBar/>
    <ItemListContainer/>
    <ItemDetailContainer/>
    

  </>
  );
}

export default App;
