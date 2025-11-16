import { Clientes } from "../models/clientes.js"

class ClientesControllers{
    buscarClientes = async (req, res) =>{
        const respose = await Clientes.find()
        res.json(respose)
    }

    buscarClientesPorId = async (req, res) =>{
        const {id} = req.params
        const respose = await Clientes.findById(id)
        res.json(respose)
    }

    addClientes = async (req, res) =>{
        const {nome, preco} = req.body
        if (!nome || !preco){
            res.status(422).json({
                erro: true,
                message: "Dados inválidos"
            })
            return
        }
        const cliente = new Clientes({
            nome, preco
        })
        cliente.save().then(
            () => res.status(201).json({
                erro: false,
                message: "Cliente criado com sucesso",
                cliente: cliente
        })).catch(err => {
            res.status(422).json({
                erro: true,
                message: "Dados inválidos"
            })
        })
    }

    atualizarClientes = async (req, res) =>{
        const {id} = req.params
        const {nome, preco} = req.body
        const response = await Clientes.findByIdAndUpdate(id, req.body)
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

    deletarClientes = async (req, res) => {
        const { id } = req.params
        try {
            const response = await Clientes.findByIdAndDelete(id)
            if (response) {
                res.json({
                    erro: false,
                    message: "Cliente deletado com sucesso"
                })
            } else {
                res.status(404).json({
                    erro: true,
                    message: "Cliente não encontrado"
                })
            }
        } catch (err) {
            res.status(422).json({
                erro: true,
                message: "Erro ao deletar Cliente"
            })
        }
    }
}

export default new ClientesControllers()