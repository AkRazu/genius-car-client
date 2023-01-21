import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="card card-compact border p-8 rounded-lg  hover:shadow-xl cursor-pointer bg-base-100">
      <div>
        <img className=" rounded-lg" src={img} alt="" />
      </div>
      <div className="card-body">
        <h2 className="text-[#444444] font-bold text-2xl">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-2xl text-orange-600 font-semibold">
            Price : ${price}
          </p>
          <ArrowRightIcon className="h-5 w-5 cursor-pointer  text-[#FF912C]" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
