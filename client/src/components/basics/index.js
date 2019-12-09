/*******************************************************************************
  components/basics
--------------------------------------------------------------------------------
  Basic React components.
*******************************************************************************/

/*//////////////////////////////////////
  exports : qualified short-names
//////////////////////////////////////*/
import cards from './cards';
import flex from './flex';

export default {
  cards,
  flex,
};

/*//////////////////////////////////////
  exports : unqualified full-names
//////////////////////////////////////*/
export { default as cards } from './cards';
export { default as flex } from './flex';
