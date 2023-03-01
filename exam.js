//laura sofia arango cadena, angi lizeth garcia chacón, james oquendo

const express = require('express');
app = express()
// app.use(express.json());
// app.use(express.text());
app.use(express.urlencoded({extended: false}))
// //params 1
// app.get('/home/:nombre', (req,res)=>{
//     res.send(`mascota:${req.params.nombre}`)
// });
// //params 2 
// app.get('/home/:mascota/:propietario', (req,res)=>{
//     res.send(`Mascota: ${req.params.mascota} propietario: ${req.params.propietario}`)
// });

// //querys 1
// app.get('/home', (req,res)=>{
//     res.send(`Mascota: ${req.query.mascota}`)
// });
//querys 2
// app.get('/home', (req,res)=>{
//     res.send(`Mascota: ${req.query.mascota} propietario: ${req.query.propietario}`)
// });

//body json y formulario
// app.get('/home', (req,res)=>{
//     res.send(`Mascota: ${req.body.mascota}`)
// });

//body text
// app.get('/home', (req,res)=>{
//     res.send(`Mascota: ${req.body}`)
// });










    const port = 1337;
    const host = "localhost"
    app.listen(port, host, ()=>{
        console.log(`http://${host}:${port}`)
    });
    