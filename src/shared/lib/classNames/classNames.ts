type Mods = Record<string, boolean | string>;

// cls: string, mods?: Mods, additional?: string[]
// второй вариант сделать аргументы не обязательными
export function classNames (cls: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    cls,
    // могут приходить undefained,фильтрация.
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className, value]) => className)
  ]
    .join(' ');
}
