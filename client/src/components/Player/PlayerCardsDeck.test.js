/// components ///
import PlayerCardsDeck from './PlayerCardsDeck';

/// testers ///
import renders from 'testers/renders';

/***************************************
  TESTING
***************************************/
const what = {
  name : 'PlayerCardsDeck',
  Component : PlayerCardsDeck,
  props : {
    'players' : [
      {
        'id' : 1,
        'name' : 'Player[1] Name',
        'country' : 'Player[1] Country',
        'searches' : 0,
      },{
        'id' : 2,
        'name' : 'Player[2] Name',
        'country' : 'Player[2] Country',
        'searches' : 0,
      },{
        'id' : 3,
        'name' : 'Player[3] Name',
        'country' : 'Player[3] Country',
        'searches' : 0,
      }
    ],
  },
};

renders (what.name, what.Component, what.props);
