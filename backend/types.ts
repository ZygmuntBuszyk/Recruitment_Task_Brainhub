import { Request, RequestHandler as Middleware, Response } from "express";

export type Event = { firstName: String; lastName: String, email: String, wventDate: Date };

type Method =
  | "get"
  | "head"
  | "post"
  | "put"
  | "delete"
  | "connect"
  | "options"
  | "trace"
  | "patch";

export type Handler = (req: Request, res: Response) => any;

export type Route = {
  method: Method;
  path: String;
  middleware: Middleware[];
  handler: Handler;
};