import Product from '../models/productModel';

/**-----------------------------------------------
 * @desc    Fetch All Products
 * @route   /api/v1/products
 * @method  GET
 * @access  Public
 ------------------------------------------------*/
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.status(200).json({ products });
});

export { getProducts };
