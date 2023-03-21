import styled from 'styled-components';
import { mobile, tablet, tv } from 'utils/mixins/adaptMixin';
import backgroundDesktop from '../../images/background_desktop.png';
import backgroundMobile from '../../images/background_mobile.png';
import backgroundTablet from '../../images/background_tablet.png';
import backgroundTv from '../../images/background_tv.png';

export const BannerImage = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 650px;
  margin: 0 auto;
  padding: 0 322px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 21px;
  background-image: url(${backgroundDesktop});
  background-color: gray;

  ${mobile`
    max-width: 360px;
    padding: 0 16px;
    height: 500px;
  `}

  @media screen and (max-width: 768px) {
    background-image: url(${backgroundMobile});
  }

  ${tablet`
   max-width: 768px;
   height: 500px;
   padding: 0 194px;
  `}

  @media screen and (max-width: 1200px) and (min-width: 768px) {
    background-image: url(${backgroundTablet});
  }

  ${tv`
   max-width: 1170px;
   padding: 0 194px;
  `}

  @media screen and (min-width: 2560px) {
    background-image: url(${backgroundTv});
  }
`;

export const BannerTitle = styled.h1`
  font-size: 40px;
  color: white;
`;

export const BannerText = styled.p`
  font-size: 16px;
  color: white;
`;
