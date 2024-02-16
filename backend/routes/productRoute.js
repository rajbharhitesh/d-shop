import express from 'express';
import { getProducts } from '../controllers/productController.js';

const router = express.Router();

// api/v1/products
router.route('/products').get(getProducts);

export default router;
