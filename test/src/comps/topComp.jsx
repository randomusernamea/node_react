import { useState, useEffect } from "react";
import React from "react";
import API from "../API/rule_API";
import { getDeportista } from "../API/rule_deportistas";
import './topComp.css'
import img from './images/logoSenpai.png'
import GoTo from "./GoTo"


function TopComp(){
    return (
        <div id="topComp">
            <div id="home-button"><p id="home-p">Home</p></div>
            <img id="img-senpai" alt="Img Logo Senpai" src={img}/>
            <GoTo link ="/addPlayer" text = "Agregar jugador"/>
            <GoTo link ="/registrar" text = "Registrar"/>
            <GoTo link ="/login" text = "Login"/>
            <GoTo link ="/uploadImage" text = "Subir Imagen"/>
        </div>
    )
}

export default TopComp