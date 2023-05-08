import React from 'react';
import Itemcount from '../itemcount/itemcount'
import '../App.css'

const ItemDetail = ({item}) => {
    return (
        <div className='row g-0'>
            <div className='col-md-4'>
                <img src={item.img} alt={`imagen de ${item.producto}`} className='img-fluid rounded-start' />
            </div>
            <div className='col-md-8'>
                <div className='card-body'>
                    <h5 className='card-title'>{item.producto} </h5>
                    <p className='card-text'>Producto:{item.producto} </p>
                    <p className="card-text">Marca:{item.marca} </p>
                    <p className="card-text">Precio:{item.precio} </p>
                    <Itemcount valInicial ={1} min={1} max={item.stock}> </Itemcount>
                </div>

            </div>
            
        </div>
    );
}

export default ItemDetail;
