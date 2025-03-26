import { Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import Services from "./pages/Services/Services";
import Staffs from "./pages/Staffs/Staffs";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ServiceDetails from "./pages/Services/ServiceDetails";
import StaffDetails from "./pages/Staffs/StaffDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-details/:id" element={<ServiceDetails />} />
        <Route path="/staffs" element={<Staffs />} />
        <Route path="/staff-details/:id" element={<StaffDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
