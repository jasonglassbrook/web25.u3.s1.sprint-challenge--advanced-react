/***************************************
  parseAxiosError
----------------------------------------
  Exhaustively deals with axios's errors.
***************************************/

import { is } from 'tools/iffy';
import _flag from 'tools/flag';

/**************************************/

const flag = (method, message) => {
  _flag (method, `parseAxiosError : ${message}`);
};

/**************************************/

const parseAxiosError = (axiosError) => {
  let message = {};

  if (is (axiosError)) {
    if (is (axiosError.response)) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      flag ('error', 'The server responded with an error.');
      console.log ('- data:', axiosError.response.data);
      console.log ('- status:', axiosError.response.status);
      console.log ('- headers:', axiosError.response.headers);

      message = axiosError.response.data;
    }
    else if (is (axiosError.request)) {
      // The request was made but no response was received
      // `axiosError.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      flag ('error', 'The server did not respond.');
      console.log ('- request:', axiosError.request);

      message['errors'] = [
        'The server did not respond.',
      ];
    }
    else {
      // Something happened in setting up the request that triggered an Error
      flag ('error', 'A runtime error occured.');
      console.log ('- Error:', axiosError.message);

      message['errors'] = {
        'oops' : axiosError.message,
      };
    }
    console.log ('- config:', axiosError.config);
  }
  else {
    // There was no error to parse.
    flag ('warn', 'There was no error to parse.');
  }

  return (message);
}

/**************************************/

export default parseAxiosError;
export {
  parseAxiosError,
};
