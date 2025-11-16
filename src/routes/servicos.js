import { Router } from "express";
import servicos from "../controllers/servicos.js";
const servicosRouter = Router()

servicosRouter.get("/", servicos.buscarServicos)
servicosRouter.get("/:id", servicos.buscarServicosPorId)
servicosRouter.post("/", servicos.addServicosddServicos)
servicosRouter.put("/:id", servicos.atualizarServicos)

export {servicosRouterRouter}