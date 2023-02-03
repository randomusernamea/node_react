const knex = require("../knexfile");

exports.getDeportistas = (req, res) => {
  knex("deportistas")
    .select("*")
    .then((data) => {
      res.status(200).send(data);
    });
};

//Should work
exports.crearDeportista = (req,res) => {
  console.log(req.body)
  datos = req.body;
  datos.id = Number(datos.id)
  datos.edad = Number(datos.edad)
  datos.altura = Number(datos.altura)
  datos.peso = Number(datos.peso)
  datos.energia = Number(datos.energia)
  datos.fuerza = Number(datos.fuerza)
  datos.resistencia = Number(datos.resistencia)
  datos.agilidad = Number(datos.agilidad)
  datos.lesiones = Number(datos.lesiones)
  datos.dedicacion = Number(datos.dedicacion)
  datos.profesionalismo = Number(datos.profesionalismo)
  knex("deportistas").insert(datos).then(res.status(200).send('Valor insertado de forma exitosa'))
  res.status(200)
}