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

  res.status(201).json({ order });
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

/**-----------------------------------------------
 * @desc     Get order detail
 * @route   /api/v1/orders/:id
 * @method  GET
 * @access  Private
 ------------------------------------------------*/
const getOrderDetails = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );

  if (!order) {
    return next(new ErrorHandler('No Order found with this ID', 404));
  }

  res.status(200).json({ order });
});

/**-----------------------------------------------
 * @desc     Get all orders  --- ADMIN
 * @route   /api/v1/admin/orders
 * @method  GET
 * @access  Private
 ------------------------------------------------*/
const allOrders = asyncHandler(async (req, res, next) => {
  const orders = await Order.find();

  res.status(200).json({ orders });
});

/**-----------------------------------------------
 * @desc     Delete order  --- ADMIN
 * @route   /api/v1/admin/orders/:id
 * @method   DELETE
 * @access  Private
 ------------------------------------------------*/
const deleteOrder = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler('No Order found with this ID', 404));
  }

  await order.deleteOne();

  res.status(200).json({ success: true });
});

export { newOrder, myOrders, getOrderDetails, allOrders, deleteOrder };
