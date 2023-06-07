import React from 'react';
import { useParams } from 'react-router-dom';
import { Link,useNavigate } from 'react-router-dom';
export const Footer = () => {
    
    return (
        <div className='divContacto'>

            <div className='divImg'>
            <h3 className='Buscanos'>Buscanos</h3>
            <a href="https://www.linkedin.com/in/lautaro-galicchio/"><img className='linkedin' src="../img/linkedin.png" alt="imagen linkdn" /></a>     
            <a href="https://github.com/lautarog91"><img className='github' src="../img/github.png" alt="imagen github" /> </a>
            </div> 


            <div className='divDirecc'>
                <h4 className='contactoMail'>Mail : lau_g50@hotmail.com</h4>
                <h4 className='contactoTelefono'>Tel: 54 2215594607</h4>
            </div>

            
        </div>
    );
}

export default Footer;
