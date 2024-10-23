'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import { useTransition } from 'react';

import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/lib/services/locale';
import { cn } from '@/lib/utils';

import { Icon } from './icons/Icon';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from './ui/select';

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({ defaultValue, items, label }: Props) {
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    startTransition(() => {
      setUserLocale(value as Locale);
    });
  }

  return (
    <div className="relative">
      <Select defaultValue={defaultValue} onValueChange={onChange}>
        <SelectTrigger
          aria-label={label}
          className={cn('border-0 p-2 shadow-none', {
            'pointer-events-none opacity-60': isPending,
          })}
        >
          <SelectPrimitive.Icon asChild>
            <Icon.Language className="!size-6" />
          </SelectPrimitive.Icon>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                <span className="text-slate-900">{item.label}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
