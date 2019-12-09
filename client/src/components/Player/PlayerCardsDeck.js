/// external modules ///
import React from 'react';

/// components ///
import CardsDeck from 'components/basics/cards/CardsDeck';
import PlayerCard from './PlayerCard';

/// styles ///
import './PlayerCardsDeck.css';

/***************************************
  COMPONENT
***************************************/
const PlayerCardsDeck = ({ players, ...props }) => {
  const keys = players.map ((player) => (player.id));

  return (
    <CardsDeck
    className='PlayerCardsDeck'
    keys={keys}
    row wrap
    >
      {players.map ((player, i) => (
        <PlayerCard key={keys[i]} player={player}/>
      ))}
    </CardsDeck>
  );
};

/**************************************/

export default PlayerCardsDeck;
export { PlayerCardsDeck };
