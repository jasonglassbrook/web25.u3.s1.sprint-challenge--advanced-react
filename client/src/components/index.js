/*******************************************************************************
  components
--------------------------------------------------------------------------------
  All of the project's React components.
*******************************************************************************/

/*//////////////////////////////////////
  exports : qualified short-names
//////////////////////////////////////*/
import basics from './basics';
import Player from './Player';

export default {
  basics,
  Player,
};

/*//////////////////////////////////////
  exports : unqualified full-names
//////////////////////////////////////*/
export { default as basics } from './basics';
export { default as Player } from './Player';
