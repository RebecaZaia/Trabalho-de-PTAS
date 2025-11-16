import { Router } from "express";
import clientes from "../controllers/clientes.js";
const clientesRouter = Router()

clientesRouter.get("/", clientes.buscarClientes)
clientesRouter.get("/:id", clientes.buscarClientesPorId)
clientesRouter.post("/", clientes.addClientes)
clientesRouter.put("/:id", clientes.atualizarClientes)
clientesRouter.delete("/:id", clientes.deletarClientes)

export {clientesRouter}