import RNI18n from 'react-native-i18n';
import en from "./locales/en-US";
import fr from "./locales/fr-CA"

RNI18n.fallbacks = true;
RNI18n.translations ={
en,
fr
}
RNI18n.defaultLocale = 'en';

interface Language {
    locale?:string
    key?:string
}

export const tc = (key:string) => RNI18n.t(`common.${key}`);
export const onChangeLocale = ({locale}:Language) => RNI18n.locale = locale;

export default RNI18n;