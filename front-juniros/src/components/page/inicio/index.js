import React, { useContext } from "react";
import banner from "../../../images/banner3.png";
import { DataContext } from "../../../context/DataProvider";
import { ProductoItem } from "../productos/ProductoItem";
import Slider from "components/slider/slider";
import Ofertas from "components/ofertas/Ofertas";
import Nosotros from "components/nosotros/Nosotros";
import Contacto from "components/contacto/contacto";
import Footer from "components/footer/Footer";


export default function Inicio() {
    const value = useContext(DataContext);
    const [productos] = value.productos;
    return (
        <div>
            <section className="home" id="home">
                <div className="home-text">
                    <span>Una delicia en tu paladar</span>
                    <h1>
                        Nueva llegada de <br />
                        productos frescos
                    </h1>
                    <a href="#" className="btnn">
                        Compra ahora
                    </a>
                </div>
                <div className="home-img">
                    <img src={banner} alt="banner" className="banner-img" />
                </div>
            </section>
            <div className="heading">
                <h1>
                    Productos <span>populares</span>
                </h1>
            </div>

            <div className="productos">
                {productos.slice(0, 3).map((producto) => (
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
                <Slider/>
                <Ofertas />
                <Nosotros /> 
                <Contacto />     
                <Footer />

            
        </div>
    );
}
