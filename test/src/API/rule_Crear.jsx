import API from "./rule_API";

export const registrarDeportista = async (form) => {
  return await API.post("/", form)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};