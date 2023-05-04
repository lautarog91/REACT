import Usecount from '../../hooks/usecount'
import React from 'react';

const Itemcount = ({valInicial,min,max}) => {
    const{count,minus,sum,reset}=Usecount(1,1,32)


    return (
        <div>
            <button className="btn btn-dark" onClick={()=> minus()}>-</button>
            {count}
            <button className="btn btn-dark" onClick={()=> sum()}>+</button>

            <button className="btn btn-dark" onClick={()=> reset()}>Reset</button>

            <button className="btn btn-light" >Agregar al carro</button>
        </div>
    );
}

export default Itemcount;
