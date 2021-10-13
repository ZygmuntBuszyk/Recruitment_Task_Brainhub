import express from 'express';
import loaders from './loaders/index';
import config from './config/index'
// import { CreateSolFile } from './contracts/contractCreation.js';
import dotenv from 'dotenv';
async function main() {
    // CreateSolFile('0x3D8E1467fEe7E1e62f2C5d506187A40dc40e2CE1');
   
    // config() will read your .env file, parse the contents, assign it to process.env.
    dotenv.config();
    
    const app = express();
    await loaders({ expressApp: app });

    app.listen(config.port, () => {  
        console.log(`Server up and running on ${config.port}`)
    })
}

main();

// --------------
// https://khalilstemmler.com/blogs/typescript/node-starter-project/
// https://softwareontheroad.com/ideal-nodejs-project-structure/#folder
// --------------
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Well done!');
// })

// app.listen(5000, () => {
//     console.log('The application is listening on port 5000!');
// })