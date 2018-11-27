const express = require('express');
const app = express();

/*
C - CREATE - post
R - READ - get
U - UPDATE - put
D - DELETE - delete
*/

app.get('/',(req, res) => {
    res.status(200).send('Olá Mundo!');
});

app.post('/',(req, res) => {
    res.status(201).send('Criado');
});

app.put('/',(req, res) => {
    res.status(202).send('Atualizado');
});

app.delete('',(req, res) => {
    res.status(204).send('Registro excluido');
});



//subindo server na porta 3000
app.listen(3000, () => {
    console.log('Servidor Api NoFood iniciado na porta 3000.');
});