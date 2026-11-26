import express from 'express';
import dotenv from 'dotenv';
import postRoutes from './routes/postRoutes.js';
import connectDB from './config/database.js';

// Load environment variables
dotenv.config();

// Initialize express
const app = express();

// Define port
const PORT = process.env.PORT || 5000;

// Register routes
app.use('/api/posts', postRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to Blog Ninja API!');
});

// Connect to database, then start server
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Server failed to start:', error.message);
    process.exit(1);
  }
};

startServer();