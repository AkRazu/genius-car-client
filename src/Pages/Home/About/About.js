import React from "react";
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
  return (
    <div className="hero my-20 ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="md:w-1/2 relative">
        <img alt=''
          src={person}
          className="rounded-lg w-4/5 h-full shadow-2xl"
        />
        <img alt=''
          src={parts}
          className="border-8 border-white w-3/5 right-5 top-2/4 absolute shadow-2xl"
        />
        </div>
        <div className="md:w-1/2">
            <p className="font-bold text-[#FF3811] text-xl ">About Us</p>
          <h1 className="text-5xl font-bold my-5">We are qualified <br /> & of experience <br /> in this field</h1>
          <p className="py-6 text-[#737373] capitalize">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="py-6 text-[#737373] capitalize">
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>
          <button className="btn border-0 bg-[#FF3811]">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
