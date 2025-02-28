import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AdminHome from "./components/AdminHome";
import UserHome from "./components/UserHome";
import ManageProducts from "./components/AdminHome/ManageProducts";
import EditProduct from "./components/AdminHome/EditProduct";  // ✅ Import EditProduct.js

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/AdminHome" element={<AdminHome />} />
        <Route path="/UserHome" element={<UserHome />} />
        <Route path="/manage-products" element={<ManageProducts />} />
        <Route path="/edit-product/:productId" element={<EditProduct />} /> {/* ✅ Add EditProduct route */}
      </Routes>
    </Router>
  );
}

export default App;
