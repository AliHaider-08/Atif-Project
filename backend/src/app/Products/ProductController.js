import db from "../Config/Model.js";

export const getProduct = (req, res) => {
  const products = [
    {
      id: 1,
      name: "Iphone 14",
      price: 799,
    },
    {
      id: 2,
      name: "Iphone 15",
      price: 1799,
    },
    {
      id: 3,
      name: "Iphone 17 Pro Max",
      price: 2799,
    },
  ];
  res.json(products);
};


export const createProduct = async (req, res) => {
  try {
    console.log('=== DEBUG INFO ===');
    console.log('Raw req.body:', req.body);
    console.log('req.body.name:', req.body?.name);
    console.log('req.body.price:', req.body?.price);
    console.log('req.body.ProductName:', req.body?.ProductName);
    console.log('Type of req.body:', typeof req.body);
    console.log('Object keys:', req.body ? Object.keys(req.body) : 'No body');
    
    // Validate required fields
    const { name, price } = req.body;
    
    if (!name || !price) {
      return res.status(400).json({ 
        error: 'Missing required fields', 
        message: 'name and price are required' 
      });
    }
    
    const product = await db.Product.create({
      name: name.trim(),
      price: parseFloat(price)
    });
    
    console.log('Product created:', product);
    res.status(201).json(product);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(500).json({ error: 'Failed to create product', details: error.message });
  }
};
export const deleteProduct = (req, res) => {
  res.send("Delete Product");
};

export const getProductById = (req, res) => {};



export const updateProduct = (req, res) => {};

