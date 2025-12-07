import mongoose, { Mongoose } from "mongoose";


const MONGODB_URI = process.env.URI as string;

if (!MONGODB_URI) {
  throw new Error("Falta la variable URI");
}


interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}


declare global {


  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache || {
  conn: null,
  promise: null,
};

global.mongooseCache = cached;

export async function conexion(): Promise<Mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "jungle",
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
