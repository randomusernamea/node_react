import API from "./rule_API";

export const registrarUsuario = async (form) => {
  return await API.post("/register", form)
    .then((response) => {
        console.log(form);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};