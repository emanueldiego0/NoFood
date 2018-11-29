require('../models/usuario-model');
const md5 = require('md5')
const base = require('../bin/base/repository-base');

class usuarioRepository{

    constructor(){
        this._base = new base('Usuario');
        this._projection = 'nome email _id'
    }

    async IsEmailExistente(Email){
        return await this._base._model.findOne({email: Email}, this._projection);
    }
    async authenticate(Email, Senha){
        let _hashSenha = md5(Senha);
        return await this._base._model.findOne({email: Email, senha: _hashSenha}, this._projection);
    }

    async create(data){
        let usuarioCriado = await this._base.create(data); 
        return this._base._model.findById(usuarioCriado._id, this._projection);
    }

    async update(id, data){
        let usuarioAtualizado = await this._base.update(id, {
            nome: data.nome,
            email: data.email,
            foto: data.foto
        });
        return this._base._model.findById(usuarioAtualizado._id, this._projection);
    }

    async getAll(){
        return await this._base._model.find({}, this._projection);
    }

    async getById(id){
        return await this._base._model.findById(id, 'nome email _id foto');
    }

    async delete(id){
        return await this._base._model.findByIdAndDelete(id);
    }
}

module.exports = usuarioRepository;