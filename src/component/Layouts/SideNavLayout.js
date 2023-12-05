import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { BiBookOpen } from "react-icons/bi";

const SideNavLayout = () => {
  return (
    <div className="w-[300px] bg-primary text-white py-2 px-3 ">
      {/* Dashboard Link */}
      <Link to="/" className="text-black">
        <div className="flex items-center justify-start gap-4 px-4 py-4 hover:text-secondary transition duration-300 ease-in-out cursor-pointer">
          <MdDashboard className="mr-2 text-lg text-black" />
          <div className="text-black text-[14px] ">Dashboard</div>
        </div>
      </Link>

      {/* Quiz & Events Link */}
      <Link to="/quizandevents" className="text-black">
        <div className="flex items-center justify-start gap-4 px-4 py-4 hover:text-secondary transition duration-300 ease-in-out cursor-pointer">
          <BiBookOpen className="mr-2 text-lg text-black" />
          <div className="text-black text-[14px] ">Quiz & Events</div>
        </div>
      </Link>

      {/* Global Settings Link */}
      <Link to="/globalsettings" className="text-black">
        <div className="flex items-center justify-start gap-4 px-4 py-4 hover:text-secondary transition duration-300 ease-in-out cursor-pointer">
          <BiBookOpen className="mr-2 text-lg text-black" />
          <div className="text-black text-[14px]">Global Settings</div>
        </div>
      </Link>

      {/* Global Settings Submenu */}
      <div className="flex justify-end">
        <ul>
          <li className="py-2">
            <div className="flex items-center ">
              <span className="bg-black w-1 h-1 rounded-full mr-2"></span>
              <div className="text-black text-[14px] ">Terms & Condition</div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <span className="bg-black w-1 h-1 rounded-full mr-2"></span>
              <div className="text-black text-[14px] ">Privacies</div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <span className="bg-black w-1 h-1 rounded-full mr-2"></span>
              <div className="text-black text-[14px] ">Contact Us</div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <span className="bg-black w-1 h-1 rounded-full mr-2"></span>
              <div className="text-black text-[14px] ">
                Quiz Terms & Conditions
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <span className="bg-black w-1 h-1 rounded-full mr-2"></span>
              <div className="text-black text-[14px] ">
                Quiz Privacy & Policies
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <span className="bg-black w-1 h-1 rounded-full mr-2"></span>
              <div className="text-black text-[14px]  "> Quiz Rules</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavLayout;
