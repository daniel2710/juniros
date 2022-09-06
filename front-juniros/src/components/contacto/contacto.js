import React from "react";

export default function Contacto() {
    return (
        
            <div id="contacto" class="contacto">
                <h2 class="contacto-title">Contacto</h2>
                <div class="content-contacto">

                    <div class="bg">
                        <div class="container">
                            <form class="formulario" action="#">
                                <fieldset>
                                    <div class="contenedor_campos">
                                        <div class="campo">
                                            <label class="campo__label" for="nombre">Nombre:</label>
                                            <input class="campo__field" type="text" placeholder="Ingrese su nombre" id="nombre" />
                                        </div>
                                        <div class="campo">
                                            <label class="campo__label" for="nombre">Telefono:</label>
                                            <input class="campo__field" type="number" placeholder="Ingrese su telefono" id="telefono" />
                                        </div>
                                        <div class="campo">
                                            <label class="campo__label" for="email">Correo:</label>
                                            <input class="campo__field" type="email" placeholder="Ingrese su correo" id="email" />
                                        </div>

                                        <div class="campo">
                                            <label class="campo__label" for="mensaje">Mensaje:</label>
                                            <textarea class="campo__tabla" name="mensaje" id="mensaje" cols="30" rows="10"
                                                placeholder="Ingrese su mensaje"></textarea>
                                        </div>
                                        <div class="enviar">
                                            <input type="submit" value="Enviar" class="boton" />
                                        </div>

                                        <div class="icon-redes">
                                            <a href="#"> <i class='bx bxl-facebook-circle icon-faceb'></i> </a>
                                            <a href="#"> <i class='bx bxl-instagram-alt icon-inst'></i> </a>
                                            <a href="#"> <i class='bx bxl-whatsapp icon-what'></i> </a>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                )
}