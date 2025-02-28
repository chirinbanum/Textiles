import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AdminHome from "./components/AdminHome";
import UserHome from "./components/UserHome";
import ManageProducts from "./components/AdminHome/ManageProducts";  // ✅ Import the missing component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/AdminHome" element={<AdminHome />} />
        <Route path="/UserHome" element={<UserHome />} />
        <Route path="/manage-products" element={<ManageProducts />} /> {/* ✅ Now it will work */}
      </Routes>
    </Router>
  );
}

export default App;
