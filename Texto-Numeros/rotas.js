import { Router } from "express";

const rota = Router();

rota.post('/:param', (pedido, resposta) => {
    const corpo = pedido.body.pedido;
    const param = pedido.params.param;

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

rota.get('/10,1,100', (pedido, resposta) => {
    const corpo = pedido.body.pedido;
    const param = pedido.params.param;

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
Math.min
Math.max
export default rota