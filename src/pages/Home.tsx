import styled, { css } from 'styled-components';
import { useTypeMode } from '../contexts/themeMode.context';
import Header from '../components/Header/header.component';
import Banner from '../components/Banner/banner.component';
import About from '../components/About/about.component';

const Home = () => {
  const { typeMode } = useTypeMode();

  return (
    <Wrapper typeMode={typeMode}>
      <HeaderBanner>
        <Header />
        <Banner />
      </HeaderBanner>
      <About />
    </Wrapper>
  );
};
const HeaderBanner = styled.div`
  z-index: 1;
  height: 508px;
  grid-area: banner;
  display: flex;
  position: relative;
  flex-direction: column;

  @media (max-width: 800px) {
    height: 399px;
  }
`;
const Wrapper = styled.div<{ typeMode: string }>`
  gap: 124px;
  display: grid;
  position: relative;
  padding-bottom: 64px;
  grid-template-areas:
    'banner'
    'about';

  ${({ theme: { colors }, typeMode }) => css`
    color: ${colors[`${typeMode}`].font};
    background-color: ${colors[`${typeMode}`].background};
  `}
`;

export default Home;
