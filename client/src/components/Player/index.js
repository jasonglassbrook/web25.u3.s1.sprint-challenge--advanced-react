/*******************************************************************************
  components/Player
--------------------------------------------------------------------------------
  Player-related React components
*******************************************************************************/

/*//////////////////////////////////////
  imports
//////////////////////////////////////*/
import Card from './PlayerCard';
import CardsDeck from './PlayerCardsDeck';

/*//////////////////////////////////////
  exports
//////////////////////////////////////*/
/// qualified names ///
export default {
  Card,
  CardsDeck,
};

/// full names ///
export { default as PlayerCard } from './PlayerCard';
export { default as PlayerCardsDeck } from './PlayerCardsDeck';
