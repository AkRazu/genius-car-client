import React from "react";

const ServiceCard = ({ service }) => {
    const {img,title,price}=service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-[#444444] font-bold text-2xl">{title}</h2>
        <p className="text-2xl text-orange-600 font-semibold">Price : ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn border-0 btn-circle bg-orange-600"> &gt; </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
