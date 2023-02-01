const knex = require("../knexfile")


exports.getDeportistas = () =>{
    knex("deportistas").select('*').then(function(data){
        res.status(200).send(data)
    })
}