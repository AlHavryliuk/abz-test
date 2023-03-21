import styled from 'styled-components';
import { mobile, tablet } from 'utils/mixins/adaptMixin';

export const HeaderStyled = styled.header`
  max-width: 1024px;
  margin: 0 auto;
  padding: 13px 15px;
  background-color: #fff;

  & > div {
    display: flex;
    justify-content: space-between;
  }

  ${mobile`
    padding: 13px 0;
  `}

  ${tablet`
   padding: 13px 0;
  `}
`;
