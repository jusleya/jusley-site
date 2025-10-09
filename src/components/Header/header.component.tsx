import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useTypeMode } from '../../contexts/themeMode.context';

import { ReactComponent as LogoImage } from '../../assets/images/logo.svg';
import { ReactComponent as Close } from '../../assets/images/icons/close.svg';
import { ReactComponent as MenuIcon } from '../../assets/images/icons/menu-mobile.svg';
import moon from '../../assets/images/icons/moon.svg';
import sun from '../../assets/images/icons/sun.svg';

export const Header = () => {
  const { setTypeMode, typeMode } = useTypeMode();
  const [open, setOpen] = useState<boolean | null>(null);

  const [position, setPosition] = useState(0);

  useEffect(() => {
    const bannerPosition = document.getElementById('banner-position');
    const handleScroll = () => {
      if (bannerPosition)
        setPosition(bannerPosition.getBoundingClientRect().top);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleOnChange() {
    if (typeMode === 'darkMode') setTypeMode('whiteMode');
    else setTypeMode('darkMode');
  }

  const linksMenu = () => (
    <>
      <LinkHeader
        href="#sobre-mim"
        typeMode={typeMode}
        open={open}
        onClick={() => setOpen(null)}
      >
        Sobre mim
      </LinkHeader>
      <LinkHeader
        href="#linguagens-atuais"
        typeMode={typeMode}
        open={open}
        onClick={() => setOpen(null)}
      >
        Linguagens
      </LinkHeader>
      <LinkHeader
        href="#experiencia-profissional"
        typeMode={typeMode}
        open={open}
        onClick={() => setOpen(null)}
      >
        Experiências
      </LinkHeader>
    </>
  );

  return (
    <Wrapper position={position} typeMode={typeMode}>
      <HeaderWrapper>
        <Logo />
        <Menu
          onClick={() => (open === null ? setOpen(true) : setOpen(!open))}
          typeMode={typeMode}
        />
        <MenuMobile open={open} typeMode={typeMode}>
          <CloseIcon typeMode={typeMode} onClick={() => setOpen(!open)} />
          <MobileWrapper>
            {linksMenu()}

            <SwicthMode htmlFor="checkbox" typeMode={typeMode} open={open}>
              <input
                type="checkbox"
                checked={typeMode === 'darkMode'}
                onChange={handleOnChange}
                aria-label="checkbox"
              />
            </SwicthMode>
          </MobileWrapper>
        </MenuMobile>

        <DeskWrapper>{linksMenu()}</DeskWrapper>

        <SwicthMode htmlFor="checkbox" typeMode={typeMode}>
          <input
            id="checkbox"
            type="checkbox"
            checked={typeMode === 'darkMode'}
            onChange={handleOnChange}
          />
        </SwicthMode>
      </HeaderWrapper>
    </Wrapper>
  );
};

const CloseIcon = styled(Close)<{ typeMode: string }>`
  ${({ theme: { colors }, typeMode }) => css`
    path {
      stroke: ${colors[`${typeMode}`].font};
    }
  `}
`;

const DeskWrapper = styled.div`
  gap: 48px;
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    display: none;
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-inline: 70px;
  justify-content: space-between;

  @media (max-width: 800px) {
    padding-inline: 0;
  }

  @media (min-width: 1900px) {
    width: 1240px;
    margin: 0 auto;
  }
`;

const Wrapper = styled.nav<{ position: number; typeMode: string }>`
  z-index: 1;
  width: 100%;
  height: 73px;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ position, theme: { colors }, typeMode }) =>
    position < 0 ? `${colors[`${typeMode}`].header}` : 'transparent'};
  transition: background-color 0.25s linear;

  @media (max-width: 800px) {
    position: relative;
    padding: 24px 24px 0;
  }
`;

const LinkHeader = styled.a<{ typeMode: string; open?: boolean | null }>`
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

  @media (max-width: 800px) {
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

const Logo = styled(LogoImage)`
  width: 56px;
  height: auto;
`;

const Menu = styled(MenuIcon)<{ typeMode: string }>`
  display: none;

  @media (max-width: 800px) {
    display: block;

    ${({ theme: { colors }, typeMode }) => css`
      path {
        stroke: ${colors[`${typeMode}`].font};
      }
    `}
  }
`;

const MenuMobile = styled.div<{ typeMode: string; open: boolean | null }>`
  display: none;

  @media (max-width: 800px) {
    top: 0;
    height: 100dvh;
    display: flex;
    z-index: 1;
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

const MobileWrapper = styled.div`
  display: none;

  @media (max-width: 800px) {
    gap: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const SwicthMode = styled.label<{ typeMode: string; open?: boolean | null }>`
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

export default Header;
