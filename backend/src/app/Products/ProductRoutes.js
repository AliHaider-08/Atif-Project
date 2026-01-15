import express from 'express';
import { getProduct, deleteProduct , getProductById , createProduct , updateProduct } from './ProductController.js';
const router = express.Router();


router.get('/products', getProduct);                //multiple products used 
router.delete('/products/:id', deleteProduct);      //delete product by id
router.get('/products/:id', getProductById);        //get product by id
router.post('/createProduct', createProduct);         //create a new product
router.put('/products/:id', updateProduct);      //update product by id
export default router;     