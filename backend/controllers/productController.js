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

/**-----------------------------------------------
 * @desc    Fetch Single Product
 * @route   /api/v1/products/:id
 * @method  GET
 * @access  Public
 ------------------------------------------------*/
const getProductDetails = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ error: 'Product not Found..!' });
  }

  res.status(200).json({ product });
};

export { getProducts, getProductDetails };
