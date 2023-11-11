import styled, { css } from 'styled-components';
import { useTypeMode } from '../../contexts/themeMode.context';
import Title from '../Title/title.component';
import { languages } from './languages';

export const Languages = () => {
  const { typeMode } = useTypeMode();

  return (
    <Wrapper>
      <Title title="Linguagens atuais" />
      <LanguagesWrapper>
        {languages.map(({ id, name, image, time }) => (
          <LanguageBox key={id} typeMode={typeMode}>
            <div dangerouslySetInnerHTML={{ __html: image }}></div>
            <h2>{name}</h2>
          </LanguageBox>
        ))}
      </LanguagesWrapper>
    </Wrapper>
  );
};

const LanguagesWrapper = styled.div`
  gap: 51px;
  display: flex;
  flex-wrap: wrap;
`;

const LanguageBox = styled.div<{ typeMode: string }>`
  gap: 25px;
  width: 223px;
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;

  ${({ theme: { colors }, typeMode }) => css`
    background-color: ${colors[`${typeMode}`].background};
  `}
`;

const Wrapper = styled.div`
  gap: 64px;
  grid-area: language;
  display: flex;
  padding-inline: 70px;
  flex-direction: column;

  @media (max-width: 800px) {
    gap: 40px;
  }

  @media (min-width: 1900px) {
    width: 1240px;
    margin: 0 auto;
  }
`;

export default Languages;
