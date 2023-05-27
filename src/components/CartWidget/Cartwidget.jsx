import { useCarritoContext } from "../../context/CartContext.js"
import { Link } from "react-router-dom"

const carrito= require.context ('../../../public/img', true);
export const CartWidget = () => {
  const { getItemQuantity } = useCarritoContext()
  return (
    <>
      
        <Link to={"/cart"} className="nav-link">
        
        <img src={carrito('./carrito.png')} alt={"imagenDeCarrito"} />
          {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
        </Link>
      

    </>
  )
}