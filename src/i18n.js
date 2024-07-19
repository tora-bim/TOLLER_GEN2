import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';

i18next
    .use(initReactI18next)
    .use(languageDetector)
    .init({
        debug: true,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    learn: 'Learn React',
                    description: 'how to use i18next',
                }
            },
            ja: {
                translation: {
                    learn: 'Reactを学ぶ',
                    description: 'i18nextの使い方',
                },
            },
        }
    });
