import React from 'react';
import { useState } from 'react';

const Count = () => {
    const [contador,setcontador]=useState(1)
    const sum =()=>setcontador(contador+1)
    const res=()=>setcontador(contador-1)
    return (
        <div>
            <button onClick={()=>res()}>-</button>
            {contador}
            <button onClick={()=>sum()}>+</button>
        </div>
    );
}

export default Count;
