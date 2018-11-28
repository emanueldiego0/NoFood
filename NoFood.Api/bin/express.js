const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

//routers
const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');
const usuarioRouter = require('../routes/usuario-router');
//criando a API/Server Web do express
const app = express();

//configuracao de parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//configurando conexao banco de dados
mongoose.connect(variables.Database.connection, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

//configurando as rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);
app.use('/api/usuario', usuarioRouter);
//exportando nossa API
module.exports = app;