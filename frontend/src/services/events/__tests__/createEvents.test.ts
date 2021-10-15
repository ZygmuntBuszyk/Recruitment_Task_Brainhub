import { IEventRequest, IEventResponse } from '../../events/api/apiModels/events';
import { createEvent } from '../createEvents';

test('should send valid a request and receive positive response', async () =>  {
    const request: IEventRequest = {
        firstName: 'Zygmunt',
        lastName: 'Buszyk',
        email: 'stozzek@gmail.com',
        eventDate: new Date(2025,12,24)
    }

    const response: IEventResponse = await createEvent(request);
    
    const { status } = response;
    
    expect(status).toBe(201);
})