import express from 'express';
// import loaders from './loaders/index';
import config from './config/index'
import dotenv from 'dotenv';

async function main() {
    // config() will read your .env file, parse the contents, assign it to process.env.
    // dotenv.config();
    
    const app = express();
    // await loaders({ expressApp: app });
    await require('./loaders').default({ expressApp: app });

    app.listen(config.port, () => {  
        console.log(`Server up and running on ${config.port}`)
    })
}

main();

// api -- handlers  / routes
// services -- data
// src
// │   app.js          # App entry point
// └───api             # Express route controllers for all the endpoints of the app
// └───config          # Environment variables and configuration related stuff
// └───jobs            # Jobs definitions for agenda.js
// └───loaders         # Split the startup process into modules
// └───models          # Database models
// └───services        # All the business logic is here
// └───subscribers     # Event handlers for async task
// └───types           # Type declaration files (d.ts) for Typescript


// controller - service layer - data access layer     -----   express route controller - service class - mongoose odm
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