import axios from "axios";


  export const generateRandom = async () => {
    try {
      const newNumbers = await axios.post('/api/v1/random')
      return newNumbers
    } catch (error) {
      return error
    }
  };
  export const getNumbers = async () => {
    try {
      const numbers = await axios.get('/api/v1/numbers')
      return numbers
    } catch (error) {
      return error;
    }
  };