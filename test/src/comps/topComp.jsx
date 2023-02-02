import { useState, useEffect } from "react";
import React from "react";
import API from "../API/rule_API";
import { getDeportista } from "../API/rule_deportistas";
import './topComp.css'
import img from './images/logoSenpai.png'


function TopComp(){
    return (
        <div id="topComp">
            <div id="home-button"><p id="home-p">Home</p></div>
            <img id="img-senpai" alt="Img Logo Senpai" src={img}/>
        </div>
    )
}

export default TopComp