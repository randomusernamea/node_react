import {useState} from 'react'
import React from 'react';

function MainComp() {
    
    const [search, setSearch] = useState();
    const [personas, setPersonas] = useState();
    
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
      }
    const changeContent = (e) => {

    }
    {personas.map((deportista) => {
                return(
                    <div className="content_card visible"> 
                        <div className='nameImgEspecialidad'>
                        <h1>{deportista.nombre}</h1>
                        <img className='imgDeportistas' src={deportista.image} alt="imagen" />
                        <h1>{deportista.especialidad}</h1>
                        </div>
                        <div className='contenedorButton'>
                        <button className='buttonVerMas' onClick={()=> changeContent(deportista) }>VER MAS</button>
                        </div>
                    </div>
                    );
                })
            }
    return (
      <div className="Main">
         <input className='searching' value = {search} onChange={onChangeSearch} type="text" />
      </div>
    );
  }
  
  export default MainComp;
  