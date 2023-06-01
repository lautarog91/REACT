import React from 'react';
import { useState,useEffect } from 'react';
import { ItemList} from '../itemlist/itemlist';
import { useParams } from 'react-router-dom';
import { useDarkModeContext } from '../../context/DarkModeContext.js';
import { getProducts } from "../../firebase/firebase.js"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import CarouselComponent from '../CarouselComponent/CarouselComponent.jsx';
import articulosSoft  from './img/articulosSoft.jpg';
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
    }
    
    else {
    getProducts()
        .then(productos => {
        const productosFiltrados = productos.filter(prod => prod.stock > 0)
        setproductos(productosFiltrados)

        

        })
    }

}, [category])

    
    
    return ( 
        <div className="row">
            {(parseInt(category)===1)? <img src='../../../public/img/articulosSoft.jpg' alt='imgArticulos'   /> : <></> }
            {(parseInt(category)===2)? <h3>Pelotas</h3> : <></> }
            {(parseInt(category)===3)? <h3>Maquinas</h3> : <></> }
            {(category)? <></> : 
            <Container>
        <CarouselComponent />
        </Container>
            }
    {<ItemList productos={productos} plantilla={"Item"} />}
    </div>
    
    );
}


