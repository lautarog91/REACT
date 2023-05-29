import React from 'react';
import { useState,useEffect } from 'react';
import { ItemList} from '../itemlist/itemlist';
import { useParams } from 'react-router-dom';
import { useDarkModeContext } from '../../context/DarkModeContext.js';
import { getProducts } from "../../firebase/firebase.js"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"


export const ItemListContainer = () => {
const imgs= require.context ('../../../public/img', true);
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
            {(parseInt(category)===1)? <h3>Articulos</h3> : <></> }
            {(parseInt(category)===2)? <h3>Pelotas</h3> : <></> }
            {(parseInt(category)===3)? <h3>Maquinas</h3> : <></> }
            {(category)? <></> : 
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={imgs('./entrenamientobarra.jpg')}class="d-block w-80" alt={"entrenamiento-barra"} />
                    </div>
                    <div class="carousel-item">
                        <img src={imgs('./entrenamientoPadle.jpg')} class="d-block w-80" alt="entrenamiento-padle"></img>
                    </div>
                    <div class="carousel-item">
                        <img src={imgs('./entrenamientoBasquet.jpg')} class="d-block w-80" alt="entrenamiento-basquet"></img>
                    </div>
        
                    <div class="carousel-item">
                        <img src={imgs('./entrenamientoBoxeo.jpg')} class="d-block w-80" alt="entrenamiento-boxeo"></img>
                    </div>

                    <div class="carousel-item">
                        <img src={imgs('./entrenamientoPesarusa.jpg')} class="d-block w-80" alt="entrenamiento-pesarusa"></img>
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>       
            </div>
    }
    {<ItemList productos={productos} plantilla={"Item"} />}
    </div>
    
    );
}


