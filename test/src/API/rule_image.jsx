import API from "./rule_API";

export const getImage = async (imageRoute) => {
  return await API.get("/deportista" + imageRoute)
    .then((response) => {
        console.log(response)
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
