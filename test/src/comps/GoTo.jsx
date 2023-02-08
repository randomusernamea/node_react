import React from "react";
import { Link } from "react-router-dom";
import './GoTo.css'


function GoTo(params){
    return (
        <Link to={params.link}>
            <p>{params.text}</p>
        </Link>
    )
}



export default GoTo;