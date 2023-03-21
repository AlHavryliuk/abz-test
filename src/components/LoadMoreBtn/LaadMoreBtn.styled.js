import styled from 'styled-components';

export const CustomLoadMore = styled.button`
  border: none;
  border-radius: 80px;
  font-size: 16px;
  padding: 4px 18px;
  margin: 0 auto;
  line-height: calc(26 / 16);
  background-color: rgba(244, 224, 65, 1);
  transition: all 0.3s;

  &:hover {
    background-color: darkred;
    color: white;
  }
`;
