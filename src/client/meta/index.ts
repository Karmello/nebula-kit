import { ComponentMeta } from 'client/definitions'

const allMetas = import.meta.glob('/src/client/meta/*.meta.tsx', {
  eager: true,
  import: 'default',
}) as Record<string, Record<string, ComponentMeta<unknown>>>

export const getMetaSync = (itemKey: string) =>
  Object.entries(allMetas).find(([p]) => p.endsWith(`/${itemKey}.meta.tsx`))?.[1] ?? null
