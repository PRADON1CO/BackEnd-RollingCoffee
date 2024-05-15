import express from 'express';
import cors from "cors"
import morgan from "morgan"

//1- Configurar un puerto
const app = express();
//Crear una variable
app.set('port', process.env.PORT || 4000)
app.listen( app.get('port') ,()=>{
    console.log('Estoy escuchando el puerto '+app.get('port') )
})

// 2- Configurar los middlewares
app.use(cors())//Permitir conexciones remotas
app.use(morgan('dev'))//Datos extars en la terminal
//Configurar que se interpreten los datos en foemato json y que pueda acceder a los datos del body del request
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//Configurar un archivo estatico

//3- Crear las rutas
// http://localhost:4001/prueba

app.get('/prueba', (req, res)=>{
    console.log('prueba de solicitud get');
    //enviar una respuesta
    res.send('Desde el backend de rolling Coffee')
})