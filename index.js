const express =  require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

console.log(__dirname);

//Especificar el motor de plantillas 
app.set('view engine', 'pug');

//Requerimos el archivo de routes donde están
//configuradas las rutas
app.use(require('./routes/routes'));


app.listen(4001, () =>{
    console.log('Server on port 4001');
})