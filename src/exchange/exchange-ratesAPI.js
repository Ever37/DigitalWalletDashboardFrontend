/* eslint-disable no-useless-catch */
import axios from 'axios';

const exchangeAPI = {
  getExchangeRates: async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/exchange/rates`);
      return response.data;
    } catch (error) {
      console.error('getExchangeRates error :', error);
      throw error;
    }
  },

  updateExchangeRate: async (currency, rate) => {
    try {
      const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/exchange/update-rate/${currency}/${rate}`);
      return response.data;
    } catch (error) {
      console.error('updateExchangeRate error :', error);
      throw error;
    }
  },
};

export default exchangeAPI;
