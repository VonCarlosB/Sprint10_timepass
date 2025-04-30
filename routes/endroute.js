const express = require('express')
const validarHora = require('../middleware/validarHora')
const endroute = express.Router()

endroute.get('/', validarHora, (req, res) => {
    res.send(`
        <h1>Ruta Final</h1>
        <h2>Bienvenido a la ruta final</h2>
        <a href="/">Volver</a>
    `)
})

module.exports = endroute