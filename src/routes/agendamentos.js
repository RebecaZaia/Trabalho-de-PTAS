import { Router } from "express";
import agendamentos from "../controllers/agendamentos.js";
const agendamentosRouter = Router()

servicosRouter.get("/", agendamentos.buscarServicos)
servicosRouter.get("/:id", agendamentos.buscarServicosPorId)
servicosRouter.post("/", agendamentos.addServicosddServicos)
servicosRouter.put("/:id", agendamentos.atualizarServicos)

export {agendamentosRouter}