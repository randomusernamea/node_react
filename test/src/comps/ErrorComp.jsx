import React from "react";
import {useEffect} from 'react';
import { useNavigate } from "react-router";

function ErrorComp(props) {
    const navigate = useNavigate();
    useEffect(() => {
        waitThenNavigate();
    }, []);
    const waitThenNavigate = () => {
        setTimeout(() => {  navigate("/") }, 1000);
    }

    return (
        <div><h1>{props.text}</h1>
        <p>Redirecting to home page...</p></div>
    )
}


export default ErrorComp