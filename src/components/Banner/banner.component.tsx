import styled, { css } from 'styled-components';
import { useTypeMode } from '../../contexts/themeMode.context';

// @ts-ignore
import { ReactComponent as BannerRows } from '../../assets/images/icons/banner-rows.svg';
import video from '../../assets/videos/banner.mp4';

export const Banner = () => {
  const { typeMode } = useTypeMode();

  return (
    <>
      <BannerWrapper src={video} loop autoPlay muted></BannerWrapper>
      <FilterBanner typeMode={typeMode} />
      <Name>{`<Jusley Tavares />`}</Name>
      <Dev>front-end developer</Dev>
      <RowsIcon />
    </>
  );
};

const BannerWrapper = styled.video`
  width: 100%;
  z-index: -1;
  height: 508px;
  display: flex;
  object-fit: cover;
  position: absolute;

  @media (max-width: 800px) {
    height: 399px;
  }
`;

const RowsIcon = styled(BannerRows)`
  top: 493px;
  margin-left: 70px;
  position: absolute;

  @media (max-width: 800px) {
    display: none;
  }
`;

const FilterBanner = styled.div<{ typeMode: string }>`
  z-index: -1;
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

const Name = styled.h1`
  font-size: 64px;
  margin-top: 62px;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
  background-image: linear-gradient(
    180deg,
    #d94766 -57.05%,
    #d94766 34.92%,
    #c06f10 125%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${({ theme: { colors } }) => css`
    color: ${colors.darkMode.font};
  `}

  @media (max-width: 800px) {
    font-size: 30px;
  }
`;

const Dev = styled.p`
  font-size: 40px;
  font-weight: 200;
  margin-top: 12px;
  line-height: 121%;
  text-align: center;
  letter-spacing: 13.925px;

  @media (max-width: 800px) {
    font-size: 18px;
    letter-spacing: 7.925px;
  }
`;

export default Banner;
