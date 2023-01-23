import React from "react";
import { useLoaderData } from "react-router-dom";
import './Checkout.css'
import checkout from '../../assets/images/checkout/checkout.png'
const Checkout = () => {
  const { title } = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto">
        <div className="mt-6 checkout-img relative w-fit rounded-lg">
            <h1 className="text-white font-bold text-5xl absolute left-[10%] top-2/4 ">Check Out</h1>
        </div>
      <div className="bg-[#F3F3F3] rounded-lg my-32 py-24">
      <form className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Your Phone"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Your Email"
            className="input input-bordered w-full "
          />
        </div>
        <div>
          <textarea
            className="textarea w-full my-6 textarea-bordered"
            placeholder="Your Message"
          ></textarea>
          <button className="btn border-0 my-6 w-full bg-[#FF3811]">
            Order Confirm
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Checkout;
