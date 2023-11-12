import styled, { css } from 'styled-components';
import { useTypeMode } from '../../contexts/themeMode.context';
import Title from '../Title/title.component';
import { languages } from './languages';

export const Languages = () => {
  const { typeMode } = useTypeMode();

  return (
    <Wrapper>
      <Title title="Linguagens atuais" id="linguagens-atuais" />
      <LanguagesWrapper>
        {languages.map(({ id, name, image, time }) => (
          <LanguageBox key={id} typeMode={typeMode}>
            <div dangerouslySetInnerHTML={{ __html: image }} />
            <div>
              <Name>{name}</Name>
              <Time>{time}</Time>
            </div>
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
  position: relative;
  justify-content: center;

  @media (max-width: 800px) {
    gap: 32px;
    width: 1050px;
  }
`;

const LanguageBox = styled.div<{ typeMode: string }>`
  gap: 25px;
  width: 236px;
  display: flex;
  padding: 24px;
  cursor: pointer;
  height: auto;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.35s ease;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    background: ${({ theme: { colors } }) => colors.default.pink};
    height: 4px;
  }

  &:before {
    opacity: 0;
    transition:
      opacity 0 ease,
      width 0 ease;
  }

  &:hover {
    &:before {
      width: 100%;
      opacity: 1;
      transition:
        opacity 0.5s ease,
        width 0.5s ease;
    }
  }

  svg {
    max-width: 57px;
    min-height: 32px;
  }

  ${({ theme: { colors }, typeMode }) => css`
    background-color: ${colors[`${typeMode}`].neutral};
  `}
`;

const Name = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.48px;
`;

const Time = styled.p`
  font-size: 14px;
  margin-top: 4px;
  font-weight: 400;
  line-height: 175%;
  letter-spacing: -0.28px;
`;

const Wrapper = styled.div`
  gap: 64px;
  grid-area: language;
  display: flex;
  padding-inline: 70px;
  flex-direction: column;

  @media (max-width: 800px) {
    gap: 40px;
    overflow-x: scroll;
  }

  @media (min-width: 1900px) {
    width: 1240px;
    margin: 0 auto;
  }
`;

export default Languages;
