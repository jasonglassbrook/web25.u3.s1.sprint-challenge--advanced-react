/// components ///
import CardsDeck from './CardsDeck';

/// testers ///
import renders from 'testers/renders';

/***************************************
  TESTING
***************************************/
const what = {
  name : 'CardsDeck',
  Component : CardsDeck,
};

renders (what.name, what.Component);
