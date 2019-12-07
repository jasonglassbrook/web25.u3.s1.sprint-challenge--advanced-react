/// external modules ///
import React from 'react';

/// components ///
import Card from 'components/basics/cards/Card';
import CardHead from 'components/basics/cards/CardHead';
import CardBody from 'components/basics/cards/CardBody';

/***************************************
  COMPONENT
***************************************/
const PlayerCard = ({ player, ...props }) => (
  <Card className='PlayerCard'>
    <CardHead>
      <h3>{player.name}</h3>
    </CardHead>
    <CardBody>
      <p>from: {player.country}</p>
      <p>searches: {player.searches}</p>
    </CardBody>
  </Card>
);

/**************************************/
export default PlayerCard;
