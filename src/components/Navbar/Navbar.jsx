import React, { useState } from "react";
import logo from "../../assets/icons/logo.png";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="bg-blue-700">
      <div className="container flex justify-between items-center py-3">
        <img
          className="w-[120px] h-[60px]"
          src={logo}
          alt="Matbuot xizmati logo"
        />

        {/* Drawer Button */}
        <div className="flex justify-center items-center gap-5">
          {/* <span className="border-[1px] p-2 hover:border-red-600 border-white rounded-lg">
            <h3 className="text-white font-bold">
              <a href="">+998(93) 324 56 66</a>
            </h3>
          </span> */}
          <button className="bg-white text-blue-700 font-medium px-4 py-2 rounded-lg">
            Aloqa uchun
          </button>
          <button className="text-white" onClick={toggleDrawer}>
            <svg
              className="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Overlay */}
          {isDrawerOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30"
              onClick={toggleDrawer}
            ></div>
          )}

          {/* Drawer */}
          {isDrawerOpen && (
            <div className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto bg-white w-80 shadow-lg transition-transform">
              <h5
                id="drawer-right-label"
                className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
              ></h5>
              <button
                type="button"
                onClick={toggleDrawer}
                className=" rounded-lg text-sm w-10 h-10 absolute top-2.5 right-2.5 inline-flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close menu</span>
              </button>

              <div className="flex flex-col gap-2 pt-3">
                <span className="border-[2px] font-medium p-2 rounded-lg border-blue-700">
                    Yetkazib berish shartlari
                </span>
                <span className="border-[2px] font-medium p-2 rounded-lg border-blue-700">
                    Qo'shimcha ma'lumotlar
                </span>

              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
