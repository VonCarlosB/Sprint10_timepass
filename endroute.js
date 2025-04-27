const express = require('express');
const endroute = express.Router();
const validarHora = require('./validarHora');

endroute.get('/endroute', (req, res) => {
    if(validarHora(res.locals.hour)){
        res.send(`
            <h1>Ruta Final</h1>
            <h2>Bienvenido a la ruta final</h2>
            <a href="/index">Volver</a>
        `)
    }else{
        res.redirect('/index')
    }
})

module.exports = endroute