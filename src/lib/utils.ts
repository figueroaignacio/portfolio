export function formatDate(value: string, locale: string): string {
  const date = new Date(value);

  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function filterByLocale<T extends { locale: string }>(items: T[], locale: string): T[] {
  return items.filter((item) => item.locale === locale);
}
