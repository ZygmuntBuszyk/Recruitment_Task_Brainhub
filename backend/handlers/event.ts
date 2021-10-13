import { addEvent } from "../data/events";
import { Handler } from "../types";

export const signup: Handler = (req, res) => {
    // TODO
//   const { firstName, lastName } = req.body; 
//   if (!firstName?.trim() || !lastName?.trim()) {
//     return res.status(400).send("Bad username or password");
//   }
//   addEvent({ username, password });
//   addEvent({ event });
  res.status(201).send("Event created");
};