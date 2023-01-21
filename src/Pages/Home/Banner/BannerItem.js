import React from 'react';
import "./BannerItem.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const BannerItem = ({slide}) => {
    const {image,prev,next,id}= slide;
    return (
        <div id={`slide${id}`} className=" carousel-item relative w-full py-0">
        <div className="carousel-img">
          <img  src={image} alt="" className="w-full rounded-xl" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h1 className="md:text-6xl hidden md:block font-bold text-white">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
        </div>
        <div className="absolute flex justify-start transform md:w-2/5 -translate-y-1/2 md:left-24 top-1/4 left-4 md:top-1/2">
          <p className="text-white md:text-xl">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
        </div>
        <div className="absolute flex justify-start transform w-2/5 -translate-y-1/2 md:left-24 left-3 top-3/4 md:top-3/4">
          <button className="btn border-0 mr-5 hover:bg-[#ffffff67] bg-[#FF3811]">
            Discover More
          </button>
          <button className="btn btn-outline border-[white] bg-transparent hover:bg-[#FF3811] hover:border-[#FF3811] text-white">
            Latest Project
          </button>
        </div>
        <div className="absolute md:flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 hidden md:block">
          <a
            href={`#slide${prev}`}
            className="btn btn-circle border-0 bg-[#ffffff67] hover:bg-[#FF3811] mr-5"
          >
            <ArrowLeftIcon className=" h-6 w-6 text-light" />
          </a>
          <a
            href={`#slide${next}`}
            className="btn btn-circle border-0 hover:bg-[#ffffff67] bg-[#FF3811]"
          >
            <ArrowRightIcon className=" h-6 w-6 text-light" />
          </a>
        </div>
      </div>
    );
};

export default BannerItem;