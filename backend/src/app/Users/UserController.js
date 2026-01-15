import db from "../Config/Model.js";
import bcrypt from 'bcryptjs';

export const getUsers = async (req, res) => {
  try {
    const users = await db.Users.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users', details: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    console.log('=== CREATE USER DEBUG ===');
    console.log('Request method:', req.method);
    console.log('Content-Type:', req.get('Content-Type'));
    console.log('Raw req.body:', req.body);
    
    // Try to get data from different sources
    let userData = req.body;
    
    // If body is undefined, try to parse raw request
    if (!userData) {
      return res.status(400).json({
        success: false,
        error: 'Request body is missing',
        message: 'Please ensure you are sending JSON data',
        debug: {
          contentType: req.get('Content-Type'),
          bodyExists: !!req.body,
          headers: req.headers
        }
      });
    }
    
    // Extract fields safely - handle both fullName and name
    const name = userData.fullName || userData.name || userData['fullName'] || userData['name'];
    const email = userData.email || userData['email'];
    const password = userData.password || userData['password'];
    const phone = userData.phone || userData['phone'];
    const cnic = userData.cnic || userData['cnic'];
    const gender = userData.gender || userData['gender'];
    const age = userData.age || userData['age'];
    
    console.log('Extracted data:', { name, email, phone, cnic, gender, age, hasPassword: !!password });
    
    if (!name || !email || !password) {
      return res.status(400).json({ 
        success: false,
        error: 'Missing required fields', 
        message: 'name, email, and password are required',
        received: userData
      });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user with password
    const user = await db.Users.create({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      password: hashedPassword,
      phone: phone ? String(phone).trim() : null,
      cnic: cnic ? String(cnic).trim() : null,
      gender: gender ? String(gender).trim() : null,
      age: age ? parseInt(age) : null
    });
    
    // Remove password from response for security
    const userResponse = { ...user.toJSON() };
    delete userResponse.password;
    
    console.log('User created successfully:', userResponse);
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: userResponse
    });
  } catch (error) {
    console.log('Error creating user:', error.message);
    
    // Handle duplicate email error
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({
        success: false,
        error: 'Email already exists',
        message: 'This email is already registered'
      });
    }
    
    res.status(500).json({ 
      success: false,
      error: 'Failed to create user', 
      details: error.message 
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await db.Users.destroy({ where: { id } });
    
    if (deleted) {
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user', details: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await db.Users.findByPk(id);
    
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user', details: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    
    const [updated] = await db.Users.update(
      {
        name: name ? name.trim() : undefined,
        email: email ? email.trim().toLowerCase() : undefined,
        phone: phone !== undefined ? (phone ? phone.trim() : null) : undefined
      },
      { where: { id } }
    );
    
    if (updated) {
      const updatedUser = await db.Users.findByPk(id);
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user', details: error.message });
  }
};