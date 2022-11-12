import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import languageDetector from 'i18next-browser-languagedetector'

import translationCS from './locales/cs/translation.json'
import translationEN from './locales/en/translation.json'

const resources = {
  en: {
    translation: translationEN,
  },
  cs: {
    translation: translationCS,
  },
}

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
