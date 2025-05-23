import React from "react";
import Navbar from "../../components/Navbar";
import ServiceCard from "../../components/Services/ServiceCard";

const Services = () => {
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

  const categories = [
    {
      id: 1,
      name: "Home Services",
    },
    {
      id: 2,
      name: "Home Services",
    },
    {
      id: 3,
      name: "Personal Care",
    },
    {
      id: 4,
      name: "Home Services",
    },
    {
      id: 5,
      name: "Home Services",
    },
    {
      id: 6,
      name: "Automotive",
    },
    {
      id: 7,
      name: "Home Improvement",
    },
    {
      id: 8,
      name: "Home Services",
    },
    {
      id: 9,
      name: "Health & Wellness",
    },
    {
      id: 10,
      name: "Home Services",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-2">
        <h1 className="text-3xl mt-5 font-bold">All Services</h1>

        {categories.map((category) => (
          <div key={category.id} className="my-20">
            <div className="w-full">
              <h2 className="my-5 text-2xl font-bold">{category.name}</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {services
                  .filter((service) => service.category === category.name)
                  .map((service) => (
                    <ServiceCard key={service.id} service={service}/>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
