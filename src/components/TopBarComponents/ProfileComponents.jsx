import React from "react";

import avatar from "../../assets/avatar-2.jpeg";
import { FaKey, FaPowerOff } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
import { MdDownloadForOffline, MdOutlineFavoriteBorder } from "react-icons/md";

const ProfileComponents = () => {
  return (
    <div>
      <div>
        <div className="border-b-[1px] border-gray-400 sticky p-2">
          <h1 className="text-[16px] text-gray-600 font-[600] pl-2 pt-2">
            Profile
          </h1>
        </div>
        <div className="h-[23rem] overflow-y-auto">
          <div className="flex items-center justify-center gap-4 py-4 border-b-[1px] border-gray-300">
            <img
              src={avatar}
              className="h-10 w-10  rounded-full  border-gray-600  mt-[6px]"
            />
            <div>
              <h1 className="text-md ">Carson Darrin</h1>
              <h1 className="text-sm text-[#42A9F5]">
                carson.darrin@company.io
              </h1>
            </div>
            <div className="bg-[#42A9F5] rounded-md px-2 text-sm text-white font-[600] ">
              pro
            </div>
          </div>

          <div className="border-b-[1px] border-gray-300">
            <div
              className={`px-2 py-3 mx-5 rounded-xl mt-2 text-center cursor-pointer mb-1 flex items-center text-gray-700 font-[600]  hover:bg-gray-100`}
            >
              <FaKey className="h-5 w-5 mr-2" />
              <p className="text-sm font-[600]">Change Password</p>
            </div>

            <div
              className={`px-2 py-3 mx-5 rounded-xl mt-2 text-center cursor-pointer mb-1 flex items-center text-gray-700 font-[600]  hover:bg-gray-100`}
            >
              <IoMail className="h-5 w-5 mr-2" />
              <p className="text-sm font-[600]">Recently mail</p>
            </div>
            <div
              className={`px-2 py-3 mx-5 rounded-xl mt-2 text-center cursor-pointer mb-1 flex items-center text-gray-700 font-[600]  hover:bg-gray-100`}
            >
              <AiFillSchedule className="h-5 w-5 mr-2" />
              <p className="text-sm font-[600]">Schedule meetings</p>
            </div>
          </div>

          <div className="border-b-[1px] border-gray-300">
            <div
              className={`px-2 py-3 mx-5 rounded-xl mt-2 text-center cursor-pointer mb-1 flex items-center text-gray-700 font-[600]  hover:bg-gray-100`}
            >
              <MdOutlineFavoriteBorder className="h-5 w-5 mr-2" />
              <p className="text-sm font-[600]">Favorite</p>
            </div>

            <div
              className={`px-2 py-3 mx-5 rounded-xl mt-2 text-center cursor-pointer mb-1 flex items-center text-gray-700 font-[600]  hover:bg-gray-100`}
            >
              <MdDownloadForOffline className="h-5 w-5 mr-2" />
              <p className="text-sm font-[600]">Download</p>
            </div>
          </div>

          <div className="border-b-[1px] border-gray-300">
            <div
              className={`px-2 py-3 mx-5 rounded-xl mt-2 text-center cursor-pointer mb-1 flex items-center text-gray-700 font-[600]  hover:bg-gray-100`}
            >
              <FaPowerOff className="h-5 w-5 mr-2" />
              <p className="text-sm font-[600]">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponents;
