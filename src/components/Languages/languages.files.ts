import reactIcon from '../../assets/images/icons/languages/react.svg';
import typescriptIcon from '../../assets/images/icons/languages/typescript.svg';
import javascriptIcon from '../../assets/images/icons/languages/javascript.svg';
import styledIcon from '../../assets/images/icons/languages/styled-components.svg';
import nextjsIcon from '../../assets/images/icons/languages/nextjs.svg';
import bffIcon from '../../assets/images/icons/languages/bff.svg';
import restqlIcon from '../../assets/images/icons/languages/restql.svg';
import jestIcon from '../../assets/images/icons/languages/jest.svg';

export function getLanguages(t: (key: string) => string) {
  return [
    {
      id: 0,
      name: t('languages.react.name'),
      image: `<img src="${reactIcon}" alt="react" />`,
      time: t('languages.react.time'),
    },
    {
      id: 1,
      name: t('languages.typeScript.name'),
      image: `<img src="${typescriptIcon}" alt="typescript" />`,
      time: t('languages.typeScript.time'),
    },
    {
      id: 2,
      name: t('languages.javaScript.name'),
      image: `<img src="${javascriptIcon}" alt="javascript" />`,
      time: t('languages.javaScript.time'),
    },
    {
      id: 3,
      name: t('languages.styledComponents.name'),
      image: `<img src="${styledIcon}" alt="styled" />`,
      time: t('languages.styledComponents.time'),
    },
    {
      id: 4,
      name: t('languages.next.name'),
      image: `<img src="${nextjsIcon}" alt="next" />`,
      time: t('languages.next.time'),
    },
    {
      id: 5,
      name: t('languages.bff.name'),
      image: `<img src="${bffIcon}" alt="bff" />`,
      time: t('languages.bff.time'),
    },
    {
      id: 6,
      name: t('languages.restql.name'),
      image: `<img src="${restqlIcon}" alt="restql" />`,
      time: t('languages.restql.time'),
    },
    {
      id: 7,
      name: t('languages.jest.name'),
      image: `<img src="${jestIcon}" alt="jest" />`,
      time: t('languages.jest.time'),
    },
  ];
}
