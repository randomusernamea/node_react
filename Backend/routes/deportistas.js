const express = require("express");
const router = express.Router();
const {getDeportistas, crearDeportista} = require('../controllers/deportistas')
const {validateUser, validateDeportista} = require('../validators/middleware')


router.get("/", validateUser, getDeportistas)
router.post("/", validateDeportista, crearDeportista)

module.exports = router