import styled from 'styled-components';

export const AutorizationWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const AuthButton = styled.button`
  padding: 4px 29px;
  font-size: 16px;
  line-height: calc(26 / 16px);
  border: none;
  border-radius: 80px;
  background-color: #f4e041;
  transition: all 0.3s;

  &:hover {
    background-color: darkred;
    color: white;
  }

  &:nth-of-type(2) {
    padding: 4px 22px;
  }
`;
