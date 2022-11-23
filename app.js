// Carregando módulos
const express = require('express')
const app = express()
const path = require('path')

// Configurações

// Public 
app.use(express.static(path.join(__dirname,'public')))
app.use("/images", express.static(path.join(__dirname, "/public/img")));


// Rotas
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'))
})

app.get('/game', (req,res) => {
    res.sendFile(path.join(__dirname + '/views/gameboard/index.html'))
})

// Outros
const PORT = process.env.PORT || 8080
app.listen(PORT,() => {
    console.log("Servidor rodando!");
})