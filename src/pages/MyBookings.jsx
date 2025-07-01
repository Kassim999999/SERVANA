import React, { useEffect, useState } from "react";
import { getMyBookings } from "../services/api";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getMyBookings().then(setBookings);
  }, []);

  return (
    <div className="my-bookings-page">
      <h1>My Bookings</h1>
      {bookings.length === 0 ? (
        <p>You haven’t booked any services yet.</p>
      ) : (
        bookings.map((b) => (
          <div key={b.id} className="booking-card">
            <h3>{b.service}</h3>
            <p><strong>Date:</strong> {b.date}</p>
            <p><strong>Phone:</strong> {b.phone}</p>
            <p><strong>Notes:</strong> {b.notes}</p>
          </div>
        ))
      )}
    </div>
  );
}
