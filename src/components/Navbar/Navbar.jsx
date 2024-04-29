import React from "react";
import Logo from "../../assets/logo1.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About us",
    link: "/#about us",
  },
  {
    id: 3,
    name: "Today's Deal",
    link: "/#deals",
  },
  {
    id: 3,
    name: "Contact us",
    link: "/#contact",
  },
  {
    id: 3,
    name: "Our Franchise",
    link: "/#franchise",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "New Delhi",
    link: "/#",
  },
  {
    id: 2,
    name: "Banglore",
    link: "/#",
  },
  {
    id: 3,
    name: "Hyderabad",
    link: "/#",
  },
  {
    id: 1,
    name: "Chandigarh",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className=" shadow-md bg-white dark:bg-gray-900 dark:text-white duration-100 relative z-40">
      <div className="bg-primary/40 py-3">
        <div className=" container flex justify-between items-center">
          <div> 
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              ShopEasy
            </a>
            <div className="md:text-xs md:text-right text-red-900 italic">
            <p>Shop Smart, Shop Easy !</p> 
            </div>
            
          </div>
          <div className="flex justify-between items-center gap-7">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[50px] sm:w-[200px] group-hover:w-[400px] transition-all duration-500 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Your Cart
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Our Stores
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
