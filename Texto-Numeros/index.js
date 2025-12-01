import express from 'express';
import rota from './rotas.js';

const apli = express()

apli.use(express.json());

apli.use('/requisicao', rota);

apli.listen(3000, () => {
    console.log('Servidor on http://localhost:3000');
});

