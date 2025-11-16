import { Router } from "express";
import atendentes from "../controllers/atendentes.js";
const atendentesRouter = Router()

atendentesRouter.get("/", atendentes.buscarAtendentes)
atendentesRouter.get("/:id", atendentes.buscarAtendentesPorId)
atendentesRouter.post("/", atendentes.addAtendentes)
atendentesRouter.put("/:id", atendentes.atualizarAtendentes)
atendentesRouter.delete("/:id", atendentes.deletarAtendentes)

export {atendentesRouter}