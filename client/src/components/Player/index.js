/*******************************************************************************
  components/Player
--------------------------------------------------------------------------------
  Player-related React components
*******************************************************************************/

/*//////////////////////////////////////
  exports : qualified short-names
//////////////////////////////////////*/
import Card from './PlayerCard';
import CardsDeck from './PlayerCardsDeck';

export default {
  Card,
  CardsDeck,
};

/*//////////////////////////////////////
  exports : unqualified full-names
//////////////////////////////////////*/
export { default as PlayerCard } from './PlayerCard';
export { default as PlayerCardsDeck } from './PlayerCardsDeck';
