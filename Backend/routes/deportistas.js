const express = require("express");
const router = express.Router();
const {register, login, getImage, postImage, getDeportistas, crearDeportista} = require('../controllers/deportistas')
const {usuarioValido, passwordValido, permisosValido,checkId, checkNombre, checkEspecialidad, checkEdad , checkAltura, checkPeso, checkNacionalidad, checkRecord, checkDescripcion, checkEnergia, checkFuerza, checkResistencia, checkProfesionalismo, checkAgilidad, checkImage, runValidate, validateUser, validateDeportista} = require('../validators/middleware')


router.get("/", validateUser, getDeportistas)
router.post("/", checkId, checkNombre, checkEspecialidad, checkEdad , checkAltura, checkPeso, checkNacionalidad, checkRecord, checkDescripcion, checkEnergia, checkFuerza, checkResistencia, checkProfesionalismo, checkAgilidad, checkImage, runValidate, crearDeportista)
router.get("/deportista/images/:route", getImage)
router.post("/images/:route", postImage)
router.post("/login",usuarioValido, passwordValido, runValidate, login)
router.post("/register",usuarioValido, passwordValido, permisosValido, runValidate, register)

module.exports = router