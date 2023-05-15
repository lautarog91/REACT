import React from 'react'
import { CartWidget}  from '../CartWidget/Cartwidget.jsx' 
import {Link} from 'react-router-dom'
import { BotonDarkMode } from './BotonDarkMode/BotonDarkMode.jsx'
export const NavBar = () => {
  return (  
  <div>

<nav class="navbar navbar-expand-lg navbar-light bg-danger">
  <div class="container-fluid">
    <Link className='nav-link'to={"/"}><a class="navbar-brand" href="#">Super tienda deportiva</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link className='nav-link'to={"/category/1"}><a class="nav-link active" aria-current="page" href="#">Articulos</a></Link>
        </li>

        <li class="nav-item">
        <Link className='nav-link'to={"/category/2"}><a class="nav-link active" aria-current="page" href="#">Pelotas</a></Link>
        </li>

        <li class="nav-item">
        <Link className='nav-link'to={"/category/3"}><a class="nav-link active" aria-current="page" href="#">Maquinas</a></Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>

< CartWidget cantCarrito = {0} />
<BotonDarkMode/>
</div>
  )
}

