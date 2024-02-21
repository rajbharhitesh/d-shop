import express from 'express';
import {
  authorizeRoles,
  isAuthenticatedUser,
} from '../middlewares/authMiddleware.js';
import {
  allUsers,
  deleteUser,
  getUserDetails,
  getUserProfile,
  updatePassword,
  updateProfile,
  updateUser,
  uploadAvatar,
} from '../controllers/userController.js';

const router = express.Router();

// api/v1/users/me
router.route('/me').get(isAuthenticatedUser, getUserProfile);

// api/v1/users
router.route('/').get(isAuthenticatedUser, authorizeRoles('admin'), allUsers);

// api/v1/users/me/update
router.route('/me/update').put(isAuthenticatedUser, updateProfile);

// api/v1/users/me/upload_avatar
router.route('/me/upload_avatar').put(isAuthenticatedUser, uploadAvatar);

// api/v1/users/password/update
router.route('/password/update').put(isAuthenticatedUser, updatePassword);

// api/v1/users/:id
router
  .route('/:id')
  .get(isAuthenticatedUser, authorizeRoles('admin'), getUserDetails)
  .put(isAuthenticatedUser, authorizeRoles('admin'), updateUser)
  .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser);

export default router;
