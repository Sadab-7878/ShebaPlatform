import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import StaffMiniCard from "../../components/Staffs/StaffMiniCard";

const ServiceDetails = () => {
  const { id } = useParams();
  const services = [
    {
      id: 1,
      name: "AC Repair Services",
      category: "Home Services",
      details:
        "Professional AC repair and maintenance services to keep your cooling system running efficiently.",
      image: "https://i.ibb.co.com/k2T2w6Pm/img1s.jpg",
    },
    {
      id: 2,
      name: "Cleaning Solution",
      category: "Home Services",
      details:
        "Comprehensive cleaning services for homes, offices, and commercial spaces.",
      image: "https://i.ibb.co.com/Cp38m6n2/img2s.jpg",
    },
    {
      id: 3,
      name: "Beauty & Wellness",
      category: "Personal Care",
      details:
        "Spa, salon, and wellness treatments to help you look and feel your best.",
      image: "https://i.ibb.co.com/DfM5MznP/img3s.jpg",
    },
    {
      id: 4,
      name: "Plumbing Services",
      category: "Home Services",
      details:
        "Expert plumbing solutions for leaks, installations, and repairs.",
      image: "https://i.ibb.co.com/JL0nMwb/img4s.jpg",
    },
    {
      id: 5,
      name: "Electrician Services",
      category: "Home Services",
      details:
        "Certified electricians for home and office electrical repairs and installations.",
      image: "https://i.ibb.co.com/4wTnkVVq/img5s.jpg",
    },
    {
      id: 6,
      name: "Car Repair Services",
      category: "Automotive",
      details:
        "Auto repair and maintenance services for all types of vehicles.",
      image: "https://i.ibb.co.com/XqtfqSR/img6s.jpg",
    },
    {
      id: 7,
      name: "Home Painting Services",
      category: "Home Improvement",
      details:
        "Professional interior and exterior painting services for homes and offices.",
      image: "https://i.ibb.co.com/RGzXdy5G/img7s.jpg",
    },
    {
      id: 8,
      name: "Pest Control Services",
      category: "Home Services",
      details:
        "Safe and effective pest control solutions for residential and commercial properties.",
      image: "https://i.ibb.co.com/SXr6Lnfz/img8s.jpg",
    },
    {
      id: 9,
      name: "Fitness & Personal Training",
      category: "Health & Wellness",
      details:
        "Personalized fitness training and coaching services to help you stay fit and healthy.",
      image: "https://i.ibb.co.com/hFx7DwJN/img9s.jpg",
    },
    {
      id: 10,
      name: "Home Appliance Repair",
      category: "Home Services",
      details:
        "Repair services for refrigerators, washing machines, and other home appliances.",
      image: "https://i.ibb.co.com/tpFQz4Gh/img10s.jpg",
    },
  ];

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

  const service = services.find((service) => service.id === parseInt(id));

  return (
    <>
      <Navbar />

      <div className="container mx-auto p-2">
        <h1 className="text-xl lg:text-3xl my-5 lg:my-10 font-bold">
          {service.name}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* 1 */}
          <div className="w-full p-5 order-last lg:order-first">
            <img
              src={service.image}
              alt={service.name}
              className="max-w-full mx-auto rounded-xl shadow"
            />

            <h2 className="font-bold text-xl mt-10 py-2">{service.name}</h2>
            <p className="text-justify">{service.details}</p>
          </div>

          {/* 1 */}

          {/* 2 */}
          <div>
            <h2 className="font-bold">Service Providers</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
              {staffs
                .filter((staff) => staff.services.includes(service.name))
                .map((staff) => (
                  <StaffMiniCard key={staff.id} staff={staff} />
                ))}
            </div>
          </div>
          {/* 2 */}
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
