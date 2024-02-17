import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import errorMiddleware from './middlewares/errorMiddleware.js';

// Handle Uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log(`ERROR: ${err}`);
  console.log('Shutting down due to uncaught expection');
  process.exit(1);
});

dotenv.config();

// connect DB
connectDB();

// import all routes
import productRoute from './routes/productRoute.js';
import authRoute from './routes/authRoute.js';
import userRoute from './routes/userRoute.js';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/v1', productRoute);
app.use('/api/v1', authRoute);
app.use('/api/v1/user', userRoute);

// Using error middleware
app.use(errorMiddleware);

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on PORT:${PORT}`.bgBlue
      .black.underline.bold
  );
});

//Handle Unhandled Promise rejections
process.on('unhandledRejection', (err) => {
  console.log(`ERROR: ${err}`);
  console.log('Shutting down server due to Unhandled Promise Rejection');
  server.close(() => {
    process.exit(1);
  });
});
