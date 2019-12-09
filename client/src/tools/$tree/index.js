/*******************************************************************************
  $tree
*******************************************************************************/

/// branch ///
export const branch = ($name, $pack) => {
  const $pathname = ($pack) ? ($pack.$fullname + '/') : ('');
  const $fullname = $pathname + $name;

  return ({ $name, $pathname, $fullname });
};

/// root ///
export const root = ($name) => (branch ($name));

/**************************************/

export default {
  branch,
  root,
};
