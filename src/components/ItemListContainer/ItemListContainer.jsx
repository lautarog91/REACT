import React from 'react';
import { useState,useEffect } from 'react';
import Itemlist from '../itemlist/itemlist.jsx';
import { useParams } from 'react-router-dom';
const BDD=[
    {
        "id":1,
        "idCategoria":1,
        "producto":"Guantes",
        "marca":"Everlast",
        
        "precio":"$33000",
        "stock":32,
        "img":"/img/guantes300x300.jpg"},
    
        {
            "id":2,
            "idCategoria":1,
            "producto":"Soga",
            "marca":"Everlast",
            
            "precio":"$4000",
            "stock":32,
            "img":"/img/soga300x300.jpg"},
    
            {
                "id":3,
                "idCategoria":1,
                "producto":"Bolsa de boxeo",
                "marca":"Fight-tech",
                
                "precio":"$35000",
                "stock":32,
                "img":"/img/bolsabox300x300.jpg"},
    
    
                {
                    "id":4,
                    "idCategoria":1,
                    "producto":"Mancuernas",
                    "marca":"Pro-train",
                    
                    "precio":"$30000",
                    "stock":32,
                    "img":"/img/mancuernas300x300.jpg"},
    
                    {
                        "id":5,
                        "idCategoria":1,
                        "producto":"Pesa rusa",
                        "marca":"Pro-train",
                        
                        "precio":"$3000",
                        "stock":32,
                    "img":"/img/pesarusa300x300.jpg"},
    
                        {
                            "id":6,
                            "idCategoria":1,
                            "producto":"Barra olimpica + 50 kg",
                            "marca":"Rouge",
                            
                            "precio":"$150000",
                            "stock":32,
                            "img":"/img/barraolimp300x300.jpg"}

]
export const ItemListContainer = () => {
const[productos,setproductos]=useState([])
const { category}=useParams()
useEffect (()=>{
    if(category){
        fetch('/JSON/productos.json')
        .then(response=>response.json())
        
        .then (productos=>{
            const productosFiltrados=productos.filter(prod=>prod.stock>0).filter(prod=>prod.idCategoria===parseInt(category))
            const items=< Itemlist productos={productosFiltrados}/>
            setproductos(items)})
            .catch(error=>console.error(error))
    }
    else{
fetch('/JSON/productos.json')
.then(response=>response.json())

.then (productos=>{
    const productosFiltrados=productos.filter(prod=>prod.stock>0)
    const items=< Itemlist productos={productosFiltrados}/>
    setproductos(items)})
    .catch(error=>console.error(error))
}

},[category]
)

    
    
    return (
        <div className='row'>
            {productos}
            
        </div>
    );
}

export default ItemListContainer;
