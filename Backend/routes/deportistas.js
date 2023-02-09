const express = require("express");
const router = express.Router();
const {updateDeportista, subirImagen, register, login, getImage, postImage, getDeportistas, crearDeportista} = require('../controllers/deportistas')
const {is1, verifyToken, usuarioValido, passwordValido, permisosValido,checkId, checkNombre, checkEspecialidad, checkEdad , checkAltura, checkPeso, checkNacionalidad, checkRecord, checkDescripcion, checkEnergia, checkFuerza, checkResistencia, checkProfesionalismo, checkAgilidad, checkImage, runValidate, validateUser, validateDeportista} = require('../validators/middleware')

const multer = require('multer')


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})
const upload = multer({ storage: storage })

router.post('/image', upload.single('file'), subirImagen)
router.get("/", /*verifyToken, is1,*/ getDeportistas)
router.post("/", checkId, checkNombre, checkEspecialidad, checkEdad , checkAltura, checkPeso, checkNacionalidad, checkRecord, checkDescripcion, checkEnergia, checkFuerza, checkResistencia, checkProfesionalismo, checkAgilidad, checkImage, runValidate, /*verifyToken, is1,*/ crearDeportista)
router.get("/image/:route", /*verifyToken, is1,*/ getImage)
router.post("/login",usuarioValido, passwordValido, runValidate, login)
router.post("/register",usuarioValido, passwordValido, permisosValido, runValidate, register)
router.put('/image')
router.put('/', checkId, checkNombre, checkEspecialidad, checkEdad , checkAltura, checkPeso, checkNacionalidad, checkRecord, checkDescripcion, checkEnergia, checkFuerza, checkResistencia, checkProfesionalismo, checkAgilidad, checkImage, runValidate, /*verifyToken, is1, */updateDeportista)

module.exports = router