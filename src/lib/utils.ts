export function formatDate(value: string, locale: string): string {
  const date = new Date(value);

  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
