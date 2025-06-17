import { translations } from './translations.js';

export function getTranslation(lang) {
  return translations[lang] || translations.ar;
}

export function getDirection(lang) {
  return lang === 'ar' ? 'rtl' : 'ltr';
}

export function getAlternateLanguage(currentLang) {
  return currentLang === 'ar' ? 'fr' : 'ar';
}

export function getLocalizedPath(path, lang) {
  if (lang === 'ar') {
    return path === '/' ? '/' : path;
  }
  return path === '/' ? '/fr' : `/fr${path}`;
}

export function getCurrentLang(url) {
  const pathname = url.pathname;
  return pathname.startsWith('/fr') ? 'fr' : 'ar';
}