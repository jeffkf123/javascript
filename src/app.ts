import express from 'express';

import config from './config';


async function startServer() {
// console.log('tedsdst');   
const app = express();
(await import ('./loaders')).default({app});

app.listen(3000, () => console.log(`zbr is running ${config.port}`) )
    .on('error', error =>{

        console.log(error.message);
        process.exit(1);
    })



}

startServer();
