/// components ///
import CardHead from './CardHead';

/// testers ///
import renders from 'testers/renders';

/***************************************
  TESTING
***************************************/
const what = {
  name : 'CardHead',
  Component : CardHead,
};

renders (what.name, what.Component);
