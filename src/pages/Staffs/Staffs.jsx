import React from "react";
import Navbar from "../../components/Navbar";
import StaffCard from "../../components/Staffs/StaffCard";

const Staffs = () => {
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

  return (
    <div>
      <Navbar />

      <div className="container mx-auto p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {staffs.map((staff) => (
            <StaffCard key={staff.id} staff={staff} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staffs;
