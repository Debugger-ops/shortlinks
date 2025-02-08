import { NextResponse } from 'next/server';  // Import NextResponse for returning JSON responses
import clientPromise from "@/lib/mongodb";  // MongoDB connection

export async function POST(request) {
  try {
    // Parse the request body to get the JSON data
    const body = await request.json();
    console.log(body);

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("shortlink");
    const collection = db.collection("url");

    // Check if the short URL already exists
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
      // If the short URL exists, return an error response
      return NextResponse.json({
        success: false,
        error: true,
        message: 'URL already exists!'
      });
    }

    // Insert the new short URL into the database
    const result = await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl
    });

    // Return a success response
    return NextResponse.json({
      success: true,
      error: false,
      message: 'URL Generated Successfully'
    });

  } catch (error) {
    // Handle unexpected errors
    console.error("Error while processing the request:", error);
    return NextResponse.json({
      success: false,
      error: true,
      message: 'An unexpected error occurred'
    });
  }
}
