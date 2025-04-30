const express = require('express');
const index = express.Router();

index.get('/', (req, res) => {
    const mensaje = req.query.mensaje || ""
    res.send(`
        <h1>Bienvenido al Challenge U2S10</h1>
        <h3>${req.hour}</h3>
        <a href="/endroute"><button>Validar hora</button></a>
        <p>${mensaje}</p>
    `)
})

module.exports = index