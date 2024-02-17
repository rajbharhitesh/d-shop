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

export { getUserProfile, updateProfile };
