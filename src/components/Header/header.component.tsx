import styled, { css } from 'styled-components';

// @ts-ignore
import { ReactComponent as LogoImage } from '../../assets/images/logo.svg';
import { useTypeMode } from '../../contexts/themeMode.context';

export const header = () => {
  const { setTypeMode, typeMode } = useTypeMode();

  return (
    <HeaderWrapper>
      <Logo />
      <LinksWrapper>
        <Link href="" mode={typeMode}>
          Sobre mim
        </Link>
        <Link href="" mode={typeMode}>
          Linguagens
        </Link>
        <Link href="" mode={typeMode}>
          Experiências
        </Link>
      </LinksWrapper>

      <button
        onClick={() => {
          typeMode === 'darkMode'
            ? setTypeMode('whiteMode')
            : setTypeMode('darkMode');
        }}
      >
        mudou
      </button>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.nav`
  width: 100%;
  display: flex;
  position: fixed;
  padding: 46px 70px;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(LogoImage)`
  width: 81px;
  height: auto;
`;

const LinksWrapper = styled.div`
  gap: 48px;
  display: flex;
  justify-content: center;
`;

const Link = styled.a<{ mode: string }>`
  text-decoration: none;
  ${({ theme: { colors }, mode }) => css`
    color: ${colors[`${mode}`].font};
  `}

  &:hover {
    text-decoration: underline;
  }
`;

export default header;
