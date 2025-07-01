import React, { useState } from "react";
import "./services.css";

const servicesData = [
  { id: 1, category: "Cleaning", name: "Home Cleaning", price: "KSh 1,500", icon: "🧹" },
  { id: 2, category: "Plumbing", name: "Leaky Tap Repair", price: "KSh 800", icon: "🔧" },
  { id: 3, category: "Beauty", name: "In-Home Hair Styling", price: "KSh 2,000", icon: "💇🏽‍♀️" },
  { id: 4, category: "Cleaning", name: "Sofa Deep Cleaning", price: "KSh 3,000", icon: "🛋️" },
];

const categories = ["All", "Cleaning", "Plumbing", "Beauty"];

export default function Services() {
  const [selected, setSelected] = useState("All");

  const filteredServices = selected === "All"
    ? servicesData
    : servicesData.filter(service => service.category === selected);

  return (
    <div className="services-page">
      <h1 className="title">Book a Service</h1>

      <div className="filters">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={selected === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="service-grid">
        {filteredServices.map(service => (
          <div key={service.id} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.name}</h3>
            <p className="price">{service.price}</p>
            <button className="book-btn">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
