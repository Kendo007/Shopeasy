import React from "react";
import BannerImg from "../../assets/women/summer1.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-down" className="text-3xl sm:text-4xl font-bold">
              Summer Sale upto 50% Off
            </h1>
            <p
              data-aos="fade-down"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Get big discounts on our most selling products. USE COUPON CODE "SHOP29EASY"
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-down" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-down" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Reasonable Price</p>
              </div>
              <div data-aos="fade-down" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Premium Designs</p>
              </div>
              <div data-aos="fade-down" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Easy Returns</p>
              </div>
              <div  className="">
              <button data-aos="fade-down" class="md:relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
               <span class="md:relative px-5 py-2.5 transition-all ease-in duration-75 bg-yellow-50 dark:bg-gray-800 rounded-md group-hover:bg-opacity-0">
               Shop Now
              </span>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
