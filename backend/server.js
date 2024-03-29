import path from 'path';
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
import orderRoute from './routes/orderRoute.js';
import userRoute from './routes/userRoute.js';
import paymentRoute from './routes/paymentRoute.js';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(
  express.json({
    limit: '10mb',
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/v1', productRoute);
app.use('/api/v1', authRoute);
app.use('/api/v1', orderRoute);
app.use('/api/v1', paymentRoute);
app.use('/api/v1/users', userRoute);

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

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
