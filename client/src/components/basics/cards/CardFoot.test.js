/// components ///
import CardFoot from './CardFoot';

/// testers ///
import renders from 'testers/renders';

/***************************************
  TESTING
***************************************/
const what = {
  name : 'CardFoot',
  Component : CardFoot,
};

renders (what.name, what.Component);
