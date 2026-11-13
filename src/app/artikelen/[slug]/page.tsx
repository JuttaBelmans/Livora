import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MarkdocContent from '@/components/MarkdocContent';
import { formatDate, getArticle, getArticles } from '@/lib/articles';

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  return { title: article?.title ?? 'Artikel', description: article?.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();
  const { node } = await article.content();

  return <article className="article-page">
    <div className="article-top content-width"><Link className="back-link" href="/artikelen">← Alle artikelen</Link><p className="eyebrow">{article.category} · {formatDate(article.publishedAt)}</p><h1>{article.title}</h1><p className="article-deck">{article.excerpt}</p>{article.fictional && <span className="fictional-note">Fictief voorbeeldartikel</span>}</div>
    <div className="article-cover"><Image src={article.imageUrl} alt={article.imageAlt} fill priority sizes="100vw" /></div>
    <MarkdocContent node={node} />
    <div className="article-end"><p>Met liefde gelezen?</p><Link className="button" href="/artikelen">Ontdek meer verhalen</Link></div>
  </article>;
}
