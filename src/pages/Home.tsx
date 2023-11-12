import styled, { css } from 'styled-components';
import { useTypeMode } from '../contexts/themeMode.context';
import Header from '../components/header/header.component';
import Banner from '../components/banner/banner.component';
import About from '../components/about/about.component';
import Languages from '../components/languages/languages.component';
// @ts-ignore
import { ReactComponent as Gradient } from '../assets/images/icons/gradient.svg';
import Footer from '../components/footer/footer.component';

const Home = () => {
  const { typeMode } = useTypeMode();

  return (
    <Wrapper typeMode={typeMode}>
      <HeaderBanner>
        <Header />
        <Banner />
      </HeaderBanner>
      <GradientImage />
      <About />
      <Languages />
      <Footer />
    </Wrapper>
  );
};

const GradientImage = styled(Gradient)`
  top: 900px;
  width: auto;
  height: 800px;
  position: absolute;
  right: calc(100vw - 330px);

  @media (max-width: 800px) {
    right: calc(100vw - 230px);
  }
`;

const HeaderBanner = styled.div`
  height: 508px;
  grid-area: banner;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    height: 399px;
  }
`;

const Wrapper = styled.div<{ typeMode: string }>`
  gap: 124px;
  display: grid;
  grid-template-areas:
    'banner'
    'about'
    'language'
    'footer';

  ${({ theme: { colors }, typeMode }) => css`
    color: ${colors[`${typeMode}`].font};
    background-color: ${colors[`${typeMode}`].background};
  `}
`;

export default Home;
