import asyncHandler from '../middlewares/asyncHandler.js';
import Order from '../models/orderModel.js';
import ErrorHandler from '../utils/errorHandler.js';

/**-----------------------------------------------
 * @desc     Create new order
 * @route   /api/v1/orders/new
 * @method  POST
 * @access  Private
 ------------------------------------------------*/
const newOrder = asyncHandler(async (req, res, next) => {
  const {
    orderItems,
    shippingInfo,
    itemsPrice,
    taxAmount,
    shippingAmount,
    totalAmount,
    paymentMethod,
    paymentInfo,
  } = req.body;

  const order = await Order.create({
    orderItems,
    shippingInfo,
    itemsPrice,
    taxAmount,
    shippingAmount,
    totalAmount,
    paymentMethod,
    paymentInfo,
    user: req.user._id,
  });

  res.status(200).json({ order });
});

/**-----------------------------------------------
 * @desc     Get current user orders
 * @route   /api/v1/me/orders
 * @method  GET
 * @access  Private
 ------------------------------------------------*/
const myOrders = asyncHandler(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });

  res.status(200).json({ orders });
});

export { newOrder, myOrders };
