/// components ///
import Card from './Card';

/// testers ///
import renders from 'testers/renders';

/***************************************
  TESTING
***************************************/
const what = {
  name : 'Card',
  Component : Card,
};

renders (what.name, what.Component);
