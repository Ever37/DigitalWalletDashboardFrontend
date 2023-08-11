/* eslint-disable no-useless-catch */
import axios from 'axios';

const walletsAPI = {
  addWallet: async (walletDto) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/wallet`, walletDto);
      return response.data;
    } catch (error) {
      console.error('addWallet error :', error);
      throw error;
    }
  },

  getAllWallets: async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/wallet`);
      return response.data;
    } catch (error) {
      console.error('getAllWallets error :', error);
      throw error;
    }
  },

  getAllWalletsOrderByFavorites: async (order) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/wallet/sort-favorites?order=${order}`);
      return response.data;
    } catch (error) {
      console.error('getAllWalletsOrderByFavorites error :', error);
      throw error;
    }
  },

  setFavorite: async (favoriteDto) => {
    try {
      const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/wallet/favorites`, favoriteDto);
      return response.data;
    } catch (error) {
      console.error('setFavorite error :', error);
      throw error;
    }
  },

  getFavorites: async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/wallet/favorites`);
      return response.data;
    } catch (error) {
      console.error('getFavorites error :', error);
      throw error;
    }
  },

  getWalletBalance: async (walletAddress, currency) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/wallet/${walletAddress}/balance/${currency}`);
      return response.data;
    } catch (error) {
      console.error('getWalletBalance error :', error);
      throw error;
    }
  },
};

export default walletsAPI;
