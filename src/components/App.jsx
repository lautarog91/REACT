
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import NavBar from './Navbar/navBar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import  Itemlist from './itemlist/itemlist'
import  Item  from './item/item';
function App() {
  return ( <>
    
    <NavBar/>
    <Itemlist productos={[{
    "id":1,
    "idCategoria":1,
    "producto":"Guantes",
    "marca":"Everlast",
    
    "precio":"$33000",
    "stock":32,
    "img":"../img/guantes-modi-list.jpg"},

    {
        "id":2,
        "idCategoria":2,
        "producto":"Soga",
        "marca":"Everlast",
        
        "precio":"$4000",
        "stock":32,
        "img":"../img/soga-modi-list.jpg"},

        {
            "id":3,
            "idCategoria":3,
            "producto":"Bolsa de boxeo",
            "marca":"Fight-tech",
            
            "precio":"$35000",
            "stock":32,
            "img":"../img/bolsa-boxeo-modi-lista.jpg"},


            {
                "id":4,
                "idCategoria":4,
                "producto":"Mancuernas",
                "marca":"Pro-train",
                
                "precio":"$30000",
                "stock":32,
                "img":"../img/mancuernas-modi-list.jpg"},

                {
                    "id":5,
                    "idCategoria":5,
                    "producto":"Pesa rusa",
                    "marca":"Pro-train",
                    
                    "precio":"$3000",
                    "stock":32,
                "img":"../img/pesa-rusa-modi-list.jpg"},

                    {
                        "id":6,
                        "idCategoria":6,
                        "producto":"Barra olimpica + 50 kg",
                        "marca":"Rouge",
                        
                        "precio":"$150000",
                        "stock":32,
                        "img":"../img/barra-rogue-modi-list.jpg"}


    ]} />
    <Item/>
    <ItemListContainer/>

  </>
  );
}

export default App;
