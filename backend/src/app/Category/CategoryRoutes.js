import express from 'express';
import { getCategories, getCategoryById, updateCategory , deleteCategory , createCategory } from './CategoryController.js';

const router = express.Router();


router.get('/Categories', getCategories);                //multiple products used 
router.delete('/Category/:id', deleteCategory);      //delete product by id
router.get('/Category/:id', getCategoryById);        //get product by id
router.post('/createCategory', createCategory);         //create a new product
router.put('/Category/:id', updateCategory);      //update product by id
export default router;     
