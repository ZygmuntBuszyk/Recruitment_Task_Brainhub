import express from 'express';
import config from './config/index'

async function main() {
    const app = express();

    await require('./loaders').default({ expressApp: app });

    app.listen(config.port, () => {  
        console.log(`Server up and running on ${config.port}`)
    })
}

main();