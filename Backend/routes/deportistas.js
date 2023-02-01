const express = require("express");
const router = express.Router();
const {} = require('../controllers/deportistas')
const {validateUser} = require('../validators/middleware')

router.get("/", validateUser, getDeportistas)