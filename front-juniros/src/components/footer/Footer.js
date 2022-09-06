import React from "react";



export default function Footer() {

    return (
        <>
            <footer class="footer">
                <div class="grupo1">
                    <div class="box">
                        <figure>
                            <a href="#" class="logo">Juniro's Arequipe</a>
                        </figure>
                    </div>
                    <div class="box">
                        <h2>SOBRE NOSOTROS</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum incidunt fuga molestiae ab impedit amet
                            corrupti aliquam vero sequi ratione.</p>

                        <a href="#">Mas sobre nosotros</a> <br/>
                            <a href="#">Contactanos</a> <br/>
                                <a href="#">Preguntas Frecuentes</a>
                            </div>
                            <div class="box">
                                <h2>SIGUENOS</h2>
                                <div class="icon-redes_">
                                    <a href="#"> <i class='bx bxl-facebook-circle icon-faceb'></i> </a>
                                    <a href="#"> <i class='bx bxl-instagram-alt icon-inst'></i> </a>
                                    <a href="#"> <i class='bx bxl-whatsapp icon-what'></i> </a>
                                </div>
                            </div>
                    </div>

                    <div class="grupo2">
                        <small> &copy; 2022 <b>By Juniro's Arequipe | SENA </b> Todos los derechos reservados</small>
                    </div>
            </footer>
        </>
    )

}