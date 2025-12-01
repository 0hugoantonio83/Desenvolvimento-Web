import { Router } from "express";

const rota = Router();

rota.get('/', (pedido, resposta) => {
    return resposta.send({ message: 'Hello, World!' });
});

rota.get('/pt', (pedido, resposta) => {
    return resposta.json({ message: 'Olá, Mundo!' });
});


export default rota