const express = require("express");
const router = express.Router();
const {register, login, getImage, postImage, getDeportistas, crearDeportista} = require('../controllers/deportistas')
const {checkId, checkNombre, checkEspecialidad, checkEdad , checkAltura, checkPeso, checkNacionalidad, checkRecord, checkDescripcion, checkEnergia, checkFuerza, checkResistencia, checkProfesionalismo, checkAgilidad, checkImage, runValidate, validateUser, validateDeportista} = require('../validators/middleware')


router.get("/", validateUser, getDeportistas)
router.post("/", checkId, checkNombre, checkEspecialidad, checkEdad , checkAltura, checkPeso, checkNacionalidad, checkRecord, checkDescripcion, checkEnergia, checkFuerza, checkResistencia, checkProfesionalismo, checkAgilidad, checkImage, runValidate, crearDeportista)
router.get("/deportista/images/:route", getImage)
router.post("/images/:route", postImage)
router.post("/login", login)
router.post("/register", register)

module.exports = router