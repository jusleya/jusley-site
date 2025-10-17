/* eslint-disable @typescript-eslint/no-floating-promises */
import { useTranslation } from 'react-i18next';
import { useTypeMode } from '../../contexts/themeMode.context';
import { ReactComponent as EnFlag } from '../../assets/images/icons/en.svg';
import { ReactComponent as PtFlag } from '../../assets/images/icons/ptBr.svg';

import * as S from './Header.style';

interface LanguageSelectorType {
  openDrop: boolean;
  setOpenDrop: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LanguageSelector = ({
  openDrop,
  setOpenDrop,
}: LanguageSelectorType) => {
  const { t, i18n } = useTranslation();
  const { typeMode } = useTypeMode();

  return (
    <S.ContentMode>
      <S.ButtonFlag typeMode={typeMode} onClick={() => setOpenDrop(!openDrop)}>
        {i18n.language === 'en' ? (
          <EnFlag height={14} width={26} />
        ) : (
          <PtFlag height={14} width={26} />
        )}
        <S.ArrowLeft open={openDrop} />
      </S.ButtonFlag>

      {openDrop && (
        <S.Dropdown typeMode={typeMode}>
          <S.ContentDrop
            onClick={() => {
              i18n.changeLanguage('en');
              setOpenDrop(false);
            }}
          >
            <EnFlag height={14} width={26} />
            <p>{t('sections.english')}</p>
          </S.ContentDrop>
          <S.ContentDrop
            onClick={() => {
              i18n.changeLanguage('pt');
              setOpenDrop(false);
            }}
          >
            <PtFlag height={14} width={26} />
            <p>{t('sections.portuguese')}</p>
          </S.ContentDrop>
        </S.Dropdown>
      )}
    </S.ContentMode>
  );
};
