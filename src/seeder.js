import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Admin from './models/Admin.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const seedAdmin = async () => {
  try {
    await Admin.deleteMany(); // Clear existing admins to avoid duplicates

    const createdAdmin = await Admin.create({
      email: 'admin@softkorn.com',
      password: 'password123', // Admin can change this later
    });

    console.log('Admin user seeded! Email: admin@softkorn.com, Password: password123');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

seedAdmin();
