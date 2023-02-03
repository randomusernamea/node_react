const {validationResult, body, check, param} = require("express-validator")


exports.validateUser = (req,res,next) => {
     next();
}
//todo
exports.validateDeportista = (req,res,next) => {
     next();
}

exports.runValidate = (req,res,next) => {
     const errors = validationResult(req)
     if (!errors.isEmpty()){
         return res.status(422).json({error: errors.array()[0].msg})
     }
     next();
 }

exports.checkId = [check("id").isInt({min: 0})]
exports.checkNombre = [check("nombre").length({min:1, max:30}).isAlpha()]
exports.checkEspecialidad = [check("especialidad").length({max:30}).isAlpha()]
exports.checkEdad = [check("edad").isInt({min: 0, max: 140})]
exports.checkAltura = [check("altura").isInt({min: 30, max: 260})]
exports.checkPeso = [check("peso").isInt({min: 30, max: 1200})]
exports.checkNacionalidad = [check("nacionalidad").length({min: 1, max:30}).isAlpha()]
exports.checkRecord = [check("record_persona").length({min: 1, max:40}).isAlpha()]
exports.checkDescripcion = [check("descripcion").length({min: 1, max:400})]
exports.checkEnergia = [check("energia").isInt({min: 0, max: 100})]
exports.checkFuerza = [check("fuerza").isInt({min: 0, max: 100})]
exports.checkResistencia = [check("resistencia").isInt({min: 0, max: 100})]
exports.checkProfesionalismo = [check("profesionalismo").isInt({min: 0, max: 100})]
exports.checkAgilidad = [check("agilidad").isInt({min: 0, max: 100})]
exports.checkImage = [check("image").length({min: 1, max:400})]

