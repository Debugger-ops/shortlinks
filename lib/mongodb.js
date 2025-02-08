import { MongoClient } from "mongodb";

// MongoDB connection URI, stored in the environment variable
const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Add your MongoDB URI to .env.local");
}

let client;
let clientPromise;

// Use a global variable to preserve the client in development mode
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri); // No need for useNewUrlParser
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, don't use a global variable
  client = new MongoClient(uri); // No need for useNewUrlParser
  clientPromise = client.connect();
}

export default clientPromise;
