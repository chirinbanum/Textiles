import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import AdminHome from './components/AdminHome';
import UserHome from './components/UserHome';
import ManageProducts from './components/AdminHome/ManageProducts';
import AddProduct from './components/AdminHome/AddProduct';
import EditProduct from './components/AdminHome/EditProduct';
import DeleteProduct from './components/AdminHome/DeleteProduct';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/AdminHome" element={<AdminHome />} />
        <Route path="/manage-products" element={<ManageProducts />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product" element={<EditProduct />} />
        <Route path="/delete-product" element={<DeleteProduct />} />

        {/* User Routes */}
        <Route path="/UserHome" element={<UserHome />} />
      </Routes>
    </Router>
  );
}

export default App;
