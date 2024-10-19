export type LanguageSelect = {
  code: LOCALE;
  name: string;
}[];

export type Locale = (typeof locales)[number];

export enum LOCALE {
  english = "en",
  japan = "ja",
}

export const languages: LanguageSelect = [
  { code: LOCALE.english, name: "English" },
  { code: LOCALE.japan, name: "日本語" },
];

export const locales: LOCALE[] = [LOCALE.english, LOCALE.japan];

export const defaultLocale: LOCALE = LOCALE.english;
