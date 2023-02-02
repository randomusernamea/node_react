import API from "./rule_API";

export const getDeportista = async () => {
  return await API.get("/")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
