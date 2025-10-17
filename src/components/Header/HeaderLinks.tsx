import { useTranslation } from 'react-i18next';
import { useTypeMode } from '../../contexts/themeMode.context';

import * as S from './Header.style';

interface HeaderLinksType {
  onClick?: () => void;
  open?: boolean | null;
}

export const HeaderLinks = ({ onClick, open }: HeaderLinksType) => {
  const { t } = useTranslation();
  const { typeMode } = useTypeMode();

  const links = [
    { href: t('about.link'), label: t('sections.aboutMe') },
    { href: t('languages.link'), label: t('sections.languages') },
    {
      href: t('experiences.link'),
      label: t('sections.professionalExperience'),
    },
  ];

  return (
    <>
      {links.map(({ href, label }) => (
        <S.LinkHeader
          key={href}
          href={href}
          typeMode={typeMode}
          open={open}
          onClick={onClick}
        >
          {label}
        </S.LinkHeader>
      ))}
    </>
  );
};
