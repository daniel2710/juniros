import React, {useContext} from "react";
import { DataContext } from "../../context/DataProvider";
import { ProductoItem } from "../page/productos/ProductoItem";



export default function Ofertas() {
    const value = useContext(DataContext);
    const [productos] = value.productos;
    return(
        <div className="content-ofertas">
        <h2 className="ofertas-title">Oferta de la semana</h2>
        <div className="productos">
                {productos.slice(0, 1).map((producto) => (
                    <ProductoItem
                        key={producto.id}
                        title={producto.title}
                        image={producto.image}
                        category={producto.category}
                        price={producto.price}
                        id={producto.id}
                    />
                ))}
            </div>
        </div>
    )

}