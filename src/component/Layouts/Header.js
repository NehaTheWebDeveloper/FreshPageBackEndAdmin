import React from "react";
import logo from "../../assets/freshpage logo.png";
import { FaUserAlt } from "react-icons/fa";


const Header = () => {
  return (
    <>
    <div className="bg-white border-b border-gray-300 shadow-lg sticky top-0 w-full">
      <div className="container mx-auto py-2 px-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-xl font-bold text-gray-800">
              <img src={logo} alt="Your Logo" height={60} width={140} />
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <div className="text-sm text-gray-700">
              Virendra Chaouhan <br />
              <span className="text-xs">Supervisor</span>
            </div>
            <div className="ml-4 rounded-full h-10 w-10 bg-primary flex items-center justify-center">
              <FaUserAlt
                className="text-white"
                style={{ fontSize: "24px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;
