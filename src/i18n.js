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
                    subtitle: 'Be creative together.',
                }
            },
            ja: {
                translation: {
                    learn: 'Reactを学ぶ',
                    subtitle: '共にクリエイティブを創出する。',
                },
            },
        }
    });
