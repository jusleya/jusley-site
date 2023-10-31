import { /* useContext, */ type SetStateAction, useState } from 'react';
import styled, { css } from 'styled-components';
import Header from '../components/Header/header.component';
// import { ModeContext } from '../contexts/modeContext';

const Home = () => {
  const [mode, setMode] = useState<string>('darkMode');

  return (
    <Wrapper mode={mode}>
      <Header typeMode={(mode: SetStateAction<string>) => setMode(mode)} />
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
