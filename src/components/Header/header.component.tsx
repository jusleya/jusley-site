import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { useTypeMode } from '../../contexts/themeMode.context';

// @ts-ignore
import { ReactComponent as LogoImage } from '../../assets/images/logo.svg';
// @ts-ignore
import { ReactComponent as MenuIcon } from '../../assets/images/icons/menu-mobile.svg';
import moon from '../../assets/images/icons/moon.svg';
// import { type ChangeEvent, useState } from 'react';

export const Header = () => {
  const { setTypeMode, typeMode } = useTypeMode();
  // const [switchState, setSwitchState] = useState(true);
  // function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
  //   console.log('---', e.target.checked);
  //   setSwitchState(!switchState);
  // }

  // vou ter que fazer algo que simule o toggle com as imgs, quando clicar ele vai ter a animação
  // e mudança para o claro ou escuro.

  return (
    <HeaderWrapper>
      <Logo />
      <Menu />
      <LinksWrapper>
        <LinkHeader to="" typeMode={typeMode}>
          Sobre mim
        </LinkHeader>
        <LinkHeader to="" typeMode={typeMode}>
          Linguagens
        </LinkHeader>
        <LinkHeader to="" typeMode={typeMode}>
          Experiências
        </LinkHeader>
      </LinksWrapper>

      {/* <StyledLabel htmlFor="checkbox" checked={switchState} moon={moon}>
        <input
          id="checkbox"
          type="checkbox"
          checked={switchState}
          onChange={handleOnChange}
        />
      </StyledLabel> */}

      <DarkMode
        onClick={() => {
          typeMode === 'darkMode'
            ? setTypeMode('whiteMode')
            : setTypeMode('darkMode');
        }}
      >
        mudou
      </DarkMode>
    </HeaderWrapper>
  );
};

// const StyledLabel = styled.label<{ checked: boolean; moon: string }>`
//   cursor: pointer;
//   text-indent: -9999px;
//   width: 250px;
//   height: 125px;
//   background: ${({ checked }) => (checked ? 'green' : 'red')};
//   display: block;
//   border-radius: 100px;
//   position: relative;
//   &:after {
//     content: '';
//     position: absolute;
//     left: ${({ checked }) => (checked ? '14px' : 'calc(55% - 5px)')};
//     top: 12px;
//     width: 100px;
//     height: 100px;
//     background: url(moon);
//     border-radius: 90px;
//     transition: 0.3s;
//   }
// `;

const DarkMode = styled.button`
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

const Logo = styled(LogoImage)`
  width: 56px;
  height: auto;
`;

const LinksWrapper = styled.div`
  gap: 48px;
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    display: none;
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

const Menu = styled(MenuIcon)`
  display: none;

  @media (max-width: 800px) {
    display: block;
  }
`;

export default Header;
