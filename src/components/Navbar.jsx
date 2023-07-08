import React from "react";
import Logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <div className="navbar bg-blue-900 text-white shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button className="text-gray-900">Home</button>
            </li>
            <li>
              <button className="text-gray-900">About</button>
              <ul className="p-2 text-gray-900">
                <li>
                  <button className="text-gray-900">Profil</button>
                </li>
                <li>
                  <button className="text-gray-900">Visi Dan Misi</button>
                </li>
                <li>
                  <button className="text-gray-900">Struktur Organisasi</button>
                </li>
                <li>
                  <button className="text-gray-900">Personil</button>
                </li>
              </ul>
            </li>
            <li>
              <button className="text-gray-900">Contact</button>
            </li>
          </ul>
        </div>
        <button className="btn btn-ghost normal-case text-xl">
          <img src={Logo} className="w-[50px]" alt="" /> HMTI
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button>Home</button>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>About</summary>
              <ul className="p-2">
                <li>
                  <button className="text-gray-900">Profil</button>
                </li>
                <li>
                  <button className="text-gray-900">Visi Dan Misi</button>
                </li>
                <li>
                  <button href="" className="text-gray-900">
                    Struktur Organisasi
                  </button>
                </li>
                <li>
                  <button href="" className="text-gray-900">
                    Personil
                  </button>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
