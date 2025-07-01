import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Effortless Home Services, Right at Your Fingertips</h1>
          <p>Book trusted local professionals for cleaning, plumbing, beauty, and more.</p>
          <a href="/services" className="hero-btn">Explore Services</a>
        </div>
      </section>

      {/* Placeholder for more sections */}
      <section className="coming-soon">
        <h2>Service Categories • How It Works • Reviews & More Coming Soon</h2>
      </section>
    </div>
  );
}
