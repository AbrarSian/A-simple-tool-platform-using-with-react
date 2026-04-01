import React from "react";
import { FiShoppingCart, FiMenu } from "react-icons/fi";

const Navbar = ({carts}) => {
  return (
    <div className="drawer">
      <input id="main-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/*Container */}
        <header className="navbar bg-base-100 shadow-sm px-4 md:px-10 h-20">
          {/*Left part */}
          <div className="flex items-center flex-1">
            <div className=" flex-none lg:hidden">
              <label
                htmlFor="main-drawer"
                className="btn btn-ghost btn-square mr-2"
              >
                <FiMenu size={24} />
              </label>
            </div>
            <div>
              <a className="text-2xl md:text-3xl font-extrabold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent cursor-pointer">
                DigiTools
              </a>
            </div>
          </div>

          {/*center part*/}
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-1 text-gray-600 font-medium">
              <li>
                <a className="hover:text-[#7C3AED] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a className="hover:text-[#7C3AED] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a className="hover:text-[#7C3AED] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:text-[#7C3AED] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="hover:text-[#7C3AED] transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/*right part*/}
          <div className="flex-1 justify-end flex items-center gap-2 md:gap-4">
            
            {/* cart */}
            <button className="btn btn-ghost btn-circle text-gray-600 hover:text-[#7C3AED]">
              <div className="indicator">
                {/* Cart Icon */}
                <FiShoppingCart size={22} />

                {/* Red Circle Badge */}
                <span className="indicator-item badge badge-sm h-5 w-5 rounded-full border-none bg-[#FF4157] text-white text-[10px] font-bold flex items-center justify-center p-0">
                  {carts.length}
                </span>
              </div>
            </button>

            {/* login */}
            <button className="btn btn-ghost hidden sm:inline-flex capitalize font-medium text-gray-700">
              Login
            </button>

            {/* btn */}
            <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-none rounded-full lg:px-6 min-h-0 lg:h-11 capitalize shadow-md">
              Get Started
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Sidebar items */}
      <div className="drawer-side z-50">
        <label htmlFor="main-drawer" className="drawer-overlay"></label>
        <ul className="menu p-6 w-50 min-h-full bg-base-100 text-lg font-medium">
          <div className="mb-5 px-3 text-2xl font-bold text-[#7C3AED]">
            DigiTools
          </div>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <div className="divider opacity-50"></div>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;