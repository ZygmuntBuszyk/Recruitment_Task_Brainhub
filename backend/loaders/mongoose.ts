import mongoose from 'mongoose';
import { Db } from 'mongodb';
import config from '../config/index'

export default async (): Promise<Db> => { 
  try {
    const connection = await mongoose.connect((config.databaseURL as string), ({ useNewUrlParser: true } as mongoose.ConnectOptions));

    return connection.connection.db;
  } catch(err) {
    console.log(err);
    
    throw err;
  }
}