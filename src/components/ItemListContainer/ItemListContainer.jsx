import React from 'react';
import { useState,useEffect } from 'react';
import Itemlist from '../itemlist/itemlist';
const BDD=[
    {
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

]
export const ItemListContainer = () => {
const[productos,setproductos]=useState([])
useEffect (()=>{
const promesa=()=>
new Promise((resolve, reject) => {
    
    if (true){resolve(BDD)}
    reject("No posee permisos necesarios")
})
promesa(true)
.then (productos=>{
    const items=< Itemlist productos={productos}/>
    setproductos(items)})
    .catch(error=>console.error(error))

},[]
)

    
    
    return (
        <div className='row'>
            {productos}
            
        </div>
    );
}


