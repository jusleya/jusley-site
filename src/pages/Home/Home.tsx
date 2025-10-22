import { useTypeMode } from '../../contexts/themeMode.context';
import { Header } from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import About from '../../components/about/about.component';
import Languages from '../../components/languages/languages.component';
import Experience from '../../components/experience/experience.component';
import Footer from '../../components/footer/footer.component';

import * as S from './Home.style';

const Home = () => {
  const { typeMode } = useTypeMode();

  return (
    <S.Wrapper typeMode={typeMode}>
      <S.HeaderBanner>
        <Header />
        <Banner />
      </S.HeaderBanner>
      <S.GradientImage />
      <About />
      <Languages />
      <Experience />
      <Footer />
    </S.Wrapper>
  );
};

export default Home;
