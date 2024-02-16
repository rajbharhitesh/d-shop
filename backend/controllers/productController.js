import Product from '../models/productModel.js';

/**-----------------------------------------------
 * @desc    Fetch All Products
 * @route   /api/v1/products
 * @method  GET
 * @access  Public
 ------------------------------------------------*/
const getProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({ products });
};

export { getProducts };
