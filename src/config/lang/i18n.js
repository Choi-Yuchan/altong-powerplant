import i18n from "i18next"
import {initReactI18next} from "react-i18next";

import translationEn from './translation.en'
import translationKo from './translation.ko'
import translationJA from './translation.ja'
import translationZH from './translation.zh'

const resource =  {
    en: {
        translation: translationEn
    },
    ko: {
        translation: translationKo
    },
    ja:{
        translation: translationJA
    },
    zh:{
        translation: translationZH
    }
};

i18n
    .use(initReactI18next)  // passes i18n down to react-i18next
    .init({
        resources: resource,
        lng: "ko",
        fallbackLng: 'ko',
        // ns: ['translation'],
        // defaultNS: "translation",
        returnObjects: true,
        debug: true,
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;