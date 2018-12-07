'use strict'
const repository = require('../repositories/categoria-repository');
const _repo = new repository();
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');

//criando classe. Poderia ser class
function categoriaController(){

}

categoriaController.prototype.post = async(req, res) => {

    let _validationContract = new validation();

    _validationContract.isRequired(req.body.titulo, 'titulo obrigatorio');
    _validationContract.isRequired(req.body.foto, 'foto obrigatorio');
    ctrlBase.post(_repo, _validationContract, req, res);

};
categoriaController.prototype.put = async(req, res) => { 
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.titulo, 'titulo obrigatorio');
    _validationContract.isRequired(req.body.foto, 'foto obrigatorio');
    _validationContract.isRequired(req.body.foto.id, 'ix obrigatorio');
    ctrlBase.put(_repo, _validationContract, req, res);

};
categoriaController.prototype.get = async(req, res) => {
    ctrlBase.get(_repo, req, res);
};
categoriaController.prototype.getById = async(req, res) => {
    ctrlBase.getById(_repo, req, res);
};
categoriaController.prototype.delete = async(req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = categoriaController;