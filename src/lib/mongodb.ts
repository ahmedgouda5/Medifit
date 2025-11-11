import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

// نعرّف نوع الكاش
interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// نضيف الكاش على globalThis
const globalWithMongoose = globalThis as typeof globalThis & {
  mongoose: MongooseCache;
};

// نتاكد إن global.mongoose متعرفة
if (!globalWithMongoose.mongoose) {
  globalWithMongoose.mongoose = { conn: null, promise: null };
}

const cached = globalWithMongoose.mongoose;

export async function connectDB(): Promise<Mongoose> {
  // لو الاتصال موجود بالفعل
  if (cached.conn) return cached.conn;

  // لو مفيش promise لسه
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "mydatabase",
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
