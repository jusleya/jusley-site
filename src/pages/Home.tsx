import styled, { css } from 'styled-components';
import { useTypeMode } from '../contexts/themeMode.context';
import Header from '../components/Header/header.component';
import Banner from '../components/Banner/banner.component';

const Home = () => {
  const { typeMode } = useTypeMode();

  return (
    <Wrapper typeMode={typeMode}>
      <Header />
      <Banner />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ typeMode: string }>`
  z-index: 1;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;

  ${({ theme: { colors }, typeMode }) => css`
    color: ${colors[`${typeMode}`].font};
    background-color: ${colors[`${typeMode}`].background};
  `}
`;

export default Home;
