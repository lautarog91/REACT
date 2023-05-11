import React from 'react';
import { useState,useEffect } from 'react';
import Itemlist from '../itemlist/itemlist.jsx';
import { useParams } from 'react-router-dom';
import { useDarkModeContext } from '../../context/DarkModeContext.js';
export const ItemListContainer = () => {
const[productos,setproductos]=useState([])
const { category}=useParams()
const {darkMode}=useDarkModeContext()
console.log(darkMode)
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
