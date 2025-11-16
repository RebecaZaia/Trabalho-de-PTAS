import { Router } from "express";
import atendentes from "../controllers/atendentes.js";
const atendentesRouter = Router()

servicosRouter.get("/", atendentes.buscarServicos)
servicosRouter.get("/:id", atendentes.buscarServicosPorId)
servicosRouter.post("/", atendentes.addServicosddServicos)
servicosRouter.put("/:id", atendentes.atualizarServicos)

export {atendentesRouter}