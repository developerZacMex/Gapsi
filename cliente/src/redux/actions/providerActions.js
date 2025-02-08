import axios from 'axios';

export const getProviders = (page, limit) => async dispatch => {
  const response = await axios.get(`http://localhost:3001/api/providers?page=${page}&limit=${limit}`);
  dispatch({ type: 'GET_PROVIDERS', payload: response.data });
};

export const addProvider = provider => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3001/api/providers', provider);
    dispatch({ type: 'ADD_PROVIDER', payload: response.data });
  } catch (error) {
    console.error("Error adding provider:", error.response.data);
  }
};

export const deleteProvider = name => async dispatch => {
  try {
    await axios.delete(`http://localhost:3001/api/providers/${name}`);
    dispatch({ type: 'DELETE_PROVIDER', payload: name });
  } catch (error) {
    console.error("Error deleting provider:", error.response.data);
  }
};