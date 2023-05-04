import { useState } from "react";

import React from 'react';

const Usecount = (valInicial=1,min,max) => {

    if(valInicial<min||valInicial>max){valInicial=min}
    const [count,setcount]=useState(valInicial)
    const sum=()=>count<max && setcount(count+1)
    const minus=()=>count>min && setcount(count-1)
    const reset=()=>setcount(valInicial)
    return {count,sum,minus,reset};
}

export default Usecount;
