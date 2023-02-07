const {validationResult, body, check, param} = require("express-validator")
SECRET_KEY="IENB(#HYie-igh*)Ihtgq10b"
const jwt = require("jsonwebtoken")

//legacy
exports.validateUser = (req,res,next) => {
     next();
}
//todo
exports.validateDeportista = (req,res,next) => {
     next();
}

exports.is1 = (req,res,next) => {
    console.log(req.loginInfo)
    if (req.loginInfo.permisos === 1){
        next()
    }
    else{
        res.status(403).json({error:"ACESS DENIED"})
    }
}


exports.verifyToken = (req,res,next) =>{
     const token = req.header('Authorization')
     if (!token){
         return res.status(401).json({error: 'Acceso denegado'})
     }
     try{
         const verified = jwt.verify(token, SECRET_KEY)
         req.loginInfo = verified
         if (verified.date < (Date.now() - (5*60*1000))){
             res.status(401).json({error:'Token expirado'})
         }
         next()
     }
     catch(error){
         res.status(400).json({error: error.message})
     }
 }

exports.runValidate = (req,res,next) => {
    console.log(req.body)
     const errors = validationResult(req)
     if (!errors.isEmpty()){
         return res.status(422).json({error: errors.array()[0].msg})
     }
     next();
 }

exports.checkId = [check("id").isInt({min: 0})]
exports.checkNombre = [check("nombre").isLength({min:1, max:30}).isAlpha()]
exports.checkEspecialidad = [check("especialidad").isLength({max:30}).isAlpha()]
exports.checkEdad = [check("edad").isInt({min: 0, max: 140})]
exports.checkAltura = [check("altura").isInt({min: 30, max: 260})]
exports.checkPeso = [check("peso").isInt({min: 30, max: 1200})]
exports.checkNacionalidad = [check("nacionalidad").isLength({min: 1, max:30}).isAlpha()]
exports.checkRecord = [check("record_persona").isLength({min: 1, max:40}).isAlpha()]
exports.checkDescripcion = [check("descripcion").isLength({min: 1, max:400})]
exports.checkEnergia = [check("energia").isInt({min: 0, max: 100})]
exports.checkFuerza = [check("fuerza").isInt({min: 0, max: 100})]
exports.checkResistencia = [check("resistencia").isInt({min: 0, max: 100})]
exports.checkProfesionalismo = [check("profesionalismo").isInt({min: 0, max: 100})]
exports.checkAgilidad = [check("agilidad").isInt({min: 0, max: 100})]
exports.checkImage = [check("image").isLength({min: 1, max:400})]

exports.usuarioValido = [body("username").exists().withMessage("No hay usuario").isLength({max:20}).withMessage("Username muy largo")]
exports.passwordValido = [body("password").exists().withMessage("No hay password").isLength({max:63}).withMessage("Username muy largo")]
exports.permisosValido = [body("permisos").exists().withMessage("No hay permisos").isFloat({min:1,max:3}).isInt().withMessage("El permiso tiene que ser un entero de valor 1, 2 o 3")]

