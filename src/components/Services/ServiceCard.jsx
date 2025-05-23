import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <>
      <Link to={`/service-details/${service.id}`} className="">
        <img
          src={service.image}
          alt={service.category}
          className="w-60 rounded shadow mx-auto"
        />

        <h3 className="text-center w-3/4 mx-auto font-bold text-base mt-3">
          {service.name}
        </h3>
      </Link>
    </>
  );
};

export default ServiceCard;
