import { model, Schema } from "mongoose";

const atendentesSchema = new Schema({
    nome: {type: String, required: true},
    telefone: {type: String, required: true},
    email: {type: String, required: true},
    endereco: {type: String, required: true},
    data_cadastro: {type: Date, required: true},
    turno: {type: String, required: true}
})

const Atendentes = model('Atendentes', atendentesSchema)
export {Atendentes}