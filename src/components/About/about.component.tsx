import styled from 'styled-components';
import { useTranslation, Trans } from 'react-i18next';

import { ReactComponent as Circle } from '../../assets/images/icons/circle.svg';
import { ReactComponent as Row } from '../../assets/images/icons/row-image.svg';
import jusley from '../../assets/images/jusley.png';
import Title from '../title/title.component';

export const About = () => {
  const { t } = useTranslation();

  return (
    <AboutWrapper>
      <ProfileWrapper>
        <CircleIcon />
        <ProfileZoom>
          <Profile />
        </ProfileZoom>
        <RowIcon />
      </ProfileWrapper>
      <Text>
        <Title title={t('sections.aboutMe')} id={t('about.id')} />
        <Trans i18nKey="about.whoIam" />
      </Text>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  gap: 64px;
  grid-area: about;
  display: flex;
  position: relative;
  align-items: center;
  padding-inline: 70px;

  @media (max-width: 800px) {
    gap: 40px;
    padding-inline: 24px;
    flex-direction: column;
  }

  @media (min-width: 1900px) {
    width: 1240px;
    margin: 0 auto;
  }
`;

const CircleIcon = styled(Circle)`
  left: 10px;
  position: absolute;
`;

const ProfileWrapper = styled.div`
  position: relative;
`;

const Profile = styled.figure`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url(${jusley});
  transition: transform 1s;

  &:hover {
    transform: scale(1.5);
  }
`;

const ProfileZoom = styled.div`
  overflow: hidden;
  width: 225px;
  height: 230px;
  border-radius: 100%;
`;

const RowIcon = styled(Row)`
  left: 0;
  top: 30px;
  position: absolute;
`;

const Text = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 16px;
  }
`;

export default About;
