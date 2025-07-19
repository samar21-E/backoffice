import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    const uri = process.env.MONGO_URL;
    if (!uri) throw new Error('MONGO_URI not defined in .env');

    await mongoose.connect(uri, {
      // optional config
    });
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', (err as Error).message);
    process.exit(1);
  }
};

export default connectDB;
