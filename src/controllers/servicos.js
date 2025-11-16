import { Servicos } from "../models/servicos.js"

class ServicosControllers{
    buscarServicos = async (req, res) =>{
        const respose = await Servicos.find()
        res.json(respose)
    }

    buscarServicosPorId = async (req, res) =>{
        const {id} = req.params
        const respose = await Servicos.findById(id)
        res.json(respose)
    }

    addServicos = async (req, res) =>{
        const {nome, preco} = req.body
        if (!nome || !preco){
            res.status(422).json({
                erro: true,
                message: "Dados inválidos"
            })
            return
        }
        const servico = new Servicos({
            nome, preco
        })
        servico.save().then(
            () => res.status(201).json({
                erro: false,
                message: "Serviço criado com sucesso",
                servico: servico
        })).catch(err => {
            res.status(422).json({
                erro: true,
                message: "Dados inválidos"
            })
        })
    }

    atualizarServicos = async (req, res) =>{
        const {id} = req.params
        const {nome, preco} = req.body
        const response = await Servicos.findByIdAndUpdate(id, req.body)
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

export default new ServicosControllers()