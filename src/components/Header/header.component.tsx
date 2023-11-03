import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { useTypeMode } from '../../contexts/themeMode.context';

// @ts-ignore
import { ReactComponent as LogoImage } from '../../assets/images/logo.svg';
// @ts-ignore
import { ReactComponent as Close } from '../../assets/images/icons/close.svg';
// @ts-ignore
import { ReactComponent as MenuIcon } from '../../assets/images/icons/menu-mobile.svg';
// @ts-ignore
import moon from '../../assets/images/icons/moon.svg';
import sun from '../../assets/images/icons/sun.svg';

export const Header = () => {
  const { setTypeMode, typeMode } = useTypeMode();
  const [open, setOpen] = useState<boolean>(false);

  function handleOnChange() {
    if (typeMode === 'darkMode') setTypeMode('whiteMode');
    else setTypeMode('darkMode');
  }
  console.log(open);

  const linksMenu = () => (
    <>
      <LinkHeader to="" typeMode={typeMode}>
        Sobre mim
      </LinkHeader>
      <LinkHeader to="" typeMode={typeMode}>
        Linguagens
      </LinkHeader>
      <LinkHeader to="" typeMode={typeMode}>
        Experiências
      </LinkHeader>
    </>
  );

  return (
    <HeaderWrapper>
      <Logo />
      <Menu onClick={() => setOpen(!open)} />

      {open && (
        <MenuMobile open={open} typeMode={typeMode}>
          <Close onClick={() => setOpen(!open)} />
          <MobileWrapper>
            {linksMenu()}

            <SwicthMode htmlFor="checkbox" typeMode={typeMode} open={open}>
              <input
                id="checkbox"
                type="checkbox"
                checked={typeMode === 'darkMode'}
                onChange={handleOnChange}
              />
            </SwicthMode>
          </MobileWrapper>
        </MenuMobile>
      )}

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
  );
};

const DeskWrapper = styled.div`
  gap: 48px;
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    display: none;
  }
`;

const HeaderWrapper = styled.nav`
  height: 73px;
  width: 100%;
  display: flex;
  padding: 24px 70px;
  align-items: center;
  background-color: transparent;
  justify-content: space-between;

  @media (max-width: 800px) {
    padding: 24px 32px 0;
  }
`;

const LinkHeader = styled(Link)<{ typeMode: string }>`
  text-decoration: none;
  ${({ theme: { colors }, typeMode }) => css`
    color: ${colors[`${typeMode}`].font};
  `}

  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled(LogoImage)`
  width: 56px;
  height: auto;
`;

const Menu = styled(MenuIcon)`
  display: none;

  @media (max-width: 800px) {
    display: block;
  }
`;

const MenuMobile = styled.div<{ typeMode: string; open: boolean }>`
  display: none;

  @media (max-width: 800px) {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 45px 24px;
    position: absolute;
    align-items: flex-end;
    flex-direction: column;
    justify-content: space-between;
    ${({ theme: { colors }, typeMode }) => css`
      background-color: ${colors[`${typeMode}`].background};
    `}

    @keyframes openSide {
      from {
        transform: translateX(300px);
      }
      to {
        transform: translateX(0);
      }
    }

    @keyframes closeSide {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(300px);
      }
    }
    animation: openSide 0.25s linear;
  }
`;

const MobileWrapper = styled.div`
  display: none;

  @media (max-width: 800px) {
    gap: 58px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const SwicthMode = styled.label<{ typeMode: string; open?: boolean }>`
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
      border: 2px solid ${colors[`${typeMode}`].switchHover};
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
