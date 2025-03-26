import React from "react";
import homebanner from "../../assets/home-banner.webp";
const HomeSection = () => {
  return (
    <>
      <div
        className="flex content-normal items-center bg-cover bg-center h-[500px] w-full bg-no-repeat"
        style={{ backgroundImage: `url(${homebanner})` }}
      >

        <div className="w-full">
          <div className="space-y-4">
            <h1 className="text-white text-center text-6xl font-semibold ">Your Personal Assistant</h1>
            <h2 className="text-white text-center text-2xl font-bold ">One stop solution for all your needs</h2>
          </div>

          <div className="mx-auto my-4 w-full lg:w-1/2">
            <input type="search" name="" id="" className="p-3 rounded w-full  focus:outline-none  bg-white" placeholder="Find your services here e.g. Cleaning, Laundry, Car Repair"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
