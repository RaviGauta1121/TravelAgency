import axios from 'axios';

const API_URL = 'http://localhost:5000/api/destinations';

export const fetchDestinations = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createDestination = async (data) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};



//  http://localhost:5000/api/features 

//  http://localhost:5000/api/testimonials 