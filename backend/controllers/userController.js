import asyncHandler from '../middlewares/asyncHandler.js';
import User from '../models/userModel.js';

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

export { getUserProfile, updateProfile, updatePassword };
