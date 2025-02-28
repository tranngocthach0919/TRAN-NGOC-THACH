import app from './app';
import connectDB from './utils/database';

const PORT: number = parseInt(process.env.PORT || '5000', 10);

// Connect to MongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});