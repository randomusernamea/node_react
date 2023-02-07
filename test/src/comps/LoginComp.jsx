import React from "react";
import './LoginComp.css';
import {useState} from 'react'
import { registrarUsuario } from "../API/rule_Registrar";

function LoginComp() {
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const onChangeValueUsuario = (e) => {
        setUsuario(e.target.value);
      };
    const onChangeValuePassword = (e) => {
        setPassword(e.target.value);
      };

      const onSubmitRegister = (e) => {
        console.log(e)
        const user = {usuario: usuario, password: password}
        registrarUsuario(user).then((response) => {
            localStorage.setItem("JSONToken", response.token)
        })
    }
    return (
        <form className = "formSubmit"onSubmit={onSubmitRegister}>
            <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="usuario">Usuario</label>
                <input className = "formInput" onChange={onChangeValueUsuario} value={usuario} required placeholder = "Usuario" type ="text" name="Usuario"/></div>
                
            <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="password">Password</label>
                <input className = "formInput" onChange={onChangeValuePassword} value={password} required placeholder = "Password" type ="password" name="Password"/></div>
              
                <button id="btnRegistrar" type="submit">
                    Login
                </button>
        </form>
    )
}


export default LoginComp