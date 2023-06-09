import {ItemCount} from "../itemcount/itemcount.jsx"
import { useCarritoContext } from "../../context/CartContext"
export const ItemDetail = ({ item }) => {
    const { addItem } = useCarritoContext()

    const onAdd = (contador) => { 
        addItem(item, contador)
    }

    return (
        <div className="row g-0" >
            <div className="detalle"><h3>Detalle del producto</h3></div>
            <div className="col-md-4">
                <img src={item.img} alt={`Imagen de ${item.producto}`} className="img-fluid rounded-start" id="imagenDetalle" />
            </div>
            <div className="col-md-8" id="cardDetalle">
                <div className="card-body">
                    <h5 className="card-title">{item.producto}</h5>
                    <p className="card-text">Marca: {item.marca}</p>
                    <p className="card-text">Precio: ${item.precio}</p>
                    <p className="card-text">Stock: {item.stock}</p>
                    <ItemCount ValInicial={1} min={1} max={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}