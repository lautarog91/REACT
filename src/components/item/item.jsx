import React from 'react';

const Item = ({item}) => {
    return (
        <div className="card" style={{width: '18rem'}}>
        <img src={item.img} className="card-img-top" alt={`Imagen de ${item.producto} `} />
        <div className="card-body">
          <h5 className="card-title">{item.producto} </h5>
          <p className="card-text">{item.marca} </p>
          <p className="card-text">{item.stock} </p>
          
        </div>
    </div>
    );
}

export default Item;
