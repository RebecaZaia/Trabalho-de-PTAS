import { Agendamentos } from "../models/agendamentos.js"

class AgendamentosControllers{
    buscarAgendamentos = async (req, res) =>{
        const respose = await Agendamentos.find()
        res.json(respose)
    }

    buscarAgendamentosPorId = async (req, res) =>{
        const {id} = req.params
        const respose = await Agendamentos.findById(id)
        res.json(respose)
    }

    addAgendamentos = async (req, res) =>{
        const {nome, preco} = req.body
        if (!nome || !preco){
            res.status(422).json({
                erro: true,
                message: "Dados inválidos"
            })
            return
        }
        const agendamento = new Agendamentos({
            nome, preco
        })
        agendamento.save().then(
            () => res.status(201).json({
                erro: false,
                message: "Agendamento criado com sucesso",
                agendamento: agendamento
        })).catch(err => {
            res.status(422).json({
                erro: true,
                message: "Dados inválidos"
            })
        })
    }

    atualizarAgendamentos = async (req, res) =>{
        const {id} = req.params
        const response = await Agendamentos.findByIdAndUpdate(id, req.body)
        if (response){
            res.json({
                erro: false,
                message: "Alteração feita"
            })
        } else {
            res.json({
                erro: false,
                message: "Alteração feita"
            })
        }
    }

    deletarAgendamento = async (req, res) => {
        const { id } = req.params
        try {
            const response = await Agendamentos.findByIdAndDelete(id)
            if (response) {
                res.json({
                    erro: false,
                    message: "Agendamento deletado com sucesso"
                })
            } else {
                res.status(404).json({
                    erro: true,
                    message: "Agendamento não encontrado"
                })
            }
        } catch (err) {
            res.status(422).json({
                erro: true,
                message: "Erro ao deletar agendamento"
            })
        }
    }
}

export default new AgendamentosControllers()