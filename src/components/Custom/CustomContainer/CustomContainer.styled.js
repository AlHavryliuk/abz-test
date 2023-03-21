import styled from 'styled-components';
import { mobile, tablet, tv } from 'utils/mixins/adaptMixin';

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 934px;
  padding: 0 15px;
  margin: 0 auto;

  ${mobile`
    max-width: 360px;
    padding: 0 16px;
  `}

  ${tablet`
    max-width: 768px;
    padding: 0 32px;
  `}

  ${tv`
    max-width: 1198px;
    padding: 0 15px;
  `}
`;
