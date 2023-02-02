const knex = require("../knexfile");

exports.getDeportistas = (req, res) => {
  knex("deportistas")
    .select("*")
    .then((data) => {
      res.status(200).send(data);
    });
};
