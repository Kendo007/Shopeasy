import React from "react";
import Img1 from "../../assets/shirt/phone.png";
import Img2 from "../../assets/shirt/earpods.png";
import Img3 from "../../assets/shirt/samsung.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Apple Iphone 15 Pro Max",
    description:
      "Get 10% off ,our Price: 1,05,000",
  },
  {
    id: 2,
    img: Img2,
    title: "Apple Airpods pro 2",
    description:
      "Get lower price deal only on SHOPEASY , Price: 14,999",
  },
  {
    id: 3,
    img: Img3,
    title: "Samsung s24 ultra",
    description:
      "Get 5% discount on SBI Credit Card and get 2000 Cashback",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          {/* <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p> */}
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Electronics & Accessories
          </h1>
          <p data-aos="fade-up" className="text-xl text-gray-600">
            Get newly launched electronic items at SHOPEASY
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[85px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
