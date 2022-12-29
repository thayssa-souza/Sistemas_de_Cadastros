const express = require('express');
const app = express();
const port = 3000;
const connection = require('./connection.js');
app.use(express.json());

app.post('/', (request, response) => {
    const communRequest = request.body;
    connection.insert("tbs_nome", communRequest.nome, communRequest.codNome);
    connection.insert("tbs_sobrenome", communRequest.sobrenome, communRequest.codSobrenome);
    connection.insert("tbs_email", communRequest.email, communRequest.codEmail);
    
    console.log("Adicionado ao banco!!!!!");
});

app.listen(port, () => {
    console.log('Porta: ', port);
});