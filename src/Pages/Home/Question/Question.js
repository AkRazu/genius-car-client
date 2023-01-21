import React from "react";
import { CalendarIcon, PhoneArrowDownLeftIcon,MapPinIcon } from "@heroicons/react/24/solid";

const Question = () => {
  return (
    <div>
      <div className="grid gap-14 md:grid-cols-3 rounded-xl my-32 bg-black text-white px-16 py-20">
        <div>
          <div className="flex items-center">
            <div className="mr-5">
              <CalendarIcon className="h-10 w-10 text-orange-600" />
            </div>
            <div>
              <p className="font-[500]">We are open monday-friday</p>
              <h2 className="font-bold text-2xl">7:00 am-9:00 pm</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <div className="mr-5">
              <PhoneArrowDownLeftIcon className="h-10 text-orange-600 w-10 " />
            </div>
            <div>
              <p className="font-[500]">Have a question?</p>
              <h2 className="font-bold text-2xl">+2546 251 2658</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <div className="mr-5">
              <MapPinIcon className="h-10 text-orange-600 w-10 " />
            </div>
            <div>
              <p className="font-[500]">Need a repair? our address</p>
              <h2 className="font-bold text-2xl">Liza Street, New York</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
