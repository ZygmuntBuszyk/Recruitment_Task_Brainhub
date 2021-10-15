import { addEvent } from '../events';
import express from 'express';
import config from '../../config/index'
import { IEventRequest } from '../../types';
const app = express();

describe("Event tests",  ()=> {
    let server: any;

    beforeAll( async ()=> {
        await require('../../loaders').default({ expressApp: app });

        server = app.listen(config.port);
    })  

    afterAll(done => {
        server.close(done)
    })

    it("should be able to create events and receive a record", async () => {
        const event: IEventRequest = { 
            firstName: 'Zygmunt',
            lastName: 'Buszyk',
            email: 'stozzek@gmail.com',
            eventDate: new Date(2025,12,24)};

        const record = await addEvent(event);
        
        expect(record).toBeTruthy()
    })
})