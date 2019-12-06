/// internal modules ///
import _flag from 'tools/flag';
import parseError from './parseAxiosError';

/**************************************/

const flag = (method, message) => {
  _flag (method, `handleAxiosError : ${message}`);
};

/**************************************/

const handleAxiosError = (error, setData, fallbackData) => {
  let data = fallbackData;
  try {
    const message = parseError(error);
    flag ('error', 'Here\'s what happened.' );
    console.log (message);
  }
  catch (error) {
    flag ('error', 'An error occured.');
    console.error (error);
  }
  setData (data);
};

/**************************************/

export default handleAxiosError;
export {
  handleAxiosError,
};
