export interface IEventRequest {
    firstName: string;
    lastName: string;
    email: string;
    eventDate: Date;
  }
  
  export interface IEventResponse {
    data: IEventRequest;
    status: number;
  }
  