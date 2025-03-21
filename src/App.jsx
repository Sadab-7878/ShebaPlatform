import { Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import Services from "./pages/Services/Services";
import Staffs from "./pages/Staffs/Staffs";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/staffs" element={<Staffs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
