import type { FC, SVGProps } from 'react';

import * as Icons from '#/index';

type Icon = FC<SVGProps<SVGSVGElement>>;

export const Icon = Object.fromEntries(Object.entries(Icons).map(([name, Component]) => [name, Component])) as Record<
  keyof typeof Icons,
  Icon
>;
