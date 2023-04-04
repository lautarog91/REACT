import React from 'react'
import { Cartwidget } from '../CartWidget/Cartwidget' 

export const NavBar = () => {
  return (  
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-danger ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Super tienda deportiva.</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Categorias</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Mujer</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Hombre</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Liquidacion</a>
        </li>

        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
          
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
    
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

< Cartwidget cantCarrito = {0} />
</div>
  )
}

export default NavBar