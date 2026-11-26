import express from 'express';
import postRoutes from './routes/postRoutes.js';
const app = express();
const PORT = 5000;

//register routes
app.use('/api/posts', postRoutes);

// default routes
app.get('/', (req, res) => {
  res.send('Welcome to Blog Ninja API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});