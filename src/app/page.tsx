import Image from 'next/image';
import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import { getArticles } from '@/lib/articles';

export default async function HomePage() {
  const articles = await getArticles();
  const featured = articles.find((article) => article.entry.featured) ?? articles[0];
  const others = articles.filter((article) => article.slug !== featured?.slug);

  return (
    <>
      <section className="hero-wrap">
        <div className="hero-kicker"><span>Jouw dagelijkse dosis inspiratie</span><span>Nr. 01 · Najaar 2026</span></div>
        {featured ? <Link className="hero" href={`/artikelen/${featured.slug}`}>
          <Image src={featured.entry.imageUrl} alt={featured.entry.imageAlt} fill priority sizes="100vw" />
          <div className="hero-shade" />
          <div className="hero-content"><span className="hero-label">Uitgelicht · {featured.entry.category}</span><h1>{featured.entry.title}</h1><p>{featured.entry.excerpt}</p><span className="hero-button">Ontdek het verhaal <span aria-hidden="true">↗</span></span></div>
        </Link> : <div className="empty-feature"><p>Welkom bij Livora</p><h1>Een nieuw verhaal<br />begint hier.</h1><Link className="button" href="/artikelen">Bekijk de artikelen</Link></div>}
      </section>

      <section className="intro-strip"><p>Goed voor jezelf zorgen begint met even stilstaan.</p><span>Leef mooi. Leef op jouw manier.</span></section>

      <section className="section-block content-width">
        <div className="section-heading"><div><p className="eyebrow">Met aandacht gekozen</p><h2>Verhalen om bij stil te staan</h2></div><Link className="text-link" href="/artikelen">Alle artikelen <span aria-hidden="true">→</span></Link></div>
        {others.length > 0 ? <div className="article-grid">{others.map(({ slug, entry }) => <ArticleCard key={slug} slug={slug} {...entry} />)}</div> : <p className="empty-note">Binnenkort vind je hier meer verhalen van Livora.</p>}
      </section>

      <section className="category-band"><div className="content-width"><p className="eyebrow">Waar heb je zin in?</p><h2>Een moment voor jou.</h2><div className="category-links"><Link href="/artikelen?rubriek=Lifestyle">Lifestyle <span>↗</span></Link><Link href="/artikelen?rubriek=Mode">Mode <span>↗</span></Link><Link href="/artikelen?rubriek=Beauty">Beauty <span>↗</span></Link></div></div></section>
    </>
  );
}
