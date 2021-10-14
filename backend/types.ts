export interface IEventRequest { firstName: String; lastName: String, email: String, eventDate: Date };

export type HttpException = Error & { status: number}