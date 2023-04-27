import React from 'react';
import  Item from'../Item/Item.jsx'


export const Itemlist = ({productos}) => {
    console.log(productos)
    return (
        <>
            {productos.map(producto => <Item key={producto.id} item ={producto}/>)}
        </>
    );
}

export default Itemlist;
