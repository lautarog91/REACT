import { useCarritoContext } from "../../context/CartContext.js"
import { Link } from "react-router-dom"


export const CartWidget = () => {
  const { getItemQuantity } = useCarritoContext()
  return (
    <>
      
        <Link to={"/cart"} className="nav-link">
        
        <img className="imgCarrito" src='../img/carrito.png' alt={"imagenDeCarrito"} />
          {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
        </Link>
      

    </>
  )
}