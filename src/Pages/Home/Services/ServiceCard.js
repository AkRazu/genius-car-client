import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { img, title, price ,_id} = service;
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
          <Link className="text-[#FF912C]" to={`/checkout/${_id}`}>
          <ArrowRightIcon className="h-5 w-5 cursor-pointer  text-[#FF912C]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
