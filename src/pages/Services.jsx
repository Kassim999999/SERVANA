import React, { useState, useEffect } from "react";
import { fetchServices, createBooking } from "../services/api";
import "./services.css";

const categories = ["All", "Cleaning", "Plumbing", "Beauty"];

export default function Services() {
  const [selected, setSelected] = useState("All");
  const [allServices, setAllServices] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", date: "", notes: "" });

  useEffect(() => {
    fetchServices().then(setAllServices);
  }, []);

  const filtered = selected === "All" ? allServices : allServices.filter(s => s.category === selected);

  const openBookingForm = (service) => {
    setSelectedService(service);
    setShowForm(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitBooking = async () => {
    await createBooking({
      service_id: selectedService.id,
      ...form,
    });
    alert("✅ Booking submitted!");
    setShowForm(false);
    setForm({ name: "", phone: "", date: "", notes: "" });
  };

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
            <button className="book-btn" onClick={() => openBookingForm(service)}>
              Book Now
            </button>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="booking-overlay">
          <div className="booking-form">
            <h2>Book {selectedService.name}</h2>
            <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
            <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
            <input name="date" placeholder="Preferred Date/Time" value={form.date} onChange={handleChange} />
            <textarea name="notes" placeholder="Notes (optional)" value={form.notes} onChange={handleChange}></textarea>
            <button onClick={submitBooking}>Submit Booking</button>
            <button onClick={() => setShowForm(false)} className="cancel-btn">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
