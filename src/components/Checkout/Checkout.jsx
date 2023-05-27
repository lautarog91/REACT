import { useRef } from "react"
import { useCarritoContext } from "../../context/CartContext"
import { Link , useNavigate } from "react-router-dom"

import { createOrdenCompra, getProduct, updateProduct } from "../../firebase/firebase"
import { toast } from "react-toastify"

export const Checkout = () => {

    const datForm = useRef() 
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    let navigate = useNavigate()

    const consultarForm = (e) => {
    
        e.preventDefault()
        console.log(datForm)
        const datosFormulario = new FormData(datForm.current) 
        const cliente = Object.fromEntries(datosFormulario) 
    
        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBBD => {
                if (prodBBD.stock >= prodCarrito.quantity) { 
                    prodBBD.stock -= prodCarrito.quantity
                    updateProduct(prodBBD.id, prodBBD) 
                } else {
                    console.log("El stock no es mayor o igual a la cantidad que se quiere comprar")
                }
            })
        })
        const aux2 = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, precio: prod.precio }));
        if (cliente.email !== cliente.repetirEmail) {
            toast(`❌ El email debe ser identico en ambos campos`, {
                position: "top-right",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        return;
        }

        if (cliente.nombre.length ===0 || cliente.apellido.length ===0 || cliente.email.length ===0 || cliente.repetirEmail.length ===0 || cliente.dni.length ===0
            || cliente.celular.length ===0 || cliente.pais.length ===0 || cliente.direcion.length ===0){

                toast(`❌ Falta completar campos obligatorios`, {
                    position: "top-right",
                    autoClose: 10000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        


        createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {

                toast(` 🛒 Muchas gracias por comprar con nosotros, su ID de compra es ${ordenCompra.id} por un total de ${totalPrice()}, en breve nos contactaremos para el envio`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                emptyCart()
                e.target.reset() 
                navigate("/") 
            })
            .catch(error => {
                console.error(error)
            })


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
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" name="nombre" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="apellido" className="form-label">Apellido</label>
                                <input type="text" className="form-control" name="apellido" required   />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" name="email"  required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="repetirEmail" className="form-label">Repetir Email</label>
                                <input type="email" className="form-control" name="repetirEmail"  required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dni" className="form-label">DNI</label>
                                <input type="number" className="form-control" name="dni"  required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="celular" className="form-label">Numero telefonico</label>
                                <input type="number" className="form-control" name="celular"  required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pais" className="form-label">Pais</label>
                                <input type="text" className="form-control" name="pais"  required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="direccion" className="form-label">Direccion</label>
                                <input type="text" className="form-control" name="direccion"  required/>
                            </div>
                            <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                        </form>
                    </div>

            }

        </>

    )
}
