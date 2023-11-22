import styled, { css } from 'styled-components';

interface ButtonType {
  children: React.ReactNode;
  onClick: () => void;
  secondary?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

export const Button = ({
  children,
  onClick,
  secondary,
  width,
  height,
  className = '',
}: ButtonType) => (
  <ButtonStyle
    onClick={onClick}
    secondary={secondary}
    width={width}
    height={height}
    type="button"
    title="button"
    className={className}
  >
    {children}
  </ButtonStyle>
);

const ButtonStyle = styled.button<{
  secondary?: boolean;
  width?: number;
  height?: number;
}>`
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  padding: 8px 16px;
  border-radius: 8px;
  text-align: center;
  border: none;

  ${({ theme: { colors }, width, height }) => css`
    color: ${colors.darkMode.font};
    background-color: ${colors.default.pink};
    width: ${width ? `${width}px` : 'auto'};
    height: ${height ? `${height}px` : '56px'};

    &:hover {
      box-shadow: 0px 8px 32px 0px ${colors.default.shadow};
      background-color: ${colors.default.hoverPink};
    }
  `}
`;

export default Button;
