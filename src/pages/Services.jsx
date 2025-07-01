import React, { useState, useEffect } from "react";
import { fetchServices } from "../services/api";
import "./services.css";

const categories = ["All", "Cleaning", "Plumbing", "Beauty"];

export default function Services() {
  const [selected, setSelected] = useState("All");
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    fetchServices().then(setAllServices);
  }, []);

  const filtered = selected === "All"
    ? allServices
    : allServices.filter(service => service.category === selected);

  return (
    <div className="services-page">
      <h1 className="title">Book a Service</h1>
      <div className="filters">
        {categories.map(cat => (
          <button key={cat} onClick={() => setSelected(cat)} className={selected === cat ? "active" : ""}>
            {cat}
          </button>
        ))}
      </div>

      <div className="service-grid">
        {filtered.map(service => (
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
