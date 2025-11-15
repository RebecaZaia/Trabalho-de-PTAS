import express from "express"
import mongoose from "mongoose"
const app = express()
app.use(express.json())

app.get("/users", (req, res) =>{
    console.log(req.query.userId)
    res.end(`Buscar de usuários`)
})

app.get("/users/:id/:page", (req, res) =>{
    const {id} = req.params
    res.end(`Buscar de usuários com id ${id}`)
})

mongoose.connect("mongodb://localhost:27017/trabalho")
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.log("Erro ao conectar no MongoDB"))

app.listen(3333, () => {
    console.log("Servidor rodando na porta em http://localhost:3333")
})