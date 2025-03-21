import React from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/sheba_logo_blue.png";
const Navbar = () => {
  return (
    <>
      <div className="bg-white h-28 md:h-24 sticky top-0 shadow-md z-10">
        <div className="container mx-auto flex justify-between items-center p-2">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-40" />
          </Link>

          <div className="">
            <NavLink
              to={"/services"}
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-1 mx-2 text-white border border-sky-800 bg-sky-800 rounded-md"
                  : "px-3 py-1 mx-2 text-black border rounded-md hover:bg-sky-800 hover:text-white"
              }
            >
              Services
            </NavLink>
            <NavLink
              to={"/staffs"}
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-1 mx-2 text-white border border-sky-800 bg-sky-800 rounded-md"
                  : "px-3 py-1 mx-2 text-black border rounded-md hover:bg-sky-800 hover:text-white"
              }
            >
              Staffs
            </NavLink>
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-1 mx-2 text-white border border-sky-800 bg-sky-800 rounded-md"
                  : "px-3 py-1 mx-2 text-black border rounded-md hover:bg-sky-800 hover:text-white"
              }
            >
              Login
            </NavLink>
            {/* <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-1 mx-2 text-white border border-sky-800 bg-sky-800 rounded-md"
                  : "px-3 py-1 mx-2 text-black border rounded-md hover:bg-sky-800 hover:text-white"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to={"/admin"}
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-1 mx-2 text-white border border-sky-800 bg-sky-800 rounded-md"
                  : "px-3 py-1 mx-2 text-black border rounded-md hover:bg-sky-800 hover:text-white"
              }
            >
              Admin
            </NavLink>
            <NavLink
              to={"/staff"}
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-1 mx-2 text-white border border-sky-800 bg-sky-800 rounded-md"
                  : "px-3 py-1 mx-2 text-black border rounded-md hover:bg-sky-800 hover:text-white"
              }
            >
              Staff
            </NavLink> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
