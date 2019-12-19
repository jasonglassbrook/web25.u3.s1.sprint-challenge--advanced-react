/// components ///
import CardBody from './CardBody';

/// testers ///
import renders from 'testers/renders';

/***************************************
  TESTING
***************************************/
const what = {
  name : 'CardBody',
  Component : CardBody,
};

renders (what.name, what.Component);
