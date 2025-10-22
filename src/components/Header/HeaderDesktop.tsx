import { useTypeMode } from '../../contexts/themeMode.context';
import { HeaderLinks } from './HeaderLinks';

import * as S from './Header.style';

interface HeaderDesktopType {
  children: React.ReactNode;
}
export const HeaderDesktop = ({ children }: HeaderDesktopType) => {
  const { typeMode, setTypeMode } = useTypeMode();

  function handleOnChange() {
    setTypeMode(typeMode === 'darkMode' ? 'whiteMode' : 'darkMode');
  }

  return (
    <>
      <S.LinksWrapper>
        <HeaderLinks />
      </S.LinksWrapper>
      <S.PositionLanguage>
        <S.SwitchMode htmlFor="checkbox" typeMode={typeMode}>
          <input
            id="checkbox"
            type="checkbox"
            checked={typeMode === 'darkMode'}
            onChange={handleOnChange}
          />
        </S.SwitchMode>
        {children}
      </S.PositionLanguage>
    </>
  );
};
