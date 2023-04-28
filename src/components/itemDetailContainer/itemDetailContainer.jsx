import { useState,useEffect } from "react";
import ItemDetail from './itemDetail/itemDetail.jsx'

import React from 'react';

const ItemDetailContainer = () => {

const[Item,setItem]=useState([])
useEffect(()=>{
    fetch('./JSON/productos.json')
    .then(Response=>Response.json())
    .then(productos=>{
        const prod =productos.find(prod=>prod.id===1)
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
