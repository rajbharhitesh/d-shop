import express from 'express';
import { isAuthenticatedUser } from '../middlewares/authMiddleware.js';
import {
  getUserProfile,
  updatePassword,
  updateProfile,
} from '../controllers/userController.js';

const router = express.Router();

// api/v1/users/me
router.route('/me').get(isAuthenticatedUser, getUserProfile);

// api/v1/users/me/update
router.route('/me/update').put(isAuthenticatedUser, updateProfile);

// api/v1/users/password/update
router.route('/password/update').put(isAuthenticatedUser, updatePassword);

export default router;
