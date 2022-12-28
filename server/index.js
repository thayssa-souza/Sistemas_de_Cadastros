const express = require('express');
const app = express();
const port = 3000;

app.post('/', (request, response) => {
    response.send('Got a POST request');
})

app.listen(port, () => {
    console.log('Porta: ', port);
})