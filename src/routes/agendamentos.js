import { Router } from "express";
import agendamentos from "../controllers/agendamentos.js";
const agendamentosRouter = Router()

agendamentosRouter.get("/", agendamentos.buscarAgendamentos)
agendamentosRouter.get("/:id", agendamentos.buscarAgendamentosPorId)
agendamentosRouter.post("/", agendamentos.addAgendamentos)
agendamentosRouter.put("/:id", agendamentos.atualizarAgendamentos)
agendamentosRouter.delete("/:id", agendamentos.deletarAgendamento)

export {agendamentosRouter}