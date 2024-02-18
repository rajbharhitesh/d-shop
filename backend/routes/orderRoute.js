import express from 'express';
import { isAuthenticatedUser } from '../middlewares/authMiddleware.js';
import { newOrder } from '../controllers/orderController.js';

const router = express.Router();

// api/v1/orders/new
router.route('/orders/new').post(isAuthenticatedUser, newOrder);

export default router;
