/// external modules ///
import React from 'react';

/// components ///
import PlayerCard from 'components/PlayerCard';

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
