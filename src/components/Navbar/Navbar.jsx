import React, { useState } from "react";
import logo from "../../assets/icons/logo.png";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
          <button
            className="bg-white text-blue-700 font-medium px-4 py-2 rounded-lg"
            onClick={toggleModal}
          >
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

              <div className="flex flex-col gap-1 pt-10">
                <span className="border-[1px] font-medium p-2 rounded-lg hover:bg-blue-700 hover:text-white cursor-pointer border-blue-700">
                  Yetkazib berish shartlari
                </span>
                <span className="border-[1px] font-medium p-2 rounded-lg hover:bg-blue-700 hover:text-white cursor-pointer border-blue-700">
                  Qo'shimcha ma'lumotlar
                </span>
              </div>
            </div>
          )}

          {/* Modal */}
          {isModalOpen && (
            <>
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black bg-opacity-60 z-40"
                onClick={toggleModal}
              ></div>

              {/* Modal Content */}
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <h3 className="text-lg font-medium text-gray-900">
                      Aloqa uchun ma'lumot
                    </h3>
                    <button
                      onClick={toggleModal}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-700 text-sm">
                      Biz bilan bog'lanish uchun telefon raqamingizni kiriting:
                    </p>
                    <input
                      type="text"
                      placeholder="+998 (__) ___ __ __"
                      className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                    />
                    <button
                      className="mt-4 w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800"
                      onClick={toggleModal}
                    >
                      Yuborish
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
