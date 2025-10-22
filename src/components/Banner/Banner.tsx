import { useTranslation } from 'react-i18next';
import { useTypeMode } from '../../contexts/themeMode.context';

import video from '../../assets/videos/banner.mp4';

import * as S from './Banner.style';

export const Banner = () => {
  const { typeMode } = useTypeMode();
  const { t } = useTranslation();

  return (
    <div id="banner-position">
      <S.BannerWrapper src={video} loop autoPlay muted />
      <S.FilterBanner typeMode={typeMode} />
      <S.Name>{t('banner.name')}</S.Name>
      <S.Function>{t('banner.area')}</S.Function>
      <S.Rows />
    </div>
  );
};

export default Banner;
