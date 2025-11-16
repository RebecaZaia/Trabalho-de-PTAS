import { Atendentes } from "../models/atendentes.js"

class AtendentesControllers{
    buscarAtendentes = async (req, res) =>{
        const respose = await Atendentes.find()
        res.json(respose)
    }

    buscarAtendentesPorId = async (req, res) =>{
        const {id} = req.params
        const respose = await Atendentes.findById(id)
        res.json(respose)
    }

    addAtendentes = async (req, res) =>{
        const {nome, preco} = req.body
        if (!nome || !preco){
            res.status(422).json({
                erro: true,
                message: "Dados inválidos"
            })
            return
        }
        const atendente = new Atendentes({
            nome, preco
        })
        atendente.save().then(
            () => res.status(201).json({
                erro: false,
                message: "Atendente criado com sucesso",
                atendente: atendente
        })).catch(err => {
            res.status(422).json({
                erro: true,
                message: "Dados inválidos"
            })
        })
    }

    atualizarAtendentes = async (req, res) =>{
        const {id} = req.params
        const {nome, preco} = req.body
        const response = await Atendentes.findByIdAndUpdate(id, req.body)
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
}

export default new AtendentesControllers()