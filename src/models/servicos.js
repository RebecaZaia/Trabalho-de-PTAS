import { model, Schema } from "mongoose";

const servicosSchema = new Schema({
    tipo_servico: {type: String, required: true},
    descricao: {type: String, required: true},
    data_solicitacao: {type: Date, required: true},
    data_execucao_prevista: {type: Date, required: true},
    status: {type: String, required: true},
    preco: {type: Number, required: true},
    id_cliente: {type: Schema.Types.ObjectId, ref: 'Clientes'}
    
})

const Servicos = model('Servicos', servicosSchema)
export {Servicos}