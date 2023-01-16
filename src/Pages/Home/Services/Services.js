import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-32">
      <div>
        <p className="text-2xl font-bold text-orange-600 text-center">
          Popular Products
        </p>
        <h1 className="text-[#151515] font-bold text-5xl text-center my-5">
          Browse Our Products
        </h1>
        <p className="text-[#737373] capitalize text-center">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            services.map(service=><ServiceCard key={service._id}  service={service}/>)
        }
      </div>
    </div>
  );
};

export default Services;
