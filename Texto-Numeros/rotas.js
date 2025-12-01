import { Router } from "express";

const rota = Router();

rota.post('/rotas/lowercase', (pedido, resposta) => {
    const { corpo } = pedido.body;
    const { param } = pedido.params;

    if (!corpo) {
        return resposta.status(400).send('A entrada não pode ser vazia')
    }

    let resultado = corpo;

    if (param === 'lowercase') {
        resultado = corpo.toLowerCase();
    } else if (param === 'uppercase') {
        resultado = corpo.toUpperCase();
    } else {
        return resposta.status(400).send('A ação não pode ser vazia');
    }

    return resposta.send(resultado);
});

export default rota