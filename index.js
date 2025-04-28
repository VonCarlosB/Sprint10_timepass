const express = require('express');
const index = express.Router();

index.get('/', (req, res) => {
    res.send(`
        <h1>Bienvenido al Challenge U2S10</h1>
        <h3>${req.dateType}</h3>
        <a href="/endroute"><button onclick="check()">Validar hora</button></a>
        ${res.locals.errorMessage === undefined ? '<p></p>' : res.locals.errorMessage}
    `)
})

module.exports = index