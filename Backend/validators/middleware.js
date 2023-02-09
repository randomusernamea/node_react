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
     const errors = validationResult(req)
     if (!errors.isEmpty()){
         return res.status(422).json({error: errors.array()[0].msg})
     }
     next();
 }

exports.checkId = [check("id").isInt({min: 0}).withMessage('ID Invalido')]
exports.checkNombre = [check("nombre").isLength({min:1, max:30}).isAlpha('en-US', {ignore: ' '}).withMessage('Nombre Invalido')]
exports.checkEspecialidad = [check("especialidad").isLength({max:30}).isAlpha('en-US', {ignore: ' '}).withMessage('Especialidad Invalida')]
exports.checkEdad = [check("edad").isInt({min: 0, max: 140}).withMessage('Edad Invalida')]
exports.checkAltura = [check("altura").isInt({min: 30, max: 260}).withMessage('Altura Invalida')]
exports.checkPeso = [check("peso").isInt({min: 30, max: 1200}).withMessage('Peso Invalido')]
exports.checkNacionalidad = [check("nacionalidad").isLength({min: 1, max:30}).isAlpha('en-US', {ignore: ' '}).withMessage('Nacionalidad Invalida')]
exports.checkRecord = [check("record_persona").isLength({min: 1, max:40}).isAlphanumeric('en-US', {ignore: ' '}).withMessage('Record Invalido')]
exports.checkDescripcion = [check("descripcion").isLength({min: 1, max:400}).withMessage('Descripcion Invalida')]
exports.checkEnergia = [check("energia").isInt({min: 0, max: 100}).withMessage('Energia Invalida')]
exports.checkFuerza = [check("fuerza").isInt({min: 0, max: 100}).withMessage('Fuerza Invalida')]
exports.checkResistencia = [check("resistencia").isInt({min: 0, max: 100}).withMessage('Resistencia Invalida')]
exports.checkProfesionalismo = [check("profesionalismo").isInt({min: 0, max: 100}).withMessage('Profesionalismo Invalido')]
exports.checkAgilidad = [check("agilidad").isInt({min: 0, max: 100}).withMessage('Agilidad Invalida')]
exports.checkImage = [check("image").isLength({min: 1, max:400}).withMessage('Imagen Invalida')]

exports.usuarioValido = [body("username").exists().withMessage("No hay usuario").isLength({max:20}).withMessage("Username muy largo")]
exports.passwordValido = [body("password").exists().withMessage("No hay password").isLength({max:63}).withMessage("Username muy largo")]
exports.permisosValido = [body("permisos").exists().withMessage("No hay permisos").isFloat({min:1,max:3}).isInt().withMessage("El permiso tiene que ser un entero de valor 1, 2 o 3")]

