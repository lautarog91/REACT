import React from 'react';
import { useState,useEffect } from 'react';
import { ItemList} from '../itemlist/itemlist';
import { useParams } from 'react-router-dom';
import { useDarkModeContext } from '../../context/DarkModeContext.js';
import { getProducts } from "../../firebase/firebase.js"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Carousel from 'react-bootstrap/Carousel';

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
            function ControlledCarousel() {
                const [index, setIndex] = useState(0);
              
                const handleSelect = (selectedIndex, e) => {
                  setIndex(selectedIndex);
                };
              
                return (
                  <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                      />
              
                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                      />
              
                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                );
              }
              
              render(<ControlledCarousel />); }
    {<ItemList productos={productos} plantilla={"Item"} />}
    </div>
    
    );
}


