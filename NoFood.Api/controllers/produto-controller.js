'use strict'
const repository = require('../repositories/produto-repository');
const _repo = new repository();
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');

//criando classe. Poderia ser class
function produtoController(){

}

produtoController.prototype.post = async(req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.nome, 'nome obrigatorio');
    _validationContract.isRequired(req.body.foto, 'foto obrigatorio');
    _validationContract.isRequired(req.body.descricao, 'descricao obrigatorio');
    _validationContract.isRequired(req.body.preco, 'preco obrigatorio');
    ctrlBase.post(_repo, _validationContract, req, res);
};
produtoController.prototype.put = async(req, res) => { 
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.nome, 'nome obrigatorio');
    _validationContract.isRequired(req.body.foto, 'foto obrigatorio');
    _validationContract.isRequired(req.body.descricao, 'descricao obrigatorio');
    _validationContract.isRequired(req.body.preco, 'preco obrigatorio');
    ctrlBase.post(_repo, _validationContract, req, res);
};
produtoController.prototype.get = async(req, res) => {
    ctrlBase.get(_repo, req, res);
};

produtoController.prototype.getById = async(req, res) => {
    ctrlBase.get(_repo, req, res);
};

produtoController.prototype.delete = async(req, res) => {
    ctrlBase.get(_repo, req, res);
};

module.exports = produtoController;