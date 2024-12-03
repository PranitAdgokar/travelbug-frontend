import axios from "axios";

const API_URL = "http://localhost:4000/api/trips";

// Function to submit a new trip
export const submitTrip = async (tripData) => {
  try {
    const response = await axios.post(API_URL, tripData);
    return response.data;
  } catch (error) {
    console.error("Error submitting trip", error);
  }
};

// Function to get all trips
export const fetchTrips = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching trips", error);
  }
};
