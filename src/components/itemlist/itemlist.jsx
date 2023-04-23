import React from 'react';
import  Item from'../item/item'


export const Itemlist = ({productos}) => {
    console.log(productos)
    return (
        <>
            {productos.map(producto => <Item key={producto.id} item ={producto}/>)}
        </>
    );
}

export default Itemlist;
