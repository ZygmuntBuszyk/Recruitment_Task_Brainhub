import mongoose from 'mongoose';

export default async (): Promise<any> => { 
  const connection = await mongoose.connect((process.env.DATABASE_URL as string), ({ useNewUrlParser: true } as mongoose.ConnectOptions))
  return connection.connection.db;
}

// mongoose.connect(process.env.ATLAS_DB_CONNECTION, { useNewUrlParser: true} );
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () {
//   console.log("connected to DB");
// });