import React from "react";
import {useEffect} from 'react';
import { useNavigate } from "react-router";

function ErrorComp() {
    const navigate = useNavigate();
    useEffect(() => {
        waitThenNavigate();
    }, []);
    const waitThenNavigate = () => {
        setTimeout(() => {  navigate("/") }, 1000);
    }

    return (
        <div><h1>404 page not found</h1>
        <p>Redirecting to home page...</p></div>
    )
}


export default ErrorComp