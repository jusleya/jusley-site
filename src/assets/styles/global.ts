import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    height: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.70);
    ${({ theme: { colors, typography } }) => css`
      font-family: ${typography.family.primary};
      background-color: ${colors.darkMode.background};
    `}
  }
`;
