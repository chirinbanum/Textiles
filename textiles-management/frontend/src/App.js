import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AdminHome from "./components/AdminHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/AdminHome" element={<AdminHome />} />
      </Routes>
    </Router>
  );
}

export default App;
