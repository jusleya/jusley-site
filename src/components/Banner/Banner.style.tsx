import styled, { css } from 'styled-components';
import { ReactComponent as BannerRows } from '../../assets/images/icons/banner-rows.svg';

export const BannerWrapper = styled.video`
  top: 0;
  width: 100%;
  height: 508px;
  object-fit: cover;
  position: absolute;

  @media (max-width: 920px) {
    height: 399px;
  }
`;

export const FilterBanner = styled(BannerWrapper)<{ typeMode: string }>`
  opacity: 0.75;

  ${({ theme: { colors }, typeMode }) => css`
    background-color: ${colors[`${typeMode}`].background};
  `}
`;

export const Name = styled.h1`
  font-size: 64px;
  font-weight: 800;
  margin-top: 180px;
  text-align: center;
  text-transform: uppercase;

  ${({ theme: { colors } }) => css`
    color: ${colors.darkMode.font};
  `}
  position: relative;
  background-image: linear-gradient(
    180deg,
    #d94766 -57.05%,
    #d94766 34.92%,
    #c06f10 125%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 1900px) {
    width: 1240px;
    margin-inline: auto;
  }
  @media (max-width: 920px) {
    font-size: 30px;
  }
`;

export const Function = styled.p`
  font-size: 40px;
  font-weight: 200;
  margin: 12px 0 0;
  position: relative;
  text-align: center;
  letter-spacing: 13.925px;
  text-transform: lowercase;

  @media (min-width: 1900px) {
    width: 1240px;
    margin-inline: auto;
  }
  @media (max-width: 920px) {
    font-size: 18px;
    letter-spacing: 7.925px;
  }
`;

export const Rows = styled(BannerRows)`
  top: 493px;
  margin-left: 70px;
  position: absolute;

  @media (min-width: 1900px) {
    margin: 0;
    width: 1100px;
  }
  @media (max-width: 920px) {
    display: none;
  }
`;
