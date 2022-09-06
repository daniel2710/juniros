import React, { useContext } from 'react'
import { DataContext } from "context/DataProvider";

export const Login2 = () => {
    const value = useContext(DataContext);
	const [user, setUser] = value.user;


    const tooglefalsee = () => {
		setUser(false);
	};

    const show = user ? "user show" : "user";
  return (
     //Caja Usuario
    <div>
    <div className={user, show}>
      <h2>Iniciar sesión como administrador</h2>
      <input type="email" placeholder="Correo" />
      <input type="password" name="" id="" placeholder="Contraseña" />
      <input type="submit" value="Iniciar sesión" class="login-btn" />
      <p>¿Olvidaste tu Contraseña?<a href="#">Restablecela</a></p>
      <p>¿No tienes cuenta?<a href="/registro.html">Crea una</a></p>
    </div>
    </div>
  )
}
