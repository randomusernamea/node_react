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

app.post('/api/image', upload.single('file'), function (req, res) {
    console.log('asd')
  res.json({})
})



app.listen(3007, ()=>{
    console.log("Servidor escuchando en el puerto 3007")
});