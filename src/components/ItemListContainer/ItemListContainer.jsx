import React from 'react';
import { useState,useEffect } from 'react';
import { ItemList} from '../itemlist/itemlist';
import { useParams } from 'react-router-dom';
import { useDarkModeContext } from '../../context/DarkModeContext.js';
import { getProducts } from "../../firebase/firebase.js"
export const ItemListContainer = () => {
const[productos,setproductos]=useState([])
const { category}=useParams()
const {darkMode}=useDarkModeContext()

useEffect(() => {

    if (category) { 
    getProducts()
        .then(productos => {
        const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category))
        setproductos(productosFiltrados)

        })
    } else {
    getProducts()
        .then(productos => {
        const productosFiltrados = productos.filter(prod => prod.stock > 0)
        setproductos(productosFiltrados)

        })
    }

}, [category])

    
    
    return (
        <div className="row">
    {<ItemList productos={productos} plantilla={"Item"} />}
    </div>
    );
}


