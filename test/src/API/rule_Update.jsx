import API from "./rule_API";

export const updateDeportista = async (form) => {
  return await API.put("/", form)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};