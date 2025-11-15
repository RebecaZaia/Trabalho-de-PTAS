import express from "express"
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

app.listen(3333, () => {
    console.log("Servidor rodando na porta em http://localhost:3333")
})