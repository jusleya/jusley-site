import { useState } from 'react';
import styled, { css } from 'styled-components';
import { useTypeMode } from '../../contexts/themeMode.context';
import Title from '../title/title.component';
import Button from '../button/button.component';
import { experiences } from './experiences.files';

import { ReactComponent as CircleIcon } from '../../assets/images/icons/circle_experience.svg';
import { ReactComponent as Arrow } from '../../assets/images/icons/arrow.svg';

export const Experience = () => {
  const { typeMode } = useTypeMode();
  const [currentPage, setCurrentPage] = useState(0);
  const arrayExp = [];
  let i = 0;
  let arrayAux = [];

  while (i <= experiences.length) {
    for (let j = i; j < i + 3; j += 1) {
      if (experiences[j] !== undefined) {
        arrayAux.push(experiences[j]);
      }
    }
    arrayExp.push(arrayAux);
    arrayAux = [];
    i += 3;
  }

  return (
    <Wrapper typeMode={typeMode}>
      <TitleWrapper>
        <Title title="Experiência Profissional" id="experiencia-profissional" />
        <ButtonWrapper>
          <Button
            onClick={() => setCurrentPage(currentPage - 1)}
            width={40}
            height={40}
            disabled={currentPage !== 1}
          >
            <ArrowLeft />
          </Button>
          <Button
            onClick={() => setCurrentPage(currentPage + 1)}
            width={40}
            height={40}
            disabled={currentPage === arrayExp.length - 1}
          >
            <Arrow />
          </Button>
        </ButtonWrapper>
      </TitleWrapper>

      <Scroll>
        <Experiences>
          {arrayExp[currentPage].map(
            ({ id, company, description, period, role, tools }) => (
              <ExperienceWrapper key={id}>
                <Circle>
                  <CircleIcon />
                </Circle>
                <div>
                  <Period>{period}</Period>
                  <Text>{role}</Text>
                </div>
                <Info typeMode={typeMode}>
                  <Company>{company}</Company>
                  <Text>{description}</Text>
                  <Tools>
                    <b>Ferramentas: </b>
                    {tools}
                  </Tools>
                </Info>
              </ExperienceWrapper>
            ),
          )}
        </Experiences>
      </Scroll>
    </Wrapper>
  );
};

const ArrowLeft = styled(Arrow)`
  transform: rotate(180deg);
`;

const ButtonWrapper = styled.div`
  gap: 24px;
  display: flex;

  button {
    padding: 8px;
  }
`;

const Circle = styled.div`
  position: relative;

  &:before {
    top: 12px;
    left: 12px;
    content: '';
    opacity: 1;
    height: 2px;
    width: 392px;
    position: absolute;
    transition:
      opacity 0.5s ease,
      width 0.5s ease;
    background: ${({ theme: { colors } }) => colors.default.pink};
  }
`;

const Company = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.36px;
`;

const Experiences = styled.div`
  gap: 56px;
  display: flex;
  width: 1132px;
  margin: 0 auto;
`;

const ExperienceWrapper = styled.div`
  gap: 9px;
  width: 340px;
  display: flex;
  flex-direction: column;

  &:last-child {
    ${Circle} {
      &:before {
        width: 328px;
      }
    }
  }

  @media (max-width: 800px) {
    min-width: 312px;
  }
`;

const Info = styled.div<{ typeMode: string }>`
  gap: 4px;
  display: flex;
  height: 250px;
  padding: 16px;
  margin-top: 9px;
  border-radius: 4px;
  position: relative;
  flex-direction: column;

  &:after,
  &:before {
    content: '';
    display: block;
    position: absolute;
    border-style: solid;
  }

  &:after {
    left: 21px;
    bottom: 246px;
    border-style: solid;
    border-width: 10px;
  }

  &:before {
    left: 18px;
    bottom: 246px;
    border-width: 13px;
  }

  ${({ theme: { colors }, typeMode }) => css`
    background-color: ${colors[`${typeMode}`].neutral};
    border: 2px solid ${colors[`${typeMode}`].stroke};

    &:after {
      border-color: transparent transparent ${colors[`${typeMode}`].neutral}
        transparent;
    }

    &:before {
      border-color: transparent transparent ${colors[`${typeMode}`].stroke}
        transparent;
    }
  `}
`;

const Scroll = styled.div`
  @media (max-width: 800px) {
    width: 100%;
    overflow-x: scroll;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    gap: 34px;
    flex-direction: column;
    align-items: flex-start;

    ${ButtonWrapper} {
      width: 100%;
      justify-content: flex-end;
    }
  }
`;

const Text = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 175%;
  letter-spacing: -0.28px;
`;

const Period = styled(Text)`
  ${({ theme: { colors } }) => css`
    color: ${colors.default.pink};
  `}
`;

const Tools = styled(Text)`
  margin-top: 8px;
`;

const Wrapper = styled.div<{ typeMode: string }>`
  grid-area: experience;
  gap: 64px;
  display: flex;
  padding-inline: 70px;
  flex-direction: column;

  @media (max-width: 800px) {
    gap: 40px;
    width: 100vw;
    padding-inline: 24px;
  }

  @media (min-width: 1900px) {
    width: 1240px;
    margin: 0 auto;
  }
`;

export default Experience;
