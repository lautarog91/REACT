import React from 'react';

export const Cartwidget = ({cantCarrito}) => {
    return (
        <div>
            <p>Carrito</p>
            <p> {cantCarrito} </p>
        </div>
    );
}

export default Cartwidget;
