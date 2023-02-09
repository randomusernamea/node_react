const knex = require("../knexfile");
const __rootDir = "/Users/Pablo/Desktop/SAP/234/node_react/Backend"
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
SECRET_KEY="IENB(#HYie-igh*)Ihtgq10b";



exports.subirImagen = (req,res) => {
    res.status(200).json({'error': 'none'})
}


exports.getDeportistas = (req, res) => {
  knex("deportistas")
    .select("*")
    .then((data) => {
      res.status(200).send(data);
    });
};
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

exports.updateDeportista = (req,res) => {
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
  exists = false;
  knex('deportistas').where('id', datos.id).update(datos).then(
    function(data){
        if (data === 1){res.status(200).send(datos)}
        else (res.status(404).send("Deportista not found"))
    }
  )
}
exports.getImage = (req,res) => {
  res.sendFile(__rootDir + '/images/' + req.params.route)
}
exports.postImage = (req,res) => {

}
exports.login = (req,res) => {
  const {username, password} = req.body;
  knex("users").select("*").where("username", username).then(
      function(data){
          if(data.length != 1) {
              res.status(400).json("Usuario o contrasena incorrectos")
          }
          const user = data[0]
          const validPassword = bcrypt.compareSync(password, user.password)
          if (validPassword){
              const token = jwt.sign({
              username: user.username,permisos: user.permisos, date: Date.now()}, SECRET_KEY);
              res.status(200).json({error: null, data:'Login exitoso', token})
          }
          else { return res.status(400).json({error: "Usuario o contrasena incorrectos"})}
      }
  )
}
exports.register = (req,res) => {
    const {username, password, permisos} = req.body
    const salt = bcrypt.genSaltSync(12)
    const passHash = bcrypt.hashSync(password, salt)
    knex("users").select("*").where("username", username).then(
        function(data){
            if (data.length != 0){
                res.status(400).json({error:"Usuario ya registrado"})
            }
            else {
                knex("users").insert({username: username, password: passHash, permisos: permisos})
            .then(function(data){
            res.status(200).send(data)
        })
            }
        }
    )
}