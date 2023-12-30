import styled, { css } from 'styled-components';
import { useTypeMode } from '../../contexts/themeMode.context';

import { ReactComponent as BannerRows } from '../../assets/images/icons/banner-rows.svg';
import video from '../../assets/videos/banner.mp4';

export const Banner = () => {
  const { typeMode } = useTypeMode();

  return (
    <div id="banner-position">
      <BannerWrapper src={video} loop autoPlay muted />
      <FilterBanner typeMode={typeMode} />
      <Name>{`<Jusley Tavares />`}</Name>
      <Dev>front-end developer</Dev>
      <RowsIcon>
        <BannerRows />
      </RowsIcon>
    </div>
  );
};

const BannerWrapper = styled.video`
  width: 100%;
  height: 508px;
  display: flex;
  object-fit: cover;
  position: absolute;

  @media (max-width: 800px) {
    height: 399px;
  }
`;

const RowsIcon = styled.div`
  top: 493px;
  display: flex;
  margin-left: 70px;
  position: absolute;

  @media (max-width: 800px) {
    display: none;
  }
  @media (min-width: 1900px) {
    width: 1100px;
    margin-left: 0;
    justify-content: center;
  }
`;

const FilterBanner = styled.div<{ typeMode: string }>`
  width: 100%;
  height: 508px;
  opacity: 0.75;
  position: absolute;

  ${({ theme: { colors }, typeMode }) => css`
    background-color: ${colors[`${typeMode}`].background};
  `}

  @media (max-width: 800px) {
    height: 399px;
  }
`;

const Dev = styled.p`
  font-size: 40px;
  font-weight: 200;
  margin-top: 12px;
  position: relative;
  text-align: center;
  line-height: 121.2%;
  letter-spacing: 13.925px;

  @media (max-width: 800px) {
    font-size: 18px;
    letter-spacing: 7.925px;
  }
  @media (min-width: 1900px) {
    width: 1240px;
    margin: 0 auto;
    margin-top: 12px;
  }
`;

const Name = styled.h1`
  font-size: 64px;
  margin-top: 62px;
  font-weight: 800;
  position: relative;
  text-align: center;
  line-height: 121.2%;
  text-transform: uppercase;
  background-image: linear-gradient(
    180deg,
    #d94766 -57.05%,
    #d94766 34.92%,
    #c06f10 125%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  ${({ theme: { colors } }) => css`
    color: ${colors.darkMode.font};
  `}

  @media (max-width: 800px) {
    font-size: 30px;
  }
  @media (min-width: 1900px) {
    width: 1240px;
    margin: 0 auto;
    margin-top: 62px;
  }
`;

export default Banner;
