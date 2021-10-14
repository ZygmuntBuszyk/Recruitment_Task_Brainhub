import { IEventRequest } from "../types";
import EventSchema from '../models/Event';

export const addEvent = async (event: IEventRequest ) => { 
    try {
        let eventRecord = await EventSchema.create({...event});

        if (!eventRecord) {
            throw new Error('Event cannot be created');
        }

        return eventRecord;
    }
    catch (err) {
        throw err;
    }
};