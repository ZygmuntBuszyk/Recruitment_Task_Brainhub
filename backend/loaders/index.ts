import expressLoader from './express';
import mongooseLoader from './mongoose';
import { Application } from 'express';

export default async ({ expressApp }: {expressApp: Application}) => {
  const mongoConnection = await mongooseLoader()
  .catch(error => console.log(error));

// mongoose.connect(process.env.ATLAS_DB_CONNECTION, { useNewUrlParser: true} );
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () {
//   console.log("connected to DB");
// });

  console.log('MongoDB Initialized');

  return await expressLoader({ app: expressApp });
  // ... more loaders can be here

  // ... Initialize agenda
  // ... or Redis, or whatever you want
}