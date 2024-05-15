import express from 'express';

//1- Configurar un puerto
const app = express();
//Crear una variable
app.set('port', process.env.PORT || 4000)
app.listen( app.get('port') ,()=>{
    console.log('Estoy escuchando el puerto '+app.get('port') )
})

// 2- Configurar los middlewares


//3- Crear las rutas