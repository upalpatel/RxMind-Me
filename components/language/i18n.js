import I18n from 'react-native-i18n';

import en from './locales/en.json';
import de from './locales/de.json';

I18n.defaultLocale = 'en';
I18n.locale = 'en';
I18n.fallbacks = true;
I18n.translations = { en, de };

export default I18n;