const express = require('express');
const app = express();
const port = 3000;
const connection = require('./connection.js');
app.use(express.json());
const cors = require('cors');

app.use(cors());

app.post('/', async (request, response) => {
    const communRequest = request.body;

    connection.insert("tbs_nome", communRequest.nome, communRequest.codNome);
    connection.insert("tbs_sobrenome", communRequest.sobrenome, communRequest.codSobrenome);
    connection.insert("tbs_email", communRequest.email, communRequest.codEmail);  
    
    const promise1 = connection.selectCodName("tbs_cod_nome", communRequest.codNome);
    const promise2 = connection.selectCodName("tbs_cod_sobrenome", communRequest.codSobrenome);
    const promise3 = connection.selectCodName("tbs_cod_email", communRequest.codEmail);

    const somas = await promise1 + await promise2 + await promise3;
    
   const result = await connection.selectAnimal("tbs_animais", "tbs_cores", "tbs_paises", "tbs_cores_excluidas", somas);

    response.send(result[0]);
});

app.listen(port, () => {
    console.log('Porta: ', port);
});