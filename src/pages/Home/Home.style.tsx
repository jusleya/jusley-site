import styled, { css } from 'styled-components';

import { ReactComponent as Gradient } from '../../assets/images/icons/gradient.svg';

export const Wrapper = styled.div<{ typeMode: string }>`
  gap: 124px;
  display: grid;
  grid-template-areas:
    'banner'
    'about'
    'language'
    'experience'
    'footer';
  ${({ theme: { colors }, typeMode }) => css`
    color: ${colors[`${typeMode}`].font};
    background-color: ${colors[`${typeMode}`].background};
  `}
`;

export const GradientImage = styled(Gradient)`
  top: 600px;
  position: absolute;
  right: calc(100vw - 460px);

  @media (min-width: 1900px) {
    right: calc(100vw - 660px);
  }
  @media (max-width: 920px) {
    right: calc(100vw - 350px);
  }
`;

export const HeaderBanner = styled.div`
  display: flex;
  height: 508px;
  grid-area: banner;
  flex-direction: column;
  @media (max-width: 920px) {
    height: 399px;
  }
`;
