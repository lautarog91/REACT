
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import NavBar from './Navbar/navBar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className='App'>
    <NavBar/>
    <ItemListContainer greeting = {"Productos"}/>
    </div>
  );
}

export default App;
