import React from 'react';
import { useTranslation } from 'react-i18next';

import { useLanguage } from '@/hooks/useLanguage';

export const useNavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleBurgerButtonClick = () => setIsOpen(!isOpen);
  const { currentLanguage, changeLanguage } = useLanguage();
  const { t } = useTranslation('navbar');
  const handleChangeLanguage = () =>
    changeLanguage(currentLanguage === 'en' ? 'es' : 'en');

  return {
    isOpen,
    handleBurgerButtonClick,
    currentLanguage,
    handleChangeLanguage,
    t,
  };
};
