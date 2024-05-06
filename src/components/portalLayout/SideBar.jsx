import { forwardRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { IoIosArrowForward, IoLogoApple } from "react-icons/io";
import { RiCompasses2Line } from "react-icons/ri";
import { IoFlowerOutline } from "react-icons/io5";
import { PiFlowerLotusBold } from "react-icons/pi";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { FaPowerOff } from "react-icons/fa6";

const Sidebar = forwardRef(({ }, ref) => {
  const router = useNavigate();
  const location = useLocation();

  const [showStatistics, setshowStatistics] = useState(false);
  const [showIcons, setshowIcons] = useState(false);
  const [showTable, setshowTable] = useState(false);
  const [listTableName, setListTableName] = useState(null);
  const [listIconName, setListIconName] = useState(null);


  const handleStyle = (name) => {
    if (location.pathname === `/${name}`) {
      if (name != null) {
        return "px-2 py-3 mx-5 rounded-xl mt-2 text-center cursor-pointer mb-1 flex items-center bg-[#E8F7FE] dark:bg-[#1F2940] dark:text-[#696FFC] text-[#42A9F5]";
      }
    }
    else {
      return "px-2 py-3 mx-5 rounded-xl mt-2 text-center cursor-pointer mb-1 flex items-center text-gray-700 font-[600] hover:bg-gray-100 dark:hover:bg-[#1F2940] dark:hover:text-[#696FFC] dark:text-gray-300";
    }
  };

  const handleListStyle = (name) => {
    if (location.pathname === `/${name}`) {
      return "mt-4 text-sm font-[500] text-[#42A9F5] cursor-pointer";
    } else {
      return "mt-4 text-sm font-[500] text-gray-600 cursor-pointer hover:text-[#42A9F5]";
    }
  };


  return (
    <div ref={ref} className=" fixed max-w-[16rem] h-full dark:bg-[#1F2940] rounded-r-[1.4rem] !z-10 shadow-sm max-md:w-[40%] overflow-auto no-scrollbar" >
      <>
        <div className="flex p-6 items-center">
          <IoLogoApple className="text-[2.5rem] dark:text-gray-200" />
          <p className="text-sm text-gray-600 font-[600] dark:text-gray-300">Classic Panel</p>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500  px-2 rounded-xl ml-[5px] text-sm text-gray-900">
            v1.0
          </div>
        </div>




        <h1 className="text-[12px] text-gray-600 font-[600] ml-8 mt-2 mb-2 ">
          Navigations
        </h1>

        <div onClick={() => router("/dashboard")} className={`${handleStyle('dashboard')}`}>
          <MdSpaceDashboard className="h-5 w-5 mr-2" />
          <p className="text-sm font-[600]">Dashboard</p>
        </div>

        <div className="flex flex-col mt-2 ">
          <div onClick={() => { router("/test"); setshowStatistics(!showStatistics); }}>
            <div className={`${handleStyle('test')}`}>
              <div className="mr-2">
                <HiOutlinePresentationChartLine className="h-5 w-5" />
              </div>
              <p className="text-sm font-[600]">Statistics</p>
              <IoIosArrowForward className={`ml-auto ${showStatistics ? 'rotate-90 duration-300' : ''}`} />
            </div>
          </div>
        </div>
        {showStatistics && (
          <div className="border-l-[1px] border-gray-400 ml-10 pl-4">
            <li className="mt-4 text-sm font-[500] text-gray-600 cursor-pointer hover:text-[#42A9F5]">Analytics</li>
            <li className="mt-4 text-sm font-[500] text-gray-600 cursor-pointer hover:text-[#42A9F5]">Affliate</li>
            <li className="mt-4 text-sm font-[500] text-gray-600 cursor-pointer hover:text-[#42A9F5]">Finance</li>
          </div>
        )}

        <h1 className="text-[12px] text-gray-600 font-[600] ml-8 mt-6 mb-2">
          UI Components
        </h1>

        <div onClick={() => router("/components")} className={`${handleStyle('components')}`}>
          <RiCompasses2Line className="h-5 w-5 mr-2" />
          <p className="text-sm font-[600]">Components</p>
        </div>

        <div onClick={() => router("/animations")} className={`${handleStyle('animations')}`}>
          <IoFlowerOutline className="h-5 w-5 mr-2" />
          <p className="text-sm font-[600]">Animations</p>
        </div>

        <div onClick={() => { setshowTable(!showTable) }} className={`${handleStyle(listTableName)}`} >
          <PiFlowerLotusBold className="h-5 w-5 mr-2" />
          <p className="text-sm font-[600]">Tables</p>
          <IoIosArrowForward className={`ml-auto ${showTable ? 'rotate-90 duration-300' : ''}`} />
        </div>

        {showTable && (
          <div className="border-l-[1px] border-gray-400 ml-10 pl-4">
            <li onClick={() => { router("/employee"); setListTableName('employee') }} className={`${handleListStyle('employee')}`}>Employee</li>
            <li onClick={() => { router("/table"); setListTableName('table') }} className={`${handleListStyle('table')}`}>Table</li>
            <li onClick={() => { router("/defined"); setListTableName('defined') }} className={`${handleListStyle('defined')}`}>Defined</li>
          </div>
        )}

        <div onClick={() => { setshowIcons(!showIcons) }} className={`${handleStyle(listIconName)}`} >
          <PiFlowerLotusBold className="h-5 w-5 mr-2" />
          <p className="text-sm font-[600]">Icons</p>
          <IoIosArrowForward className={`ml-auto ${showIcons ? 'rotate-90 duration-300' : ''}`} />
        </div>

        {showIcons && (
          <div className="border-l-[1px] border-gray-400 ml-10 pl-4">
            <li onClick={() => { router("/icons"); setListIconName('icons') }} className={`${handleListStyle('icons')}`}>Icon</li>
            <li onClick={() => { router("/material-icons"); setListIconName('material-icons') }} className={`${handleListStyle('material-icons')}`}>Material Icons</li>
          </div>
        )}

        <div className="border-2 rounded-lg p-2 mt-4 mb-20 mx-4 " >
          <h1 className="text-sm font-[600] text-gray-500 ">Help Center</h1>
          <h1 className="text-sm font-[600] text-gray-500  mt-4">Please contact us for more questions.</h1>
          <button className="bg-[#04A9F5] mt-4 mb-2 rounded-md px-2 text-sm text-white font-[600] ">Go to help Center</button>
        </div>


        <div className="bg-white dark:bg-[#1F2940]  fixed bottom-0 w-[15.5rem] rounded-r-xl mt-10 ">
          <div className='px-2 py-3 mx-5 rounded-xl text-center cursor-pointer flex items-center text-gray-700 font-[600] hover:bg-gray-100 hover:dark:bg-[#1F2940] ' >
            <FaPowerOff className="h-5 w-5 mr-2 dark:text-gray-300" />
            <p className="text-sm font-[600] dark:text-gray-300">Log out</p>
          </div>

        </div>
      </>
    </div>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
