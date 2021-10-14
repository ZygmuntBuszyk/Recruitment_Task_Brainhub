import expressLoader from './express';
import mongooseLoader from './mongoose';
import { Application } from 'express';

export default async ({ expressApp }: {expressApp: Application}) => {
  const mongoConnection = await mongooseLoader()
    .catch(error => error);

  return await expressLoader({ app: expressApp });
}