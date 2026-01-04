import React, { useContext } from "react";
import profileImg from "../assets/developer.jpg";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const userNavigation = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  /* { name: "Logout", href: "/login" }, */
];

const MyNavbar = () => {
  const navigate=useNavigate()

  const {currentUser,handleLogOut}=useContext(AuthContext)
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
             
              <h1 className="text-lg font-semibold tracking-wide text-white">
                MOVIE APP
              </h1>

          
              <div className="flex items-center gap-2">
         
                
            
                <Menu as="div" className="relative">
                  <MenuButton  className="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                    <span className="text-sm font-medium text-gray-200">
                     {currentUser?.email.slice(0,4)  }
                    </span>
                    <img
                      src={profileImg}
                      alt=""
                      className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10"
                    />
                  </MenuButton>

                  <MenuItems className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        {({ focus }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              focus ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </MenuItem>
                    ))}
                    <MenuItem >
                        {({ focus }) => (
                          <span
                            onClick={()=>{ handleLogOut();  navigate("/home");}}
                            className={classNames(
                              focus ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                            )}
                          >
                           logout
                          </span>
                        )}
                      </MenuItem>
                  </MenuItems>
                </Menu>

            
                <DisclosureButton className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          
          <DisclosurePanel className="md:hidden border-t border-white/10">
            <div className="px-4 py-3">
              <div className="space-y-1">
                {userNavigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default MyNavbar;
