import express from 'express';
import config from '../config/index'
import request from 'supertest';
const app = express();

describe("Application tests",  ()=> {
    let server: any;

    beforeAll( async ()=> {
        await require('../loaders').default({ expressApp: app });

        server = app.listen(config.port);
    })

    afterAll(done => {
        server.close(done)
    })

    describe("Route tests", ()=> {
        it("should get working status of a server", async () => {
            await request(server).get('/status').expect(200);
        })

        it("should be able to create events", async () => {
            await request(server).post('/api/events/create')
                .set('Accept', 'application/json')
                .send({ 
                    firstName: 'Zygmunt',
                    lastName: 'Buszyk',
                    email: 'stozzek@gmail.com',
                    eventDate: new Date(2025,12,24)})
                .expect('Content-Type', /json/)
                .expect(201);
        })
    })
    
    describe("404 route",  ()=> {
        it('returns status of 404 on routes that does not exist', async () => {
            await request(server).post('/fail').expect(404);
        })
    })
})
