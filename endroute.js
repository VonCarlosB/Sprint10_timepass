const express = require('express');
const endroute = express.Router();
const validarHora = require('./validarHora');

endroute.get('/endroute', (req, res) => {
    if(validarHora()){
        res.send(`
            <h1>Ruta Final</h1>
            <h2>Bienvenido a la ruta final</h2>
            <a href="/">Volver</a>
        `)
    }else{
        res.locals.errorMessage = `<p>Aún no son las 12 de la mañana</p>`
        res.redirect('/')
    }
})

module.exports = endroute