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
    
    connection.selectCodName("tbs_cod_nome", communRequest.codNome);
    connection.selectCodName("tbs_cod_sobrenome", communRequest.codSobrenome);
    connection.selectCodName("tbs_cod_email", communRequest.codEmail);
});

app.listen(port, () => {
    console.log('Porta: ', port);
});