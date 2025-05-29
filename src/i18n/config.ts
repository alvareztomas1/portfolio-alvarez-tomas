import { Languages } from '@/constants/languages.constant';

export const defaultNS = 'common';
export const supportedLngs = Object.values(Languages);

export const i18nOptions = {
  fallbackLng: Languages.en,
  supportedLngs,
  defaultNS,
  ns: [defaultNS, 'navbar', 'home'],
  interpolation: { escapeValue: false },
};
