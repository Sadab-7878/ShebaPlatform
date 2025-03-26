import React from "react";
import { LuBookOpen } from "react-icons/lu";
import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";
const StaffMiniCard = ({ staff }) => {
  return (
    <div className="bg-gray-50 border hover:border-sky-800 rounded-md p-2 shadow-md">
      <div className="items-center">
        <img
          src={staff.image}
          alt={staff.name}
          className="w-16 mx-auto rounded-full"
        />

        <div className="mt-3">
          <h2 className="text-center font-bold">{staff.name}</h2>
          <h2 className="text-center font-bold text-xs py-1 line-clamp-1">
            {staff.bio}
          </h2>
          <h3 className="text-center font-bold text-sm text-gray-800">
            $ {Number(staff.rate).toLocaleString()}
          </h3>
        </div>

        <div className="flex justify-between items-center mt-3">
              <button className="bg-green-800 hover:bg-green-900 text-white rounded-full text-xs flex items-center my-2 mx-auto py-2 px-3 gap-1">Book Now <LuBookOpen /></button>
              <button className="bg-sky-800 hover:bg-sky-900 text-white rounded-full text-xs flex items-center my-2 mx-auto py-2 px-3 gap-1">View Full Profile <HiMiniArrowRightEndOnRectangle /></button>
        </div>
      </div>
    </div>
  );
};

export default StaffMiniCard;
