import type { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import { getArticles } from '@/lib/articles';

export const metadata: Metadata = { title: 'Artikelen' };

export default async function ArticlesPage({ searchParams }: { searchParams: Promise<{ rubriek?: string }> }) {
  const { rubriek } = await searchParams;
  const articles = await getArticles();
  const filtered = rubriek ? articles.filter(({ entry }) => entry.category === rubriek) : articles;
  const categories = ['Alles', 'Lifestyle', 'Mode', 'Beauty'];

  return <section className="content-width listing-page"><div className="page-heading"><p className="eyebrow">De Livora selectie</p><h1>Verhalen voor<br /><em>jouw dagelijks leven.</em></h1><p>Inspiratie over stijl, schoonheid en de kleine momenten die groots voelen.</p></div>
    <nav className="filter-list" aria-label="Filter op rubriek">{categories.map((category) => <a className={(rubriek ?? 'Alles') === category ? 'active' : ''} href={category === 'Alles' ? '/artikelen' : `/artikelen?rubriek=${category}`} key={category}>{category}</a>)}</nav>
    {filtered.length ? <div className="article-grid listing-grid">{filtered.map(({ slug, entry }) => <ArticleCard key={slug} slug={slug} {...entry} />)}</div> : <p className="empty-note">Er staan nog geen artikelen in deze rubriek.</p>}
  </section>;
}
