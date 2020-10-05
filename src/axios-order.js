import axios from 'axios';

const insctance = axios.create({
      baseURL: 'https://exmoto.herokuapp.com/api/v1'
});

export default insctance;