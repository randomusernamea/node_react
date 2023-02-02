import { useState, useEffect } from "react";
import React from "react";
import API from "../API/rule_API";
import { getDeportista } from "../API/rule_deportistas";

function MainComp() {
  const [search, setSearch] = useState();
  const [personas, setPersonas] = useState([]);

  const getDeportistas = async () => {
    await getDeportista().then((response) => {
      console.log("asd");
      console.log(response);
      setPersonas(response);
    });
  };
  useEffect(() => {
    getDeportistas();
  }, []);
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const changeContent = (e) => {};

  return (
    <div className="Main">
      <input
        className="searching"
        value={search}
        onChange={onChangeSearch}
        type="text"
      />

      {personas.map((deportista) => {
        return (
          <div className="content_card visible">
            <div className="nameImgEspecialidad">
              <h1>{deportista.nombre}</h1>
              <img
                className="imgDeportistas"
                src={deportista.image}
                alt="imagen"
              />
              <h1>{deportista.especialidad}</h1>
            </div>
            <div className="contenedorButton">
              <button
                className="buttonVerMas"
                onClick={() => changeContent(deportista)}
              >
                VER MAS
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MainComp;
