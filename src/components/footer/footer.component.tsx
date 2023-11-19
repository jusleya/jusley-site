import styled, { css } from 'styled-components';
import { useTypeMode } from '../../contexts/themeMode.context';
// @ts-ignore
import { ReactComponent as Mily } from '../../assets/images/mily.svg';
// @ts-ignore
import { ReactComponent as CopyrightIcon } from '../../assets/images/icons/copyright.svg';
// @ts-ignore
import { ReactComponent as LinkedinIcon } from '../../assets/images/icons/social/linkedin.svg';
// @ts-ignore
import { ReactComponent as GithubIcon } from '../../assets/images/icons/social/github.svg';

export const Footer = () => {
  const { typeMode } = useTypeMode();

  return (
    <FooterWrapper typeMode={typeMode}>
      <Linha />
      <ContentWrapper>
        <MilyPhoto />
        <Copyright typeMode={typeMode}>
          <CopyrightIcon />
          <span>2023 - Designed by Sté & Developed by Ju</span>
        </Copyright>
        <SocialMedia typeMode={typeMode}>
          <p>{`<Jusley tavares/>`}</p>
          <div>
            <a
              href="https://www.linkedin.com/in/jusleytavares/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com/jusleya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </div>
        </SocialMedia>
      </ContentWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div<{ typeMode: string }>`
  grid-area: footer;
  display: flex;
  flex-direction: column;

  ${({ theme: { colors }, typeMode }) => css`
    background-color: ${colors[`${typeMode}`].footer};
  `}
`;

const Linha = styled.hr`
  height: 3px;
  width: 100%;
  border: none;
  background: linear-gradient(
    270deg,
    #ffaa6c 0%,
    #d94766 30.47%,
    rgba(217, 71, 102, 0) 104.64%
  );
`;

const MilyPhoto = styled(Mily)`
  left: 0;
  bottom: 144px;
  position: absolute;

  @media (max-width: 800px) {
    bottom: 250px;
  }
`;

const ContentWrapper = styled.div`
  gap: 164px;
  display: flex;
  padding: 66px 70px;
  position: relative;
  justify-content: space-around;

  @media (max-width: 800px) {
    gap: 80px;
    padding: 66px 22px;
    flex-direction: column-reverse;
  }

  @media (min-width: 1900px) {
    width: 1240px;
    margin: 0 auto;
  }
`;

const Copyright = styled.p<{ typeMode: string }>`
  gap: 16px;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  line-height: 175%;
  letter-spacing: -0.28px;

  ${({ theme: { colors }, typeMode }) => css`
    path {
      fill: ${colors[`${typeMode}`].font};
    }
  `}
`;

const SocialMedia = styled.div<{ typeMode: string }>`
  gap: 30px;
  display: flex;
  flex-direction: column;
  p {
    font-size: 18px;
    font-weight: 800;
    line-height: 121.2%;
    text-transform: uppercase;
  }

  div {
    gap: 25px;
    display: flex;
    justify-content: center;

    a {
      text-decoration: none;

      ${({ theme: { colors }, typeMode }) => css`
        path {
          fill: ${colors[`${typeMode}`].font};
        }

        &:hover {
          path {
            fill: ${colors[`${typeMode}`].hover};
          }
        }
      `}
    }
  }

  @media (max-width: 800px) {
    align-items: center;
  }
`;

export default Footer;
