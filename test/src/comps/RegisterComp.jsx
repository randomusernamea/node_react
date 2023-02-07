import React from "react";
import './LoginComp.css';
import {useState} from 'react'
import { registrarUsuario } from "../API/rule_Registrar";
import { useNavigate } from "react-router";


function RegisterComp() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const [permisos, setPermisos] = useState("")
    const onChangeValueUsuario = (e) => {
        setUsuario(e.target.value);
      };
    const onChangeValuePassword = (e) => {
        setPassword(e.target.value);
      };
    const onChangeValuePermisos = (e) => {
        setPermisos(e.target.value);
      };

      const onSubmitRegister = (e) => {
        e.preventDefault();
        console.log(e)
        const user = {username: usuario, password: password, permisos: permisos}
        registrarUsuario(user).then((response) => {
            navigate("/login")
        })
        
    }
    return (
        <form className = "formSubmit" onSubmit={onSubmitRegister} method="post">
            <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="usuario">Usuario</label>
                <input className = "formInput" onChange={onChangeValueUsuario} value={usuario} required placeholder = "Usuario" type ="text" name="Usuario"/></div>
                
            <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="password">Password</label>
                <input className = "formInput" onChange={onChangeValuePassword} value={password} required placeholder = "Password" type ="password" name="Password"/></div>
                
            <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="permisos">Permisos</label>
                <input className = "formInput" onChange={onChangeValuePermisos} value={permisos} required placeholder = "Permisos" type ="text" name="Permisos"/></div>
                
                <button id="btnRegistrar" type="submit">
                    Registrar
                </button>
        </form>
    )
}


export default RegisterComp