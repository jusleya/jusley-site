import styled, { css } from 'styled-components';
import { useTypeMode } from '../../contexts/themeMode.context';

const Title: React.FC<{ title: string }> = ({ title }) => {
  const { typeMode } = useTypeMode();

  return <TitleComponent typeMode={typeMode}>{title}</TitleComponent>;
};

const TitleComponent = styled.h1<{ typeMode: string }>`
  font-size: 32px;
  font-weight: bold;
  position: relative;
  line-height: 121.2%;

  &:before {
    left: 0;
    top: 40px;
    width: 46px;
    content: '';
    height: 4px;
    position: absolute;
    background: ${({ theme: { colors } }) => colors.default.pink};
  }

  ${({ theme: { colors }, typeMode }) => css`
    color: ${colors[`${typeMode}`].font};
  `}
`;

export default Title;
