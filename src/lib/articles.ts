import { createReader } from '@keystatic/core/reader';
import config from '../../keystatic.config';

export const reader = createReader(process.cwd(), config);

export async function getArticles() {
  const articles = await reader.collections.artikelen.all();
  return articles.sort((a, b) =>
    (b.entry.publishedAt ?? '').localeCompare(a.entry.publishedAt ?? ''),
  );
}

export async function getArticle(slug: string) {
  return reader.collections.artikelen.read(slug);
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('nl-BE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00`));
}
