import { useTranslation } from 'react-i18next';

import type { Languages } from '@/constants/languages.constant';

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as Languages;

  const changeLanguage = (lng: Languages) => {
    i18n.changeLanguage(lng);
  };

  return {
    currentLanguage,
    changeLanguage,
  };
};
