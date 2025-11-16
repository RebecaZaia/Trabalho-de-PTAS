import express from "express"
import mongoose from "mongoose"
import { servicosRouter } from "./routes/route_pratos.js"
import { clientesRouter } from "./routes/clientes.js"
import { atendentesRouter } from "./routes/atendentes.js"
import { agendamentosRouter } from "./routes/agendamentos.js"
const app = express()
//CRUD -> Create, Read, Update, Delete
app.use(express.json())

app.use("/servicos", servicosRouter)
app.use("/clientes", clientesRouter)
app.use("/atendentes", atendentesRouter)
app.use("/agendamentos", agendamentosRouter)

mongoose.connect("mongodb://localhost:27017/trabalho")
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.log("Erro ao conectar no MongoDB"))

app.listen(3333, () => {
    console.log("Servidor rodando na porta em http://localhost:3333")
})