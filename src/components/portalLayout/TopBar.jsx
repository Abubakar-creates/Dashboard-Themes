import React, { Fragment, useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";

import { IoIosArrowDown, IoIosArrowDropup, IoIosSunny } from "react-icons/io";

import avatar from "../../assets/avatar-2.jpeg";
import ProfileComponents from "../TopBarComponents/ProfileComponents";
import { TiWeatherSunny } from "react-icons/ti";

const Topbar = ({ showNav, setShowNav }) => {
  const router = useNavigate();

  const [data, setData] = useState();
  const [provider, setProvider] = useState(false);
  const [providerData, setProviderData] = useState();

  //   const logout = () => {
  //     sessionStorage.setItem(SESSION_ADMIN_LOGIN, "false")
  //     sessionStorage.setItem(SESSION_ADMIN_ID, null)
  //     sessionStorage.setItem(SESSION_ADMIN_TYPE, null)
  //     sessionStorage.setItem(SESSION_ADMIN_USER, null)
  //     router('/login')
  //   }

  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  //   const isProviderLogin = sessionStorage.getItem(SESSION_PROVIDER_LOGIN)
  //   const user = sessionStorage.getItem(SESSION_ADMIN_USER)
  //   const providerInfo = sessionStorage.getItem(SESSION_PROVIDER)

  //   useEffect(() => {
  //     if (isProviderLogin === "false" || null) {
  //       setProvider(false)
  //       setData(JSON.parse(user))
  //     } else {
  //       setProvider(true)
  //       setProviderData(JSON.parse(providerInfo));
  //     }
  //   }, [ user, providerInfo])

  //   const logoutProvider = () => {
  //     sessionStorage.setItem(SESSION_PROVIDER_LOGIN, "false")
  //     sessionStorage.setItem(SESSION_PROVIDER_ID, null)
  //     sessionStorage.setItem(SESSION_PROVIDER_TYPE, null)
  //     sessionStorage.setItem(SESSION_PROVIDER, null)
  //     router('/providerLogin')
  //   }

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const [lightDark, setLightDark] = useState(
    localStorage.getItem("lightDark")
      ? localStorage.getItem("lightDark")
      : "light"
  );

  const toggleTheme = () => {
    setLightDark(lightDark === "light" ? "dark" : "light");
  };

  const element = document.documentElement;

  const darkQuery = window.matchMedia("(prefers-color-scheme : dark");

  function onWindowMatch() {
    if (
      localStorage.lightDark === "dark" ||
      (!localStorage.hasOwnProperty("lightDark") && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  useEffect(() => {
    switch (lightDark) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("lightDark", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("lightDark", "light");
        break;
      default:
        localStorage.removeItem("lightDark");
        break;
    }
  }, [lightDark]);

  return (
    <div
      className={` w-full h-16 flex !backdrop-blur-sm bg-transparent fixed z-10 justify-between items-center transition-all duration-[400ms] ${
        showNav ? "pl-[10.5rem] max-sm:pl-[14rem]" : ""
      }`}
    >
      <div className="pl-4 md:pl-[6.5rem]">
        <HiMenuAlt2
          className="text-2xl max-md:h-[20px] max-md:w-[20px]  text-gray-700 cursor-pointer dark:text-gray-300"
          onClick={() => {
            setShowNav(!showNav);
          }}
        />
      </div>
      {lightDark === "light" ? (
        <IoIosSunny
          className="ml-auto mr-4 h-6 w-6 cursor-pointer"
          onClick={() => toggleTheme()}
        />
      ) : (
        <TiWeatherSunny
          className="ml-auto mr-4 h-6 w-6 cursor-pointer text-gray-300"
          onClick={() => toggleTheme()}
        />
      )}

      <div className=" items-center  pr-4 md:pr-8">
        <Popover className="relative">
          <Popover.Button
            onClick={toggleMenu}
            className="flex items-center gap-2 outline-none cursor-pointer text-gray-700"
          >
            <img
              src={avatar}
              className="h-10 w-10  rounded-full  border-gray-600  "
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Popover.Panel className="absolute shadow-xl rounded-xl right-0 max-sm:right-0 z-50 mt-2 bg-white shadow-sm rounded-md max-w-xs max-sm:w-[230px] w-[450px]">
              <ProfileComponents />
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
};

export default Topbar;
