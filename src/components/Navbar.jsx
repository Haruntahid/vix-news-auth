import { Link, NavLink } from "react-router-dom";
import userImg from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

function Navbar() {
  const { user } = useContext(AuthContext);
  // console.log(user);
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/career"}
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                Career
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <img className="w-10 h-10 mr-5" src={userImg} alt="" />

          {user ? (
            <Link
              to={"/login"}
              className="text-white px-4 py-2 bg-[#403F3F] font-semibold rounded-sm"
            >
              Sign Out
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="text-white px-4 py-2 bg-[#403F3F] font-semibold rounded-sm"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
