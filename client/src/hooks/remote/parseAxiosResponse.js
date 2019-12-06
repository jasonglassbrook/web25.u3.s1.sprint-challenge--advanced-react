/***************************************
  parseAxiosResponse
----------------------------------------
  Deal with axios response data.
***************************************/

import { is } from 'tools/iffy';
import _flag from 'tools/flag';

/**************************************/

const flag = (method, message) => {
  _flag (method, `parseAxiosResponse : ${message}`);
};

/**************************************/

const parseAxiosResponse = (axiosResponse) => {
  let message = {};

  if (is (axiosResponse)) {
    flag ('log', 'The server responded.');
    console.log ('- data:', axiosResponse.data);
    console.log ('- status:', axiosResponse.status);
    console.log ('- headers:', axiosResponse.headers);
    console.log ('- config:', axiosResponse.config);

    message = axiosResponse.response.data;
  }
  else {
    // There was no error to parse.
    flag ('warn', 'There was no response to parse.');
  }

  return (message);
};

/**************************************/

export default parseAxiosResponse;
export {
  parseAxiosResponse,
};
