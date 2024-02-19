import express from 'express';
import {
  createProductReview,
  getProductDetails,
  getProducts,
  getTopProducts,
} from '../controllers/productController.js';
import { isAuthenticatedUser } from '../middlewares/authMiddleware.js';

const router = express.Router();

// api/v1/products
router.route('/products').get(getProducts);

// api/v1/products/top;
router.route('/products/top').get(getTopProducts);

// api/v1/reviews
router.route('/reviews').put(isAuthenticatedUser, createProductReview);

// api/v1/products/:id
router.route('/products/:id').get(getProductDetails);

export default router;
