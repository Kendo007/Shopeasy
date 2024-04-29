import React from "react";
import Img1 from "../../assets/women/gadget-png-pic.png";
import Img2 from "../../assets/women/home.png";
import Img3 from "../../assets/women/sports.png";
import Img4 from "../../assets/women/books.png";
import Img5 from "../../assets/women/watch.png"
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Electronics/Gadgets",
    rating: 4.9,
    color: "Get upto 40% off",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Home & Kitchen",
    rating: 4.5,
    color: "Get upto 50% off", 
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Sports & Fitness",
    rating: 4.2,
    color: "Get upto 80% off",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Books & Stationary",
    rating: 4.3,
    color: "Get upto 60% off",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Smart Watches",
    rating: 4.9,
    color: "Get upto 40% off",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-2xl text-primary">
            Best Selling Products
          </p>
          <p data-aos="fade-up" className="text-xl text-gray-500">
           Shop with us , get more discount from us
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
