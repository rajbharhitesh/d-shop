import express from 'express';
import {
  authorizeRoles,
  isAuthenticatedUser,
} from '../middlewares/authMiddleware.js';
import {
  allOrders,
  getOrderDetails,
  myOrders,
  newOrder,
} from '../controllers/orderController.js';

const router = express.Router();

// api/v1/orders/new
router.route('/orders/new').post(isAuthenticatedUser, newOrder);

// api/v1/me/orders
router.route('/me/orders').get(isAuthenticatedUser, myOrders);

// api/v1/admin/orders
router
  .route('/admin/orders')
  .get(isAuthenticatedUser, authorizeRoles('admin'), allOrders);

// api/v1/orders/:id
router.route('/orders/:id').get(isAuthenticatedUser, getOrderDetails);

export default router;
