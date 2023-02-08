import API from "./rule_API";

export const subirImagen = async (form) => {
  return await API.post("/image", form)
    .then((response) => {
        console.log(form);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};