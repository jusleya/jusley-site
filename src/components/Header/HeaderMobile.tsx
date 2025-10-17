import { useTypeMode } from '../../contexts/themeMode.context';
import { HeaderLinks } from './HeaderLinks';

import * as S from './Header.style';

interface HeaderMobileType {
  open: boolean | null;
  menuOpen: () => void;
}

export const HeaderMobile = ({ open, menuOpen }: HeaderMobileType) => {
  const { typeMode, setTypeMode } = useTypeMode();

  function handleOnChange() {
    setTypeMode(typeMode === 'darkMode' ? 'whiteMode' : 'darkMode');
  }

  return (
    <S.MenuMobile open={open} typeMode={typeMode}>
      <S.CloseIcon typeMode={typeMode} onClick={menuOpen} />
      <S.LinksWrapper>
        <HeaderLinks onClick={menuOpen} open={open} />
        <S.SwicthMode htmlFor="checkbox" typeMode={typeMode} open={open}>
          <input
            type="checkbox"
            checked={typeMode === 'darkMode'}
            onChange={handleOnChange}
            aria-label="checkbox"
          />
        </S.SwicthMode>
      </S.LinksWrapper>
    </S.MenuMobile>
  );
};
