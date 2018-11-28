'use strict'

const app = require('../NoFood.Api/bin/express');
const variables = require('../NoFood.Api/bin/configuration/variables');

app.listen(variables.Api.port, () => {
    console.info(`Servidor API NoFood iniciado na porta ${variables.Api.port}.`);
});

