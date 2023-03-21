import styled from 'styled-components';
import { mobile, tablet } from 'utils/mixins/adaptMixin';

export const GallerySection = styled.section`
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const CustomCardsGallery = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 29px;

  ${mobile`
    grid-template-columns: repeat(1, 1fr);
    gap: 20px
  `}

  ${tablet`
    grid-template-columns: repeat(2, 1fr);
    gap: 16px
  `}
`;
