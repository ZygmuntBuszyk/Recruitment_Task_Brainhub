import express from 'express';
var cors = require('cors')
import { Application } from 'express';
import config from '../config/index'
import routes from '../api/index';
import { errorMiddleware } from '../api/middleware/error.middleware';

export default async ({ app }: {app: Application}) => {
    app.get('/status', (req: any, res: any) => { res.status(200).end(); });

    app.head('/status', (req: any, res: any) => { res.status(200).end(); });

    app.use(cors());
    app.options('*', cors())
    
    app.enable('trust proxy');

    app.use(express.json());
   
     // Load API routes
    app.use(config.api.prefix, routes());

      /// catch 404 and forward to error handler
    app.use((req, res, next) => {
        const err: any  = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });

    /// error handlers
    app.use(errorMiddleware);

    return app;
}   