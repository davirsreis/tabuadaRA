// Carregando módulos
const express = require('express')
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

// Configurações

// // Body Parser
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())

// // Handlebars
// app.engine('handlebars', engine({defaultLayout: 'maidn',
// runtimeOptions: {
//     allowProtoPropertiesByDefault: true,
//     allowProtoMethodsByDefault: true
// }}))
// app.set('view engine', 'handlebars')

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
const PORT = 8080
app.listen(PORT,() => {
    console.log("Servidor rodando!");
})