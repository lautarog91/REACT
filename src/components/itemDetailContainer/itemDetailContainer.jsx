import { useState,useEffect } from "react";
import ItemDetail from '../itemDetail/itemDetail.jsx';
import { useParams } from "react-router-dom";

import React from 'react';

const ItemDetailContainer = () => {

const[Item,setItem]=useState([])
const {id}=useParams
useEffect(()=>{
    fetch('../JSON/productos.json')
    .then(Response=>Response.json())
    .then(productos=>{
        const prod =productos.find(prod=>prod.id===parseInt(id))
        setItem(prod)
    })

},[])


    return (
        <div class="card mb-3 container itemDetail">
            <ItemDetail item={Item} />
            
        </div>
    );
}

export default ItemDetailContainer;
