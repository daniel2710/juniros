import React, { useContext} from "react";
import { DataContext } from "context/DataProvider";
import { Link } from "react-router-dom";
import {useAuth0} from '@auth0/auth0-react'
import { LogoutButton } from "./logout/Logout";
import { Perfil } from "./perfil/Perfil";
import { Login2 } from "./login2/Login2";


export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;
  const [user, setUser] = value.user;
  //const {loginWithRedirect, isAuthenticated} = useAuth0();

  const toogleMenu = () =>{
    setMenu(!menu)
  }

  const handleLogin = () => {
    setUser(!user)
  }
 

  return (
    <header>
      <div className="menu">
      <box-icon name="menu"></box-icon>
      </div>
      <Link to="/">
      <div className="logo">
      <a href="/" class="logo">Juniro's Arequipe</a>
      </div>
      </Link>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/productos">PRODUCTOS</Link>
        </li>
        <li>
          <Link to="/nosotros">NOSOTROS</Link>
        </li>
        <li>
          <Link to="/contacto">CONTACTO</Link>
        </li>
      </ul>
      <div className="cart">
        <box-icon onClick={toogleMenu} name="cart"/>
        

        

        
          
         <box-icon onClick={handleLogin} name="user" /> 
        
        <span className="item__total"> {carrito.length} </span>
        
      </div>
    </header>
  );
};
