import React from "react";
import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const StaffCard = ({ staff }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-50 border hover:border-sky-800 rounded-md shadow-md p-5">
        <div className="md:flex items-center">
          <div>
            <img
              src={staff.image}
              alt={staff.name}
              className="w-24 rounded-full mx-auto"
            />
          </div>

          <div className="md:pl-5 mt-5 md:m-0">
            <h2 className="text-xl font-bold">{staff.name}</h2>
            <h3 className="text-sm font-bold">{staff.bio}</h3>
            <h3 className="text-xs text-gray-600">{staff.location}</h3>
            <h4 className="text-sm text-gray-800">${staff.rate}</h4>
          </div>
        </div>

        <p className="line-clamp-2 mt-5 text-justify text-sm text-gray-600">
          {staff.details}
        </p>

        <div className="flex flex-wrap gap-2 my-2 text-xs items-center h-32 lg:h-20 text-gray-600">
          {staff.services.length > 3 ? (
            <>
              {staff.services.slice(0, 3).map((service) => (
                <p className="border rounded-full mr-2 p-2 border-gray-700">
                  {service}
                </p>
              ))}

              <p className="pl-2 ">and {staff.services.length - 3} more...</p>
            </>
          ) : (
            staff.services.map((service) => (
              <p className="border rounded-full mr-2 p-2 border-gray-700">
                {service}
              </p>
            ))
          )}
        </div>

        <button
          onClick={() => {
            navigate(`/staff-details/${staff.id}`);
          }}
          className="bg-sky-800 hover:bg-sky-900 text-white rounded-full text-sm  mt-2 flex items-center py-2 px-5 gap-1"
        >
          See Profile <HiMiniArrowRightEndOnRectangle />
        </button>
      </div>
    </>
  );
};

export default StaffCard;
