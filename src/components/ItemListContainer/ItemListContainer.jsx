import React from 'react';
import { useState,useEffect } from 'react';
import { ItemList} from '../itemlist/itemlist';
import {Footer} from '../Footer/Footer'
import { useParams } from 'react-router-dom';

import { getProducts } from "../../firebase/firebase.js"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import CarouselComponent from '../CarouselComponent/CarouselComponent.jsx';

export const ItemListContainer = () => {

const[productos,setproductos]=useState([])
const { category}=useParams()


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
        <>
            {(parseInt(category)===1) &&  <img className='articulos' src='../img/imgarticulos.jpg' alt='imgArticulos'   />
                }
            {(parseInt(category)===2)&& <img className='pelotas' src='../img/imgpelotas.jpg' alt='pelotas'   />  }
            {(parseInt(category)===3) && <img className='maquinas' src='../img/imgmaquinas.jpg' alt='maquinas'   /> }
            {(category)? <></> : 
            <Container>
        <CarouselComponent />
        </Container>
            }
        <div className="row">    
    {<ItemList productos={productos} plantilla={"Item"} />}
    </div>
    <div >
        {<Footer />}
    </div>
    </>
    );
}


