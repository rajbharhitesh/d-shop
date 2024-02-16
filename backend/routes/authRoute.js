import express from 'express';
import { registerUser } from '../controllers/authController.js';

const router = express.Router();

// api/v1/register
router.route('/register').post(registerUser);

export default router;
