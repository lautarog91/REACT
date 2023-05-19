import { useRef } from "react"
import { useCarritoContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
export const Checkout = () => {

    const datForm = useRef() 
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    const consultarForm = (e) => {
    
        e.preventDefault()
        console.log(datForm)
        const datosFormulario = new FormData(datForm.current) 
        const cliente = Object.fromEntries(datosFormulario) 
        console.log(cliente)
        e.target.reset() 
    }
    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <h2>Para finalizar compra debe tener productos en el carrito</h2>
                        <Link className="nav-link" to={"/"}><button className="btn btn-danger">Continuar comprando</button></Link>
                    </>
                    :
                    <div className="container divForm" >
                        <form onSubmit={consultarForm} ref={datForm}>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                                <input type="text" className="form-control" name="nombre" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Repetir Email</label>
                                <input type="email" className="form-control" name="emailRepetido" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dni" className="form-label">DNI</label>
                                <input type="number" className="form-control" name="dni" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="celular" className="form-label">Numero telefonico</label>
                                <input type="number" className="form-control" name="celular" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="direccion" className="form-label">Direccion</label>
                                <input type="text" className="form-control" name="direccion" />
                            </div>
                            <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                        </form>
                    </div>

            }

        </>

    )
}
