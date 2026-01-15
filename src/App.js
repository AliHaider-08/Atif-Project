// import Result from './Pages/Result';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Contactus from './Pages/Contactus';
import ProductList from './Pages/ProductList';
import Dashbaord from './Pages/Dashbaord';
import Customers from './Pages/Customers';
import Orders from './Pages/Orders';
import Settings from './Pages/Settings';
import Dropdown from './Dropdown/Dropdown';
import Signin from './Dropdown/Signin';
import Signup from './Dropdown/Signup';
import ShopingCart from './Pages/ShopingCart';





function App() {
  return (
    

  
      <>
        {/* <LoginPage/>
        <div>
          <ShowStatus/>
        </div>

        <div>
          <Result/>
        </div>

        <div>
          <Notifications message={["Name", "Address" , "Age" , "RollNo" , "Cnic" ,"Postal Adress" ,"GPA" ,"CGPA"]}/>
        </div>

        <div>
          <StudentList/>
        </div>

        <div>
          <ProductCards/>
        </div>

        <div>
          <NameInput/>
        </div>

        <div>
          <ValidateForm/>
        </div> */}
              

        {/* NAVBAR */}
        <nav className="p-6 bg-gray-500 text-white text-center ">
          <Link to="/" className="m-10 text-white">Home</Link>
          <Link to="/dashbaord" className="m-10 text-white">Dashboard</Link>
          <Link to="/contactus" className="m-10 text-white">Contact Us</Link>    
          <Link to="/ProductList" className="m-10 text-white">Product List</Link>
          <Link to="/ShoppingCart" className='m-10 text-white'>Shopping Cart</Link>
           
          <Dropdown />
        </nav>

        {/* ROUTES */}
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashbaord" element={<Dashbaord />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/ProductList" element={<ProductList />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/ShoppingCart" element = {<ShopingCart/>}/>
            <Route path="/Customers" element={<Customers />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/Setting" element={<Settings />} />

          </Routes>
        </div>
      </>

   
  );
}

export default App;
