import styled, { css } from 'styled-components';
import { ReactComponent as Arrow } from '../../assets/images/icons/arrow.svg';
import { ReactComponent as LogoImage } from '../../assets/images/logo.svg';
import { ReactComponent as Close } from '../../assets/images/icons/close.svg';
import { ReactComponent as MenuIcon } from '../../assets/images/icons/menu-mobile.svg';
import moon from '../../assets/images/icons/moon.svg';
import sun from '../../assets/images/icons/sun.svg';

export const HeaderWrapper = styled.nav<{ position: number; typeMode: string }>`
  z-index: 1;
  width: 100%;
  position: fixed;
  transition: background-color 0.25s linear;
  background-color: ${({ position, theme: { colors }, typeMode }) =>
    position < 0 ? `${colors[`${typeMode}`].header}` : 'transparent'};
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 8px 70px;
  max-width: 1240px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 920px) {
    position: relative;
    padding: 8px 24px;
  }
`;

export const LinksWrapper = styled.div`
  gap: 48px;
  display: flex;
  justify-content: center;

  @media (max-width: 920px) {
    gap: 32px;
    align-items: flex-end;
    flex-direction: column;
  }
`;

export const Logo = styled(LogoImage)`
  width: 56px;
  height: auto;
`;

export const PositionLanguage = styled.div`
  gap: 24px;
  display: flex;
  align-items: center;
`;

export const SwicthMode = styled.label<{
  typeMode: string;
  open?: boolean | null;
}>`
  width: 28px;
  height: 16px;
  padding: 2px;
  display: block;
  cursor: pointer;
  position: relative;
  align-items: center;
  border-radius: 16px;
  ${({ theme: { colors }, typeMode }) => css`
    background-color: ${colors[`${typeMode}`].switch};
  `}

  &:after {
    content: '';
    position: absolute;
    left: ${({ typeMode }) =>
      typeMode === 'darkMode' ? '2px' : 'calc(55% - 2px)'};
    top: 2px;
    width: 16px;
    height: 16px;
    background-image: ${({ typeMode }) =>
      typeMode === 'darkMode' ? `url(${moon})` : `url(${sun})`};
    background-repeat: no-repeat;
    border-radius: 90px;
    transition: 0.3s;
  }

  input {
    all: unset;
  }

  &:hover {
    ${({ theme: { colors }, typeMode }) => css`
      border: 2px solid ${colors[`${typeMode}`].hover};
    `}
    &:after {
      top: 0px;
      width: 10px;
      height: 10px;
    }
  }

  @media (max-width: 800px) {
    ${({ open }) =>
      open
        ? css`
            display: flex;
            flex-direction: column;
          `
        : css`
            display: none;
          `}
  }
`;

// Menu Mobile:
export const MenuMobile = styled.div<{
  typeMode: string;
  open: boolean | null;
}>`
  display: none;

  @media (max-width: 920px) {
    top: 0;
    z-index: 1;
    display: flex;
    height: 100dvh;
    position: absolute;
    align-items: flex-end;
    flex-direction: column;
    justify-content: space-between;
    svg {
      width: 0;
    }

    ${({ theme: { colors }, typeMode }) => css`
      background-color: ${colors[`${typeMode}`].background};
    `}

    ${({ open }) =>
      open
        ? css`
            right: 0;
            width: 100%;
            padding: 45px 24px;
            svg {
              width: auto;
            }
            animation: openSide 0.3s linear;
            @keyframes openSide {
              from {
                width: 0;
                svg {
                  width: 0;
                }
              }
              to {
                width: 100%;
                svg {
                  width: auto;
                }
              }
            }
          `
        : open !== null &&
          css`
            right: 0;
            width: 0;
            svg {
              width: 0;
            }
            animation: closeSide 0.3s linear;
            @keyframes closeSide {
              from {
                width: 100%;
                svg {
                  width: auto;
                }
              }
              to {
                width: 0;
                svg {
                  width: 0;
                }
              }
            }
          `}
  }
`;

export const Menu = styled(MenuIcon)<{ typeMode: string }>`
  display: none;

  @media (max-width: 920px) {
    display: block;

    ${({ theme: { colors }, typeMode }) => css`
      path {
        stroke: ${colors[`${typeMode}`].font};
      }
    `}
  }
`;

export const CloseIcon = styled(Close)<{ typeMode: string }>`
  ${({ theme: { colors }, typeMode }) => css`
    path {
      stroke: ${colors[`${typeMode}`].font};
    }
  `}
`;
// end

// Language:
export const ArrowLeft = styled(Arrow)<{ open: boolean }>`
  width: 20px;
  transform: ${({ open }) => (open ? 'rotate(-90deg)' : 'rotate(90deg)')};
`;

export const ButtonFlag = styled.div<{ typeMode: string }>`
  gap: 4px;
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 3px 8px 1px;
  background: ${({ theme: { colors }, typeMode }) =>
    colors[`${typeMode}`].switch};
  border-radius: 16px;
`;

export const ContentDrop = styled.div`
  gap: 8px;
  display: flex;
  cursor: pointer;
  align-items: center;

  &:hover {
    color: ${({ theme: { colors } }) => colors.darkMode.hover};
  }
`;

export const ContentMode = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Dropdown = styled.div<{ typeMode: string }>`
  gap: 12px;
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px 16px;
  top: 55px;
  border-radius: 8px;

  ${({ theme: { colors }, typeMode }) => css`
    background-color: ${colors[`${typeMode}`].neutral};
    border: 2px solid ${colors[`${typeMode}`].stroke};
  `};
  @media (max-width: 800px) {
    top: 65px;
    right: 24px;
  }
`;
// end

// Links:
export const LinkHeader = styled.a<{ typeMode: string; open?: boolean | null }>`
  position: relative;
  text-decoration: none;
  ${({ theme: { colors }, typeMode }) => css`
    color: ${colors[`${typeMode}`].font};
  `}

  &:before {
    content: '';
    position: absolute;
    top: 24px;
    left: 0;
    width: 0;
    background: ${({ theme: { colors } }) => colors.default.pink};
    height: 4px;
  }

  &:before {
    opacity: 0;
    transition:
      opacity 0 ease,
      width 0 ease;
  }

  &:hover {
    &:before {
      width: 100%;
      opacity: 1;
      transition:
        opacity 0.5s ease,
        width 0.5s ease;
    }
  }

  @media (max-width: 920px) {
    ${({ open }) =>
      open
        ? css`
            display: block;
          `
        : css`
            display: none;
          `}
  }
`;
// end
