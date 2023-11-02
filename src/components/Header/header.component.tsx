import styled, { css } from 'styled-components';
import { useTypeMode } from '../../contexts/themeMode.context';

// @ts-ignore
import { ReactComponent as LogoImage } from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { setTypeMode, typeMode } = useTypeMode();
  // const [scroll, setScroll] = useState(0);

  // const handleScroll = () => setScroll(document.documentElement.scrollTop);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // const className = scroll > 50 ? 'navbar navbar-scrolled' : '';

  return (
    <HeaderWrapper>
      <Logo />
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
  height: 73px;
  width: 100%;
  display: flex;
  /* position: fixed; */
  padding: 24px 70px;
  align-items: center;
  background-color: transparent;
  justify-content: space-between;

  /* .sticky {
    position: fixed;
    background-color: rebeccapurple;
    top: 0;
    left: 0;
  } */
`;

const Logo = styled(LogoImage)`
  width: 56px;
  height: auto;
`;

const LinksWrapper = styled.div`
  gap: 48px;
  display: flex;
  justify-content: center;
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

export default Header;
