'use strict'
const repository = require('../repositories/usuario-repository');
const validation = require('../bin/helpers/validation');
const md5 = require('md5');
const _repo = new repository();
const ctrlBase = require('../bin/base/controller-base');

//criando classe. Poderia ser class
function usuarioController(){

}

usuarioController.prototype.post = async(req, res) => { 
    let _validationContract = new validation();
    
    _validationContract.isRequired(req.body.nome, 'informe o nome');
    _validationContract.isRequired(req.body.email, 'informe seu email');
    _validationContract.isEmail(req.body.email, 'email invalido');
    _validationContract.isRequired(req.body.senha, 'senha é requerida');
    _validationContract.isRequired(req.body.senhaConfirmacao, 'repeticao da senha é requerida');
    _validationContract.isTrue(req.body.senha != req.body.senhaConfirmacao, 'as senhas devem ser iguais');
    
    let usuarioIsEmailExiste = await _repo.IsEmailExistente(req.body.email);
    if(usuarioIsEmailExiste){
        _validationContract.isTrue((usuarioIsEmailExiste.nome != undefined), `Ja existe o email ${req.body.email} cadastrado em nossa base de dados.`);
    }
    req.body.senha = md5(req.body.senha);

    ctrlBase.post(_repo, _validationContract, req, res);
};
usuarioController.prototype.put = async(req, res) => { 
    let _validationContract = new validation();
    
    _validationContract.isRequired(req.body.nome, 'informe o nome');
    _validationContract.isRequired(req.body.email, 'informe seu email');
    _validationContract.isEmail(req.body.email, 'email invalido');
    _validationContract.isRequired(req.body.id, 'informe o id do usuario');

    let usuarioIsEmailExiste = await _repo.IsEmailExistente(req.body.email);
    if(usuarioIsEmailExiste){
        _validationContract.isTrue(
            (usuarioIsEmailExiste._id != req.body.id) && 
            (usuarioIsEmailExiste.nome != undefined), 
            `Ja existe o email ${req.body.email} cadastrado em nossa base de dados.`);
    }
    
    
    ctrlBase.put(_repo, _validationContract, req, res);
};

usuarioController.prototype.get = async(req, res) => {
    ctrlBase.get(_repo, req, res);
};
usuarioController.prototype.getById = async(req, res) => {
    ctrlBase.getById(_repo, req, res);
};
usuarioController.prototype.delete = async(req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = usuarioController;