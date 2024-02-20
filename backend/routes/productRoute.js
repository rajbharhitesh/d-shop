import express from 'express';
import {
  createProductReview,
  getAdminProducts,
  getProductDetails,
  getProducts,
  getTopProducts,
  newProduct,
  updateProduct,
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

// api/v1/admin/products/:id
router
  .route('/admin/products/:id')
  .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct);

export default router;
