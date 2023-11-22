import styled, { css } from 'styled-components';
import { useTypeMode } from '../../contexts/themeMode.context';
import Title from '../title/title.component';
import { experiences } from './experiences.files';

// @ts-ignore
import { ReactComponent as CircleIcon } from '../../assets/images/icons/circle_experience.svg';

export const Experience = () => {
  const { typeMode } = useTypeMode();

  return (
    <Wrapper typeMode={typeMode}>
      <Title title="Experiência Profissional" id="experiencia-profissional" />
      <Scroll>
        <Experiences>
          {experiences.map(
            ({ id, company, description, period, role, tools }) => (
              <ExperienceWrapper key={id}>
                <Circle />
                <div>
                  <Period>{period}</Period>
                  <Text>{role}</Text>
                </div>
                <Info typeMode={typeMode}>
                  <Company>{company}</Company>
                  <Text>{description}</Text>
                  <Text style={{ marginTop: '8px' }}>
                    <b>Ferramentas: </b>
                    {tools}
                  </Text>
                </Info>
              </ExperienceWrapper>
            ),
          )}
        </Experiences>
      </Scroll>
    </Wrapper>
  );
};

const Circle = styled(CircleIcon)``;

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
`;

const Info = styled.div<{ typeMode: string }>`
  gap: 4px;
  display: flex;
  height: 250px;
  padding: 16px;
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
    border: 2px solid ${colors.default.stroke};

    &:after {
      border-color: transparent transparent ${colors[`${typeMode}`].neutral}
        transparent;
    }

    &:before {
      border-color: transparent transparent ${colors.default.stroke} transparent;
    }
  `}
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

const Scroll = styled.div`
  @media (max-width: 800px) {
    width: 100%;
    overflow-x: scroll;
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

export default Experience;
