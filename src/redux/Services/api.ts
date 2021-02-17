import api from "../api";

const getUserData = async () => {
  try {
    const res = await api.get("https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true");
    return res.data;
  } catch (error) {
    console.error("Error: ",error);
  }
};

export default {
  getUserData
};
