import asyncHandler from '../middlewares/asyncHandler.js';
import User from '../models/userModel.js';

/**-----------------------------------------------
 * @desc     Get current logged in user profile
 * @route   /api/v1/user/me
 * @method  GET
 * @access  Private
 ------------------------------------------------*/
const getUserProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({ user });
});

export { getUserProfile };
