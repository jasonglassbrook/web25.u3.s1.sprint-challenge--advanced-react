/*******************************************************************************
  components
--------------------------------------------------------------------------------
  All of the project's React components.
*******************************************************************************/

/*//////////////////////////////////////
  imports
//////////////////////////////////////*/
import basics from './basics';
import Player from './Player';

/*//////////////////////////////////////
  exports
//////////////////////////////////////*/
/// qualified names ///
export default {
  basics,
  Player,
};

/// full names ///
export { default as basics } from './basics';
export { default as Player } from './Player';
