import React, {useState} from 'react';


export const themeContext=React.createContext()
const GeneralContext = () => {
    return (
        <themeContext.Provider>
            
        </themeContext.Provider>
    );
}

export default GeneralContext;
