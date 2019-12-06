const flag = (method, message) => {
  console[method] (`>>> ${message} <<<`);
}

/**************************************/

export default flag;
export {
  flag,
};
