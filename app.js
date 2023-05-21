const express = require("express")

const app = express()

const port = 8001

app.get('/', (req, res) => {
    res.send("Olá!")
})

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})