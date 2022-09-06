import React, { useContext, useRef, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { DataContext } from "context/DataProvider";
import emailjs from "@emailjs/browser";
import axios from "axios";

//const URI = "http://localhost:8000/compra/";

export const Compra = () => {
  const value = useContext(DataContext);
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;

  const [producto, setProducto] = useState({
    title: '',
    price: '',
    cantidad: 0
  })
  
  // Procedimiento enviar datos a la base de datos
  const obj = Object.assign({}, carrito);
  // console.log(JSON.stringify(obj));
   console.log(carrito);


 /* useEffect(() => {

  
   
    
   
  }, [])*/
  
 /* const handleSubmit =  () => {
     axios.post(URI, JSON.stringify (value.carrito));
    console.log("esto es lo que hay en BSSS " +  JSON.stringify (value.carrito) );
  };*/

  const handleSubmit =async(e)=>{
    e.preventDefault()
    await axios.post("http://localhost:8000/compra/", carrito)
    .then(response=>{
      console.log(response);
      console.log(response.data);
    })

      //console.log("esto es lo que hay en BSSS " +  JSON.stringify(value.carrito) );
  }
  
  

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8tpoj8a",
        "template_scyz6dn",
        form.current,
        "GQqteDc3aLIZ7lJuV"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("mensaje enviado");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="py-4">
        <Typography variant="h4" gutterBottom>
          Informacion de envio.
        </Typography>
        <form ref={form} onSubmit={ handleSubmit }>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <div className="campo">
                <label className="campo__label" id="userName" htmlFor="NomForm">
                  Nombre:
                </label>
                <input
                  className="campo__field"
                  type="text"
                  name="user_name"
                  placeholder="Ingrese su nombre"
                  id="nombre"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="campo">
                <label className="campo__label" id="userNum" htmlFor="TelForm">
                  Telefono:
                </label>
                <input
                  className="campo__field"
                  type="number"
                  name="user_num"
                  placeholder="Ingrese su telefono"
                  id="telefono"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="campo">
                <label className="campo__label" id="userEmail" htmlFor="EmailForm">
                  Correo:
                </label>
                <input
                  className="campo__field"
                  type="email"
                  name="user_email"
                  placeholder="Correo"
                  id="correo"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="campo">
                <label
                  className="campo__label"
                  id="userAddress"
                  htmlFor="addresForm"
                >
                  Direccion:
                </label>
                <input
                  className="campo__field"
                  type="text"
                  name="user_address"
                  placeholder="Ingrese su direccion"
                  id="direccion"
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className="campo">
                <label className="campo__label" id="userCity" htmlFor="cityForm">
                  Ciudad:
                </label>
                <input
                  className="campo__field"
                  type="text"
                  name="user_city"
                  placeholder="Ciudad"
                  id="ciudad"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="campo">
                <label
                  className="campo__label"
                  id="userBarrio"
                  htmlFor="BarrioForm"
                >
                  Barrio:
                </label>
                <input
                  className="campo__field"
                  type="text"
                  name="user_barrio"
                  placeholder="Barrio"
                  id="Barrio"
                />
              </div>
            </Grid>

            <div classNameName="col-md-5 tabla">
              <table classNameName="table table-bordered">
                <thead>
                  <tr>
                    <th> </th>
                    <th width="50%">Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.map((producto) => {
                    return (
                      <tr key={producto.id}>
                        <td>
                          {" "}
                          {/* <img
                            style={{ width: "55%" }}
                            src={producto.image}
                          />{" "} */}
                        </td>
                        <td> {producto.title} </td>
                        <td> $ {producto.price} </td>
                        <td> {producto.cantidad} </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td style={{ alignItems: "flex-end", display: "flex" }}>
                      {" "}
                      $ {total}{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Grid item xs={12} sm={8}>
              <button type="submit"> Comprar </button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};
