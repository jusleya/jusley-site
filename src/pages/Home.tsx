import styled, { css } from 'styled-components';
import { useTypeMode } from '../contexts/themeMode.context';
import Header from '../components/Header/header.component';

const Home = () => {
  const { typeMode } = useTypeMode();

  return (
    <Wrapper mode={typeMode}>
      <Header />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ mode: string }>`
  height: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme: { colors }, mode }) => css`
    color: ${colors[`${mode}`].font};
    background-color: ${colors[`${mode}`].background};
  `}
`;

export default Home;
