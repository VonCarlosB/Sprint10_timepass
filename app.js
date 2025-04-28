const express = require('express')
const app = express()

const index = require('./index')
const endroute = require('./endroute')
const horaMiddleware = require('./horaMiddleware')

app.use(horaMiddleware)
app.use('/', index, endroute)

app.use((req, res) => {
    res.status(404).send(`<h1>Page not found</h1><a href="/">Home<a>`)
})

app.listen(3000, ()=>{
    console.log('Server active on http://localhost:3000')
})