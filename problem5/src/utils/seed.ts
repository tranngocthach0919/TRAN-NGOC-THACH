import Resource from '../models/resource.model';
import connectDB from './database';
import dotenv from 'dotenv';

dotenv.config();

const sampleResources = [
  {
    name: 'Resource 1',
    description: 'This is the first resource',
    category: 'Technology',
    price: 99.99,
    isAvailable: true
  },
  {
    name: 'Resource 2',
    description: 'This is the second resource',
    category: 'Books',
    price: 49.99,
    isAvailable: true
  },
  {
    name: 'Resource 3',
    description: 'This is the third resource',
    category: 'Technology',
    price: 199.99,
    isAvailable: false
  },
  {
    name: 'Resource 4',
    description: 'This is the fourth resource',
    category: 'Food',
    price: 9.99,
    isAvailable: true
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();
    
    // Clear existing data
    await Resource.deleteMany({});
    console.log('Data cleared...');
    
    // Insert sample data
    await Resource.insertMany(sampleResources);
    console.log('Sample data inserted...');
    
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();