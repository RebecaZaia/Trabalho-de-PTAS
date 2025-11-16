import { Schema, model } from "mongoose";

const agendamentosSchema = new Schema({
    cliente: [{type: Schema.Types.ObjectId, ref: 'Clientes'}],
    atendente: [{type: Schema.Types.ObjectId, ref: 'Atendentes'}],
    servico: [{type: Schema.Types.ObjectId, ref: 'Servicos'}],
    endereco: {type: String, required: true},
    data: {type: Date, required: true},
    hora: {type: String, required: true}
})

const Agendamentos = model('Agendamentos', agendamentosSchema)
export {Agendamentos}