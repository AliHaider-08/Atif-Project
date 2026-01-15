import db from "../Config/Model.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await db.Category.findAll();
    res.json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};

export const createCategory = async (req,res)=>{
   const body=req.body;
   console.log('Request body:', body)
   console.log('Request headers:', req.headers)
   try {
      console.log('Attempting to create category with data:', body);
      const category= await db.Category.create(body);
      console.log('Category created successfully:', category);
      res.status(201).json(category);
   }
   catch (error){
   console.log('Error creating category:', error);
   res.status(500).json({error: 'Failed to create category', details: error.message});
   }
};

export const deleteCategory=(req,res)=>{
}

export const getCategoryById=(req,res)=>{
}

export const updateCategory=(req,res)=>{
}