import  cors from 'cors';
import eventsRoutes from '../api/events';
import { Application } from 'express';

export default async ({ app }: {app: Application}) => {
    app.get('/status', (req: any, res: any) => { res.status(200).end(); });
    app.head('/status', (req: any, res: any) => { res.status(200).end(); });
    app.enable('trust proxy');
    app.use(cors());

    
    // Routes 
    app.use('/contract/erc20', eventsRoutes)
  
    // ...More middlewares
  
    // Return the express app
    return app;
}   