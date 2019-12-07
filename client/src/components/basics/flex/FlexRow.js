/// external modules ///
import styled from 'styled-components';

/***************************************
  COMPONENT
***************************************/
const FlexRow = (X = 'div') => styled (X) `
  display: flex;
  flex-flow: row nowrap;
  align-content: stretch;
  justify-content: space-around;
  align-items: center;
`;

/**************************************/
export default FlexRow;
export { FlexRow };
