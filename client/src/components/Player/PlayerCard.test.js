/// components ///
import PlayerCard from './PlayerCard';

/// testers ///
import renders from 'testers/renders';

/***************************************
  TESTING
***************************************/
const what = {
  name : 'PlayerCard',
  Component : PlayerCard,
  props : {
    'player' : {
      'id' : 1,
      'name' : 'Player[1] Name',
      'country' : 'Player[1] Country',
      'searches' : 0,
    },
  },
};

renders (what.name, what.Component, what.props);
