import { Router } from "express";
import clientes from "../controllers/clientes.js";
const clientesRouter = Router()

servicosRouter.get("/", clientes.buscarServicos)
servicosRouter.get("/:id", clientes.buscarServicosPorId)
servicosRouter.post("/", clientes.addServicosddServicos)
servicosRouter.put("/:id", clientes.atualizarServicos)

export {clientesRouter}