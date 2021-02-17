import api from "../api";

const getUserData = async (searchText: string) => {
  try {
    const res = await api.get(`https://api.tfl.gov.uk/BikePoint/Search?query=${searchText}`);
    return res.data;
  } catch (error) {
    console.error("Error: ",error);
  }
};

export default {
  getUserData
};
