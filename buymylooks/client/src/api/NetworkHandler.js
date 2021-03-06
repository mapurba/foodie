import axios from 'axios';
import Cookies from 'universal-cookie';


const cookies = new Cookies();

const api = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
  }
});

export default {
  sendRequest: (method, baseQuery, requestData, accessToken, additionalHeaders) => {
    const HEADER_CONFIG = {
      headers: {}
    };

    if (additionalHeaders) {
     // HEADER_CONFIG.headers = additionalHeaders;
    }
    if (accessToken) {
    //  HEADER_CONFIG.headers['authorization'] = 'bearer '+cookies.get('acccessToken');
    }

    return processRequest(method, baseQuery, requestData, HEADER_CONFIG)
      .then((response) => {
        return response;
      })
      .catch((err) => {

        throw err;
      });
  }
};


function processRequest(method, endPoint, requestData, headerConfig) {
  if (method === "GET") {
    return api.get(endPoint);
  } else if (method === "POST") {
    return api.post(endPoint, requestData, headerConfig);
  } else if (method === "DELETE") {
    return api.delete(endPoint, headerConfig);
  } else {
    throw new Error('Invalid method passed');
  }
}