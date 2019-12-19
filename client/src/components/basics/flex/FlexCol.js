/// external modules ///
import styled from 'styled-components';

/***************************************
  COMPONENT
***************************************/
const FlexCol = (X = 'div') => styled (X) `
  display: flex;
  flex-flow: column nowrap;
  align-content: stretch;
  justify-content: space-around;
  align-items: center;
`;

/**************************************/

export default FlexCol;
export { FlexCol };
