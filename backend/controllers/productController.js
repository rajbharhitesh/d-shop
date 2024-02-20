import asyncHandler from '../middlewares/asyncHandler.js';
import Product from '../models/productModel.js';
import APIFilter from '../utils/apiFilter.js';
import ErrorHandler from '../utils/errorHandler.js';

/**-----------------------------------------------
 * @desc    Fetch All Products
 * @route   /api/v1/products
 * @method  GET
 * @access  Public
 ------------------------------------------------*/
const getProducts = asyncHandler(async (req, res) => {
  const resPerPage = 8;
  const apiFilters = new APIFilter(Product, req.query).search().filters();

  let products = await apiFilters.query;
  let filteredProductsCount = products.length;

  apiFilters.pagination(resPerPage);
  products = await apiFilters.query.clone();

  res.status(200).json({
    resPerPage,
    filteredProductsCount,
    products,
  });
});

/**-----------------------------------------------
 * @desc    Fetch Single Product
 * @route   /api/v1/products/:id
 * @method  GET
 * @access  Public
 ------------------------------------------------*/
const getProductDetails = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id).populate(
    'reviews.user'
  );

  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }

  res.status(200).json({ product });
});

/**-----------------------------------------------
 * @desc    Create/Update product review 
 * @route   /api/v1/reviews
 * @method  PUT
 * @access  Private
 ------------------------------------------------*/
const createProductReview = asyncHandler(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req?.user?._id,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }

  const isReviewed = product?.reviews?.find(
    (r) => r.user.toString() === req?.user?._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((review) => {
      if (review?.user?.toString() === req?.user?._id.toString()) {
        review.comment = comment;
        review.rating = rating;
      }
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  product.ratings =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({ success: true });
});

/**-----------------------------------------------
 * @desc    Fetch top Products
 * @route   /api/products/top
 * @method  GET
 * @access  Public
 ------------------------------------------------*/
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(5);

  res.json(products);
});

/**-----------------------------------------------
 * @desc     Get Products --- ADMIN
 * @route   /api/vi/admin/products
 * @method  GET
 * @access  Private
 ------------------------------------------------*/
const getAdminProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.status(200).json({ products });
});

/**-----------------------------------------------
 * @desc     Create new Product  --- ADMIN
 * @route   /api/vi/admin/products
 * @method   POST
 * @access  Private
 ------------------------------------------------*/
const newProduct = asyncHandler(async (req, res) => {
  req.body.user = req.user._id;

  const product = await Product.create(req.body);

  res.status(201).json({ product });
});

export {
  getProducts,
  getProductDetails,
  createProductReview,
  getTopProducts,
  getAdminProducts,
  newProduct,
};
