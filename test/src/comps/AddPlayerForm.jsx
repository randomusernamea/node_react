import React from "react";
import './AddPlayerForm.css'
import {useState} from 'react';
import { registrarDeportista } from "../API/rule_Crear";

function AddPlayerForm(){
    const [id, setId] = useState("")
    const [nombre, setNombre] = useState("")
    const [especialidad, setEspecialidad] = useState("")
    const [edad, setEdad] = useState("")
    const [altura, setAltura] = useState("")
    const [peso, setPeso] = useState("")
    const [nacionalidad, setNacionalidad] = useState("")
    const [record, setRecord] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [energia, setEnergia] = useState("")
    const [fuerza, setFuerza] = useState("")
    const [resistencia, setResistencia] = useState("")
    const [lesiones, setLesiones] = useState("")
    const [dedicacion, setDedicacion] = useState("")
    const [profesionalismo, setProfesionalismo] = useState("")
    const [imagen, setImagen] = useState("")
    const [agilidad, setAgilidad] = useState("")
     
    const onSubmitDeportista = (e) => {
        console.log(e)
        const deportista = {id: id, nombre: nombre, especialidad: especialidad, edad:edad, altura:altura,
        peso:peso, nacionalidad:nacionalidad, record_persona:record, descripcion:descripcion, energia:energia, fuerza:fuerza,
        resistencia:resistencia, lesiones:lesiones, dedicacion:dedicacion, 
        profesionalismo:profesionalismo, image:imagen, agilidad:agilidad}
        registrarDeportista(deportista).then((response) => {

        })
    }
    const onChangeValueId = (e) => {
        setId(e.target.value);
      };
      const onChangeValueNombre = (e) => {
        setNombre(e.target.value);
      };
      const onChangeValueEspecialidad = (e) => {
        setEspecialidad(e.target.value);
      };
      const onChangeValueEdad = (e) => {
        setEdad(e.target.value);
      };
      const onChangeValueAltura = (e) => {
        setAltura(e.target.value);
      };
      const onChangeValuePeso = (e) => {
        setPeso(e.target.value);
      };
      const onChangeValueNacionalidad = (e) => {
        setNacionalidad(e.target.value);
      };
      const onChangeValueRecord = (e) => {
        setRecord(e.target.value);
      };
      const onChangeValueDescripcion = (e) => {
        setDescripcion(e.target.value);
      };
      const onChangeValueEnergia = (e) => {
        setEnergia(e.target.value);
      };
      const onChangeValueFuerza = (e) => {
        setFuerza(e.target.value);
      };
      const onChangeValueResistencia = (e) => {
        setResistencia(e.target.value);
      };
      const onChangeValueLesiones = (e) => {
        setLesiones(e.target.value);
      };
      const onChangeValueDedicacion = (e) => {
        setDedicacion(e.target.value);
      };
      const onChangeValueProfesionalismo = (e) => {
        setProfesionalismo(e.target.value);
      };
      const onChangeValueImagen = (e) => {
        setImagen(e.target.value);
      };
      const onChangeValueAgilidad = (e) => {
        setAgilidad(e.target.value);
      };


    return (
        <div className ="addPlayerForm">
            <form className = "formSubmit"onSubmit={onSubmitDeportista}>
                <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="id">id:</label>
                <input className = "formInput" onChange={onChangeValueId} value={id} required placeholder = "id" type ="text" name="id"/></div>
                <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="nombre">Nombre:</label>
                <input className = "formInput" onChange={onChangeValueNombre} value={nombre} required placeholder = "Nombre"type ="text" name="nombre"/></div>
                <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="especialidad">Especialidad:</label>
                <input className = "formInput" onChange={onChangeValueEspecialidad} value={especialidad} required placeholder = "Especialidad"type ="text" name="especalidad"/></div>
                <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="edad">Edad:</label>
                <input className = "formInput" onChange={onChangeValueEdad} value={edad} required placeholder = "Edad"type ="text" name="edad"/></div>
                <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="altura">Altura:</label>
                <input className = "formInput" onChange={onChangeValueAltura} value={altura} required placeholder = "Altura"type ="text" name="altura"/></div>
                <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="peso">Peso:</label>
                <input className = "formInput" onChange={onChangeValuePeso} value={peso} required placeholder = "Peso"type ="text" name="peso"/></div>
                <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="nacionalidad">Nacionalidad:</label>
                <input className = "formInput" onChange={onChangeValueNacionalidad} value={nacionalidad} required placeholder = "Nacionalidad"type ="text" name="nacionalidad"/></div>
                <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="record_personal">Record Personal:</label>
                <input className = "formInput" onChange={onChangeValueRecord} value={record} required placeholder = "Record Personal"type ="text" name="record_personal"/></div>
                <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="descripcion">Descripcion:</label>
                <input className = "formInput" onChange={onChangeValueDescripcion} value={descripcion} required placeholder = "Descripcion"type ="text" name="descripcion"/></div>
                <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="energia">Energia:</label>
                <input className = "formInput" onChange={onChangeValueEnergia} value={energia} required placeholder = "Energia"type ="text" name="energia"/></div>
                <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="fuerza">Fuerza:</label>
                <input className = "formInput" onChange={onChangeValueFuerza} value={fuerza} required placeholder = "Fuerza"type ="text" name="fuerza"/></div>
                <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="resistencia">Resistencia:</label>
                <input className = "formInput" onChange={onChangeValueResistencia} value={resistencia} required placeholder = "Resistencia"type ="text" name="resistencia"/></div>
                <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="agilidad">Agilidad:</label>
                <input className = "formInput" onChange={onChangeValueAgilidad} value={agilidad} required placeholder = "Agilidad"type ="text" name="agilidad"/></div>
                <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="lesiones">Lesiones:</label>
                <input className = "formInput" onChange={onChangeValueLesiones} value={lesiones} required placeholder = "Lesiones"type ="text" name="lesiones"/></div>
                <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="dedicacion">Dedicacion:</label>
                <input className = "formInput" onChange={onChangeValueDedicacion} value={dedicacion} required placeholder = "Dedicacion"type ="text" name="dedicacion"/></div>
                <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="profesionalsmo">Profesionalismo:</label>
                <input className = "formInput" onChange={onChangeValueProfesionalismo} value={profesionalismo} required placeholder = "Profesionalismo"type ="text" name="profesionalismo"/></div>
                <div className ="formSubmitDiv"><label className = "formLabel" htmlFor="image">Imagen:</label>
                <input className = "formInput" onChange={onChangeValueImagen} value={imagen} required placeholder = "Imagen"type ="text" name="image"/></div>
                <button id="btn-neon" type="submit">
                    Enviar Datos
                </button>
            </form>
        </div>
    )
}


export default AddPlayerForm