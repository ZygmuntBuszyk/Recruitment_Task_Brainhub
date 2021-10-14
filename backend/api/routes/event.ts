import { Router, Request, Response, NextFunction } from 'express';
import { addEvent } from '../../data/events'; 
import { celebrate, Joi } from 'celebrate';
import  { IEventRequest } from '../../types';

const route = Router();

export default (app: Router) => {
    app.use('/events', route);

    route.post('/create', 

    celebrate({
        body: Joi.object({  
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().required(),
            eventDate: Joi.date().greater('now').required().messages({
                'date.less': `Event can't be created on the passed date`,
              }),
        }),
      }),async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { firstName, lastName, email, eventDate } = await addEvent(req.body as IEventRequest);

            return res.status(201).json({ firstName, lastName, email, eventDate });
        } catch (err) {
            next(err)
        }
    });
};
