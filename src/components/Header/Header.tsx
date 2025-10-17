import { useEffect, useState } from 'react';
import { useTypeMode } from '../../contexts/themeMode.context';
import { HeaderMobile } from './HeaderMobile';
import { HeaderDesktop } from './HeaderDesktop';
import { LanguageSelector } from './LanguageSelector';

import * as S from './Header.style';

export const Header = () => {
  const { typeMode } = useTypeMode();
  const [open, setOpen] = useState<boolean | null>(null);
  const [openDrop, setOpenDrop] = useState(false);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const bannerPosition = document.getElementById('banner-position');
    const handleScroll = () => {
      if (bannerPosition)
        setPosition(bannerPosition.getBoundingClientRect().top);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <S.HeaderWrapper position={position} typeMode={typeMode}>
      <S.Container>
        <S.Logo />
        <HeaderMobile open={open} menuOpen={() => setOpen(!open)} />
        <HeaderDesktop>
          <S.PositionLanguage>
            <LanguageSelector openDrop={openDrop} setOpenDrop={setOpenDrop} />
            <S.Menu
              onClick={() => (open === null ? setOpen(true) : setOpen(!open))}
              typeMode={typeMode}
            />
          </S.PositionLanguage>
        </HeaderDesktop>
      </S.Container>
    </S.HeaderWrapper>
  );
};
