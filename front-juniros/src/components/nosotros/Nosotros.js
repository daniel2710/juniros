import React from "react";
import nosotros from "../../images/nosotros.JPG"

export default function Nosotros() {
    return(
        <>
        <h2 id="nosotros" class="nosotros-title">Sobre nosotros</h2>
        <section class="nosotros">
    <img src={nosotros} alt="" class="nosotros-img"/> 
    <p class="nosotros-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, totam non. Magni suscipit
      mollitia iusto magnam! Impedit consectetur inventore velit, exercitationem, explicabo accusantium reiciendis optio
      animi libero saepe alias facilis.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cum impedit excepturi ab delectus at autem possimus
      consequuntur, cupiditate nihil aliquid obcaecati quia perferendis, dicta natus! Quibusdam pariatur deleniti
      tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum commodi quod doloribus iure
      accusantium dolorem, tempora, ullam temporibus officia fugit perferendis consectetur delectus adipisci magni
      quaerat pariatur optio doloremque. Cumque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
      consequatur?</p>
    <a href="#" class="btnn">Ver mas</a>
  </section>
        </>
    )
}