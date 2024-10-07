'use client'
import React from "react";
import background from "../../../public/background.jpg";
import { useRouter } from "next/navigation";
import { services } from "./ServiceData";

function ServiceSection() {
  const router = useRouter()
 
  const handleCheck = (id: number) => {
    router.push(`/serviceDetail/${id}`);
    console.log(id,'id-------->id')
  };

  return (
    <div id="ServiceSection" className="p-8 lg:px-42">
      <h1 className="text-center  font-semibold text-2xl font-serif">
        My Services & Projects
      </h1>
      <div className="flex flex-col justify-around p-6 gap-3 md:flex-row md:gap-5 md:justify-around">
        {services.map((service,) => (
          <div
          key={service.id}
            className="w-full md:w-96 border-t-2 border-sky-600 rounded shadow-2xl flex flex-col"
          >
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h2 className="text-2xl font-semibold text-center font-serif">
                {service.title}
              </h2>
              <p className="description-text flex-grow-1 p-5 line-clamp-3 font-serif">
                {service.Description}
              </p>
            </div>
            <div className="flex justify-center p-5">
              <button className=" w-2/4 px-3 py-2 bg-sky-600 rounded-full shadow-lg animate-pulse font-serif"
               onClick={() => handleCheck(service.id)}
              >
                check
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceSection;
