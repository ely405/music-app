const express = require('express');
const path = require('path');

const app = express();
const DEFAULT_PORT = process.env.PORT || 2000;

const isDevelopment = process.env.NODE_ENV !== "production";

var DIST_DIR = path.join(__dirname, "/dist")

app.set("port", process.env.PORT || DEFAULT_PORT);

//Sirviendo archivos en la carpeta dist
app.use(express.static(DIST_DIR));

//enviar index.html cuando el usuario acceda a la web
app.get("*", function (req, res) {  
    res.sendFile(path.join(DIST_DIR, "index.html"));
  });
  
app.listen(DEFAULT_PORT, function (error) {
    if(error) {
        console.log(error);
    }
    console.log(`el servidor corre en el puerto ${DEFAULT_PORT}`);
});