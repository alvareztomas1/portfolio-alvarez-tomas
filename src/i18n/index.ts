import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import enHome from '@/i18n/locales/en/home.json';
import enNavbar from '@/i18n/locales/en/navbar.json';
import esHome from '@/i18n/locales/es/home.json';
import esNavbar from '@/i18n/locales/es/navbar.json';
import type { TranslatedResources } from '@/i18n/types';

import { i18nOptions } from './config';

const resources: TranslatedResources = {
  en: {
    navbar: enNavbar,
    home: enHome,
  },
  es: {
    navbar: esNavbar,
    home: esHome,
  },
};

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    ...i18nOptions,
  });

export default i18n;
