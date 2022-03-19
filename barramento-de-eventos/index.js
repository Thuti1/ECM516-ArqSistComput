const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
//para enviar eventos para os demais microsserviços
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.put("/lembretes", async (req,res) => {
    //COMPLETAR
});

app.post('/eventos', (req,res) => {
    const evento = req.body;
    //envia o evento para o microserviço de lembretes
    axios.post('http://localhost:4000/eventos', evento);
    //envia o evento para o microserviço de observações
    axios.post('http://localhost:5000/eventos', evento);
    res.status(200);
});

app.listen(10000, () => {
    console.log('Barramento de eventos. Porta 10000');
});