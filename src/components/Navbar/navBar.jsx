import React from 'react'
import { Cartwidget } from '../CartWidget/Cartwidget.jsx' 
import {Link} from 'react-router-dom'
export const NavBar = () => {
  return (  
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-danger ">
  <div className="container-fluid">
  <li className='nav-item'>
    <Link className='nav-link'to={"/"}><button className='btn btn-secondary'>Super Tienda deportiva.
      </button>
      </Link>
  </li>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className='nav-item'>
    <Link className='nav-link'to={"/category/1"}><button className='btn btn-secondary'>Articulos
      </button>
      </Link>
  </li>
  <li className='nav-item'>
    <Link className='nav-link'to={"/category/2"}><button className='btn btn-secondary'>Pelotas
      </button>
      </Link>
  </li>
  <li className='nav-item'>
    <Link className='nav-link'to={"/category/3"}><button className='btn btn-secondary'>Maquinas
      </button>
      </Link>
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