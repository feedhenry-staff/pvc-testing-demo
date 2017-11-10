'use strict'

// version 0.1
let app = require('express')()

app.get('/', (req, res) => res.send('Services deployed here.'))
app.get('/config', (req, res) => res.send(require('fs').readFileSync('./store/db.json').toString()))

app.listen(8080, '0.0.0.0', function() {
    console.info("Server started on 0.0.0.0 port: " + 8080)
})
