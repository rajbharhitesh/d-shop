import asyncHandler from '../middlewares/asyncHandler.js';
import User from '../models/userModel.js';
import { delete_file, upload_file } from '../utils/cloudinary.js';
import ErrorHandler from '../utils/errorHandler.js';

/**-----------------------------------------------
 * @desc     Get current logged in user profile
 * @route   /api/v1/users/me
 * @method  GET
 * @access  Private
 ------------------------------------------------*/
const getUserProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({ user });
});

/**-----------------------------------------------
 * @desc     Update profile by logged in user
 * @route   /api/v1/users/me/update
 * @method  PUT
 * @access  Private
 ------------------------------------------------*/
const updateProfile = asyncHandler(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  const user = await User.findByIdAndUpdate(req.user._id, newUserData, {
    new: true,
  });

  res.status(200).json({ user });
});

/**-----------------------------------------------
 * @desc     Update password by logged in user
 * @route   /api/v1/users/password/update
 * @method  PUT
 * @access  Private
 ------------------------------------------------*/
const updatePassword = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req?.user?._id).select('+password');

  // Check the previous user password
  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHandler('Old Password is incorrect', 400));
  }

  user.password = req.body.password;
  user.save();

  res.status(200).json({ success: true });
});

/**-----------------------------------------------
 * @desc     Upload avatar
 * @route   /api/v1/users/me/upload_avatar
 * @method  PUT
 * @access  Private
 ------------------------------------------------*/
const uploadAvatar = asyncHandler(async (req, res, next) => {
  const avatarResponse = await upload_file(req.body.avatar, 'shopit/avatars');

  // Remove previous avatar
  if (req?.user?.avatar?.url) {
    await delete_file(req?.user?.avatar?.public_id);
  }

  const user = await User.findByIdAndUpdate(req?.user?._id, {
    avatar: avatarResponse,
  });

  res.status(200).json({ user });
});

export { getUserProfile, updateProfile, updatePassword, uploadAvatar };
