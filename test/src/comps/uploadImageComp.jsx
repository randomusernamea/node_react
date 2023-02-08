import React from "react";
import { useState } from "react";
import { subirImagen } from "../API/rule_Upload_Image";
import axios from 'axios';


function UploadImageComp() {
    const [image, setImage] = useState({ preview: '', data: '' })
    const [status, setStatus] = useState('')
    const [text, setText] = useState('')
    const handleSubmit = async (e) => {
      e.preventDefault()
      let formData = new FormData()
      formData.append('file', image.data)
      let aux = false;
      try {
        const response = await axios({
          method: "post",
          url: "http://127.0.0.1:3007/api/image",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
        aux = true;
      } catch(error) {
        console.log(error)
      }
      if (aux){
        setImage('')
        setText('Imagen subida exitosamente')
      }
    }
  
    const handleFileChange = (e) => {
      const img = {
        preview: URL.createObjectURL(e.target.files[0]),
        data: e.target.files[0],
      }
      setImage(img)
    }
  return (
    <div className="uploadImageComp">
      <h1>Upload to server</h1>
      {image.preview && (
        <img src={image.preview} width="100" height="100" alt="Imagen subida" />
      )}
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={handleFileChange}></input>
        <button type="submit">Submit</button>
      </form>
      {status && <h4>{status}</h4>}
      <p>{text}</p>
    </div>
  );
}

export default UploadImageComp;
