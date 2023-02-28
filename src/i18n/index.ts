import ptBr from './locales/pt_BR.json'
import enUS from './locales/en_US.json'
import { getLocales } from 'expo-localization';
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

export const resources = {
  en: {
    translation: enUS,
  },
  pt: {
    translation: ptBr,
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getLocales()[0].languageCode,
    fallbackLng: 'en',
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n;