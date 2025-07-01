import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>Your Home. Our Mission.</h1>
          <p>Servana delivers trusted home & lifestyle services across Nairobi—designed for your peace of mind.</p>
          <a href="/services" className="hero-btn">Explore Services</a>
        </div>
      </section>

      <section className="overview">
        <h2>Trusted. Local. Professional.</h2>
        <p>From cleaning to beauty to plumbing, book certified experts in just a few taps.</p>
      </section>
    </div>
  );
}
