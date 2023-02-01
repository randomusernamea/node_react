const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const deportistas = require("./routes/deportistas")
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', deportistas)





app.listen(3007, ()=>{
    console.log("Servidor escuchando en el puerto 3007")
});