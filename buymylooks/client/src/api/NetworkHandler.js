import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8081/",
  headers: {
  }
});

export default {
  sendRequest: (method, baseQuery, requestData, accessToken, additionalHeaders) => {
    const HEADER_CONFIG = {
      headers: {}
    };

    if (additionalHeaders) {
      HEADER_CONFIG.headers = additionalHeaders;
    }
    if (accessToken) {
      HEADER_CONFIG.headers['authorization'] = 'bearer '+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YjNjZWZkYmQ4ZGExNzI2NjBjNzRhY2MiLCJpYXQiOjE1MzA3ODMxOTksImV4cCI6MTUzMDc4MzQ5OX0.N1OILwC-9zGviKsNYhSUuId1HdQaok7JmymZkfSkjTc';
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
    return api.get(endPoint, headerConfig);
  } else if (method === "POST") {
    return api.post(endPoint, requestData, headerConfig);
  } else if (method === "DELETE") {
    return api.delete(endPoint, headerConfig);
  } else {
    throw new Error('Invalid method passed');
  }
}