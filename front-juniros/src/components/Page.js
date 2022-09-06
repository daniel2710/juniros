import React from "react";
import { Switch, Route} from "react-router-dom";
import contactoPage from "./page/contacto/contactoPage";
import Inicio from "./page/inicio";
import { nosotrosPage } from "./page/nosotros/nosotrosPage";
import { ProductosList } from "./page/productos";
import {CompraPage} from "././page/compra/CompraPage"
import { ProductosDetalles } from "./page/productos/ProductosDetalles";

export default function Page() {
  return (
    <section>
      <Switch>
				<Route path="/" exact component={Inicio} />
				<Route path="/productos" exact component={ProductosList} />
        <Route path="/nosotros" exact component={nosotrosPage} />
        <Route path="/contacto" exact component={contactoPage} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
        <Route path="/compra" exact component={CompraPage} />
			</Switch>
    </section>
  );
}
