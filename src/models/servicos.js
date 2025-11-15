import { model, Schema } from "mongoose";

const servicosSchema = new Schema({
    nome: {type: String, required: true},
    preco: {type: Number, required: true}
})

const Servicos = model('Servicos', servicosSchema)
export {Servicos}