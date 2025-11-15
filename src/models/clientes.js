import { model, Schema } from "mongoose";

const clientesSchema = new Schema({
    nome: {type: String, required: true},
    servicos: [{type: Schema.Types.ObjectId, ref: 'Serviços'}]
})

const Clientes = model('Clientes', clientesSchema)
export {Clientes}