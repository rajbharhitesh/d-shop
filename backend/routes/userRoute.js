import express from 'express';
import { isAuthenticatedUser } from '../middlewares/authMiddleware.js';
import { getUserProfile } from '../controllers/userController.js';

const router = express.Router();

// api/v1/users/me
router.route('/me').get(isAuthenticatedUser, getUserProfile);

export default router;
