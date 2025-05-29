type TranslatedResource = Record<string, string | Record<string, string>>;
export type TranslatedResources = {
  en: Record<string, TranslatedResource>;
  es: Record<string, TranslatedResource>;
};
