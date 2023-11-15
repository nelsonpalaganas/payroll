require('dotenv').config();
const { MongoClient } = require('mongodb');

async function connectToMongoDB() {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    console.log('Connected to MongoDB');

    // Close the connection when done
    await client.close();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = connectToMongoDB();