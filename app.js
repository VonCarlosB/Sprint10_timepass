const express = require('express')
const app = express()

const index = require('./routes/index.js')
const endroute = require('./routes/endroute.js')
const horaMiddleware = require('./middleware/horaMiddleware.js')

app.use(horaMiddleware)
app.use('/', index)
app.use('/endroute', endroute)

app.use((req, res) => {
    res.status(404).send(`<h1>Page not found</h1><a href="/">Home<a>`)
})

app.listen(3000, ()=>{
    console.log('Server active on http://localhost:3000')
})