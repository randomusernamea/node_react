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
        <div>
            <form onSubmit={onSubmitDeportista}>
                <label htmlFor="id">id:</label>
                <input onChange={onChangeValueId} value={id} required placeholder = "id" type ="text" name="id"/><br/>
                <label htmlFor="nombre">Nombre:</label>
                <input onChange={onChangeValueNombre} value={nombre} required placeholder = "Nombre"type ="text" name="nombre"/><br/>
                <label htmlFor="especialidad">Especialidad:</label>
                <input onChange={onChangeValueEspecialidad} value={especialidad} required placeholder = "Especialidad"type ="text" name="especalidad"/><br/>
                <label htmlFor="edad">Edad:</label>
                <input onChange={onChangeValueEdad} value={edad} required placeholder = "Edad"type ="text" name="edad"/><br/>
                <label htmlFor="altura">Altura:</label>
                <input onChange={onChangeValueAltura} value={altura} required placeholder = "Altura"type ="text" name="altura"/><br/>
                <label htmlFor="peso">Peso:</label>
                <input onChange={onChangeValuePeso} value={peso} required placeholder = "Peso"type ="text" name="peso"/><br/>
                <label htmlFor="nacionalidad">Nacionalidad:</label>
                <input onChange={onChangeValueNacionalidad} value={nacionalidad} required placeholder = "Nacionalidad"type ="text" name="nacionalidad"/><br/>
                <label htmlFor="record_personal">Record Persoal:</label>
                <input onChange={onChangeValueRecord} value={record} required placeholder = "Record Personal"type ="text" name="record_personal"/><br/>
                <label htmlFor="descripcion">Descripcion:</label>
                <input onChange={onChangeValueDescripcion} value={descripcion} required placeholder = "Descripcion"type ="text" name="descripcion"/><br/>
                <label htmlFor="energia">Energia:</label>
                <input onChange={onChangeValueEnergia} value={energia} required placeholder = "Energia"type ="text" name="energia"/><br/>
                <label htmlFor="fuerza">Fuerza:</label>
                <input onChange={onChangeValueFuerza} value={fuerza} required placeholder = "Fuerza"type ="text" name="fuerza"/><br/>
                <label htmlFor="resistencia">Resistencia:</label>
                <input onChange={onChangeValueResistencia} value={resistencia} required placeholder = "Resistencia"type ="text" name="resistencia"/><br/>
                <label htmlFor="agilidad">Agilidad:</label>
                <input onChange={onChangeValueAgilidad} value={agilidad} required placeholder = "Agilidad"type ="text" name="agilidad"/><br/>
                <label htmlFor="lesiones">Lesiones:</label>
                <input onChange={onChangeValueLesiones} value={lesiones} required placeholder = "Lesiones"type ="text" name="lesiones"/><br/>
                <label htmlFor="dedicacion">Dedicacion:</label>
                <input onChange={onChangeValueDedicacion} value={dedicacion} required placeholder = "Dedicacion"type ="text" name="dedicacion"/><br/>
                <label htmlFor="profesionalsmo">Profesionalismo:</label>
                <input onChange={onChangeValueProfesionalismo} value={profesionalismo} required placeholder = "Profesionalismo"type ="text" name="profesionalismo"/><br/>
                <label htmlFor="image">Imagen:</label>
                <input onChange={onChangeValueImagen} value={imagen} required placeholder = "Imagen"type ="text" name="image"/><br/>
                <button id="btn-neon" type="submit">
                    Enviar Datos
                </button>
            </form>
        </div>
    )
}


export default AddPlayerForm