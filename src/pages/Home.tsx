import styled, { css } from 'styled-components';
import { useTypeMode } from '../contexts/themeMode.context';
import Header from '../components/Header/header.component';
import Banner from '../components/Banner/banner.component';

const Home = () => {
  const { typeMode } = useTypeMode();

  return (
    <Wrapper mode={typeMode}>
      <Header />
      <Banner />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ mode: string }>`
  display: flex;
  flex-direction: column;

  ${({ theme: { colors }, mode }) => css`
    color: ${colors[`${mode}`].font};
    /* background-color: ${colors[`${mode}`].background}; */
  `}
`;

export default Home;
