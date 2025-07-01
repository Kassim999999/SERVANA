import React, { useEffect, useState } from "react";
import { getAllBookings } from "../services/api";

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getAllBookings().then(setBookings).catch(err => {
      alert("Access denied or not logged in");
    });
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map(b => (
          <div key={b.id} className="booking-card">
            <h3>{b.service}</h3>
            <p><strong>User:</strong> {b.name}</p>
            <p><strong>Date:</strong> {b.date}</p>
            <p><strong>Phone:</strong> {b.phone}</p>
            <p><strong>Notes:</strong> {b.notes}</p>
          </div>
        ))
      )}
    </div>
  );
}
