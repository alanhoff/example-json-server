'use strict'

let express = require('express')
let app = express()

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`))
app.get('/people.json', (req, res) => res.json(require('./people.json')))

app.listen(8080)
