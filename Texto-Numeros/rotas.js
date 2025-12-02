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

rota.get('/numero/:param', (pedido, resposta) => {
    const entrada = pedido.query.input; 
    const acao = pedido.params.param;   

    if (!entrada) {
        return resposta.status(400).send('A entrada não pode ser vazia');
    }

    const numeros = entrada.split(',').map(num => Number(num.trim()));
    let resultado;

    if (numeros.some(isNaN)) {
        return resposta.status(400).send('A lista deve conter apenas números');
    }

    if (acao === 'minimo') {
        resultado = Math.min(...numeros);

    } else if (acao === 'maximo') {
        resultado = Math.max(...numeros);

    } else {
        return resposta.status(400).send('A ação deve ser minimo ou maximo');
    }

    return resposta.send(resultado.toString());
});

export default rota