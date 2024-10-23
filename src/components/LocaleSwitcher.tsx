import { useLocale, useTranslations } from 'next-intl';

import { LOCALE } from '@/i18n/config';

import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: LOCALE.english,
          label: t('en'),
        },
        {
          value: LOCALE.japan,
          label: t('ja'),
        },
      ]}
      label={t('lang')}
    />
  );
}
