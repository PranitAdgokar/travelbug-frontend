import React, { useEffect, useState } from "react";
import { fetchTrips } from "../services/tripService";

const TripList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const loadTrips = async () => {
      const data = await fetchTrips();
      setTrips(data);
    };
    loadTrips();
  }, []);

  return (
    <div>
      <h2>Trips List</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip._id}>
            <p>Student Name: {trip.studentName}</p>
            <p>College ID: {trip.collegeId}</p>
            <p>Destination: {trip.destination}</p>
            <p>Start Date: {trip.startDate}</p>
            <p>End Date: {trip.endDate}</p>
            <p>Notes: {trip.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripList;
