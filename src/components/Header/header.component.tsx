import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
// import { ModeContext, type ModeContextType } from '../../contexts/modeContext';

export const header = ({ typeMode }: any) => {
  const [mode, setMode] = useState<string>('darkMode');

  useEffect(() => {
    typeMode(mode);
  }, [mode]);

  return (
    // <ModeContext.Provider value={{ mode, setMode }}>
    <HeaderWrapper mode={mode}>
      <p>img</p>
      <Link href="">Sobre mim</Link>
      <a href="">Linguagens</a>
      <a href="">Experiências</a>
      <button
        onClick={() => {
          mode === 'darkMode' ? setMode('whiteMode') : setMode('darkMode');
          // setMode(!mode);
          // mode.darkMode === true
          //   ? setMode({ darkMode: false })
          //   : setMode({ darkMode: true });
          // console.log('clicou ', mode);
        }}
      >
        mudou
      </button>
    </HeaderWrapper>
    // </ModeContext.Provider>
  );
};

const HeaderWrapper = styled.nav<{ mode: string }>`
  gap: 48px;
  display: flex;
  padding: 46px 70px;
  justify-content: center;

  /* ${({ theme: { colors }, mode }) => css`
    background-color: ${colors[`${mode}`].background};
  `} */
`;

const Link = styled.a``;

export default header;
