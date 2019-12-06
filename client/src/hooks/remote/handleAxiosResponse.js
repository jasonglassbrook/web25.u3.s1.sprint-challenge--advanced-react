/// internal modules ///
import _flag from 'tools/flag';
import parseResponse from './parseAxiosResponse';

/**************************************/

const flag = (method, message) => {
  _flag (method, `handleAxiosResponse : ${message}`);
};

/**************************************/

const handleAxiosResponse = (response, setData, fallbackData) => {
  let data = fallbackData;
  try {
    data = parseResponse (response);
  }
  catch (error) {
    flag ('error', 'handleResponse : An error occured.');
    console.error (error);
  }
  setData (data);
};

/**************************************/

export default handleAxiosResponse;
export {
  handleAxiosResponse,
};
