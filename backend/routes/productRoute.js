import express from 'express';
import {
  getProductDetails,
  getProducts,
} from '../controllers/productController.js';

const router = express.Router();

// api/v1/products
router.route('/products').get(getProducts);

// api/v1/products/:id
router.route('/products/:id').get(getProductDetails);

export default router;
