import styled from 'styled-components';

export const CustomCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
`;

export const CustomPhotoCard = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

export const CustomUserName = styled.p`
  font-size: 16px;
  text-align: center;
`;

export const CustomCardText = styled.p`
  font-size: 16px;
  line-height: calc(26 / 16);
  text-align: center;
`;
