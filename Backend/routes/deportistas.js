const express = require("express");
const router = express.Router();
const {register, login, getImage, postImage, getDeportistas, crearDeportista} = require('../controllers/deportistas')
const {is1, verifyToken, usuarioValido, passwordValido, permisosValido,checkId, checkNombre, checkEspecialidad, checkEdad , checkAltura, checkPeso, checkNacionalidad, checkRecord, checkDescripcion, checkEnergia, checkFuerza, checkResistencia, checkProfesionalismo, checkAgilidad, checkImage, runValidate, validateUser, validateDeportista} = require('../validators/middleware')



router.get("/", /*verifyToken, is1,*/ getDeportistas)
router.post("/", checkId, checkNombre, checkEspecialidad, checkEdad , checkAltura, checkPeso, checkNacionalidad, checkRecord, checkDescripcion, checkEnergia, checkFuerza, checkResistencia, checkProfesionalismo, checkAgilidad, checkImage, runValidate, verifyToken, is1, crearDeportista)
router.get("/image/:route", /*verifyToken, is1,*/ getImage)
router.post("/login",usuarioValido, passwordValido, runValidate, login)
router.post("/register",usuarioValido, passwordValido, permisosValido, runValidate, register)


module.exports = router