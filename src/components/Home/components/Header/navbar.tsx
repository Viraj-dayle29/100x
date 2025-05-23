import React, { useState } from "react";
import Logo from "../Universal/logo/logo";
import Button from "../Universal/button/button";
import { Github } from "../../../../../public/assets/icons/github";
import { X } from "../../../../../public/assets/icons/x";

interface NavbarElement {
  name: string;
  url: string;
}

const elementsNavbar: NavbarElement[] = [
  {
    name: "Customization",
    url: "/",
  },
  {
    name: "Team",
    url: "/",
  },
  {
    name: "About Us",
    url: "/",
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#49454e] bg-black">
      <div className="max-w-[95.5rem] flex items-center justify-between mx-auto py-3 sm:px-5 px-0">
        <div className="flex">
          <Logo className="mr-10" />
          <div className="gap-8 items-center text-base text-gray-custom font-semibold sm:flex hidden">
            {elementsNavbar.map((element) => (
              <div>
                <h3 className="hover:text-white transition-colors">
                  {element.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          {/* This section is hidden on small screens and shown on sm (640px+) and up */}
          <div className="hidden sm:flex items-center">
            <X className="text-gray-custom mr-2" />
            <Github className="text-gray-custom mr-2" />
            <span className="border border-r-0 border-[#49454e] mr-4 h-8"></span>
            <Button
              children="Login"
              className="text-white rounded-md bg-[rgb(10,10,10)] hover:bg-[rgb(30,30,30)] font-medium border border-[#232323]"
            />
            <Button
              children="Sign Up"
              className="text-black rounded-md ml-3 bg-white font-medium border border-[#232323] hover:bg-gray-100"
            />
          </div>

          {/* This toggle button is only visible on small screens (sm:hidden) */}
          <Button
            onClick={toggleMenu}
            className="hover:text-white sm:hidden flex focus:outline-none ml-auto"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="toggle"
              className="w-7 h-7 text-gray-custom"
            />
          </Button>
        </div>
      </div>

      <div
        className={`absolute left-0 right-0 backdrop-blur-sm transition-all duration-300 ease-in-out  border-b border-[#49454e] overflow-hidden z-50 mx-auto sm:hidden block  ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="p-5">
          <div className="flex flex-col backdrop-blur-sm text-center gap-3 text-gray-custom">
            <Button
              children="Login"
              className="text-white rounded-md bg-[rgb(10,10,10)] font-medium border border-[#232323] w-full hover:bg-[rgb(30,30,30)]"
            />
            <Button
              children="Sign Up"
              className="text-black rounded-md bg-white font-medium border border-[#232323] w-full mb-3 hover:bg-gray-100"
            />
            {elementsNavbar.map((element) => (
              <div className="flex items-center justify-center">
                <h3 className="hover:text-white transition-colors font-bold ">
                  {element.name}
                </h3>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
