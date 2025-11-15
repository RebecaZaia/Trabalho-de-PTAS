import { Router } from "express";
import { buscarServicos } from "../controllers/servicos.js";
const servicosRouter = Router()

servicosRouter.get("/", buscarServicos)
servicosRouter.get("/:id", buscarServicosPorId)
servicosRouter.post("/", addServicos)
servicosRouter.put("/:id", atualizarServicos)

export {pratosRouter}