import axios from 'axios';
const API_BASE_URL = 'http://192.168.0.237:8080';

export const submitProfile = async (profileData: {
  nickname: string;
  location: string;
  userType: 'owner' | 'customer';
  selectedCakes: number[];
}) => {
  const response = await axios.post(`${API_BASE_URL}/profile/setup`, profileData);
  return response.data;
};