import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";

const StaffDetails = () => {
  const { id } = useParams();

  const staffs = [
    {
      id: 1,
      name: "John Doe",
      bio: "Experienced technician specializing in home appliance repairs and maintenance.",
      location: "New York, USA",
      rate: 4.8,
      details:
        "John has over 10 years of experience in repairing home appliances, including ACs, refrigerators, and washing machines.",
      image: "https://i.ibb.co.com/fdFVMtws/10496279.jpg",
      services: [
        "AC Repair Services",
        "Home Appliance Repair",
        "Electrician Services",
        "Plumbing Services",
      ],
    },
    {
      id: 2,
      name: "Emily Smith",
      bio: "Professional beauty and wellness expert with a passion for self-care and relaxation.",
      location: "Los Angeles, USA",
      rate: 4.9,
      details:
        "Emily has been in the beauty and wellness industry for 8 years, offering top-notch spa and personal care services.",
      image: "https://i.ibb.co.com/XZN6nH4W/11475221.jpg",
      services: [
        "Beauty & Wellness",
        "Fitness & Personal Training",
        "Cleaning Solution",
        "Home Painting Services",
      ],
    },
  ];

  const staff = staffs.find((staff) => staff.id === parseInt(id));

  const [toggle, settoggle] = useState(false);

  const [tab, settab] = useState("About");

  const handleTabChange = (tabname) => {
    if (tab !== tabname) {
      // settoggle(!toggle) or
      settoggle((curr) => !curr);
      settab(tabname);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-2">
        <div className="md:flex items-center mt-5 h-44">
          <div>
            <img
              src={staff.image}
              alt={staff.name}
              className="w-24 rounded-full shadow"
            />
          </div>

          <div className="md:pl-5 md:m-0 mt-10">
            <h2 className="text-xl font-bold">{staff.name}</h2>
            <h3 className="text-sm text-gray-600">{staff.bio}</h3>
            <h4 className="text-sm text-gray-800">${staff.rate}</h4>
          </div>
        </div>

        <div className="mt-5 pt-5 md:pt-0">
          <button
            onClick={() => handleTabChange("About")}
            className={`text-lg font-bold tracking-wide border-b-2 p-2 cursor-pointer ${
              toggle ? "text-sky-950" : "text-sky-800"
            } ${toggle ? "hover:border-sky-800" : "border-sky-800"}`}
          >
            About
          </button>
          <button
            onClick={() => handleTabChange("Review")}
            className={`text-lg font-bold tracking-wide border-b-2 p-2 ms-5 cursor-pointer ${
              toggle ? "text-sky-800" : "text-sky-950"
            } ${toggle ? "border-sky-800" : "hover:border-sky-800"}`}
          >
            Ratings and Reviews
          </button>
        </div>
      </div>
    </>
  );
};

export default StaffDetails;
