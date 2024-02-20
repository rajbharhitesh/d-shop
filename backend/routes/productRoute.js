import express from 'express';
import {
  createProductReview,
  getAdminProducts,
  getProductDetails,
  getProducts,
  getTopProducts,
  newProduct,
} from '../controllers/productController.js';
import {
  authorizeRoles,
  isAuthenticatedUser,
} from '../middlewares/authMiddleware.js';

const router = express.Router();

// api/v1/products
router.route('/products').get(getProducts);

// api/v1/admin/products
router
  .route('/admin/products')
  .get(isAuthenticatedUser, authorizeRoles('admin'), getAdminProducts)
  .post(isAuthenticatedUser, authorizeRoles('admin'), newProduct);

// api/v1/products/top;
router.route('/products/top').get(getTopProducts);

// api/v1/reviews
router.route('/reviews').put(isAuthenticatedUser, createProductReview);

// api/v1/products/:id
router.route('/products/:id').get(getProductDetails);

export default router;
