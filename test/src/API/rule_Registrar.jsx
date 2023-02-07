import API from "./rule_API";

export const registrarUsuario = async (form) => {
  return await API.post("/registrar", form)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};