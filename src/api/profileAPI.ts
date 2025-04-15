import axios from 'axios';
const API_BASE_URL = 'http://172.24.17.44:8080';

export const submitProfile = async (profileData: {
  nickname: string;
  location: string;
  userType: 'owner' | 'customer';
  selectedCakes: number[];
}) => {
  const response = await axios.post(`${API_BASE_URL}/api/users`, profileData);
  return response.data;
};