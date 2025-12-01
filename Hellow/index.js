import express from 'express';
import morgan from 'morgan';
import rota from './rotas.js';

const apli = express()

apli.listen(3000, () => {
    console.log('Servidor on http://localhost:3000');
});

apli.use('/requisicao', rota);

apli.use(morgan('dev'));

apli.use(express.static('front.html'));

apli.use(express.json());