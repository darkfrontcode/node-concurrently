import express from 'express'
import path from 'path'

const port = process.env.PORT || 3000
const environment = process.env.NODE_ENV || 'development'
const app = express()

app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.listen(port, function() {
    console.log("Express server listening on port " + port + " in " + environment + " mode")
})
