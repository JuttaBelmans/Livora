
import Image from 'next/image';
import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import { getArticles } from '@/lib/articles';

export default async function HomePage() {
  const articles = await getArticles();
  const featured = articles.find((article) => article.entry.featured) ?? articles[0];
  const others = articles.filter((article) => article.slug !== featured?.slug);

  const categories = [
    {
      name: 'Lifestyle',
      number: '01',
      description: 'Ideeën voor een leven dat bij jou past.',
      color: 'category-pink',
      symbol: '✳',
    },
    {
      name: 'Mode',
      number: '02',
      description: 'Stijl, trends en jouw eigen verhaal.',
      color: 'category-blue',
      symbol: '✺',
    },
    {
      name: 'Beauty',
      number: '03',
      description: 'Een beetje extra aandacht voor jezelf.',
      color: 'category-green',
      symbol: '✿',
    },
  ];

  return (
    <main className="home-page">
      <section className="hero-wrap">
        <div className="hero-topline">
          <span>Een magazine voor jouw moment</span>
          <span>Est. 2026 · België</span>
        </div>

        {featured ? (
          <Link className="hero" href={'/artikelen/' + featured.slug}>
            {featured.entry.imageUrl && (
              <Image
                src={featured.entry.imageUrl}
                alt={featured.entry.imageAlt}
                fill
                priority
                sizes="100vw"
              />
            )}

            <div className="hero-shade" />

            <div className="hero-content">
              <span className="hero-label">
                <span className="hero-label-dot" />
                Uitgelicht · {featured.entry.category}
              </span>

              <p className="hero-pretitle">Ontdek de wereld van Livora</p>

              <h1>
                Inspiratie
                <br />
                voor jouw
                <br />
                <em>eigen leven.</em>
              </h1>

              <p className="hero-description">
                {featured.entry.excerpt}
              </p>

              <span className="hero-button">
                Lees het verhaal <span aria-hidden="true">↗</span>
              </span>
            </div>

            <span className="hero-side-note">LIVE · LOVE · LIVORA</span>
          </Link>
        ) : (
          <div className="hero-empty">
            <div className="hero-empty-decoration">✳</div>
            <p className="eyebrow">Welkom bij Livora</p>
            <h1>
              Een wereld
              <br />
              vol <em>inspiratie.</em>
            </h1>
            <p>Ontdek verhalen die jouw dagelijkse leven mooier maken.</p>
            <Link className="hero-button" href="/artikelen">
              Ontdek Livora <span aria-hidden="true">↗</span>
            </Link>
          </div>
        )}
      </section>

      <section className="intro-strip">
        <span className="intro-star">✳</span>
        <p>Jouw leven. Jouw stijl. Jouw verhaal.</p>
        <span className="intro-caption">Welkom bij Livora</span>
        <span className="intro-star">✳</span>
      </section>

      <section className="welcome-section content-width">
        <div className="welcome-copy">
          <p className="eyebrow">Een beetje meer Livora</p>
          <h2>
            Het leven is
            <br />
            mooier met
            <br />
            <em>inspiratie.</em>
          </h2>
          <p className="welcome-description">
            Van kleine geluksmomenten tot nieuwe ontdekkingen.
            Livora verzamelt inspiratie over lifestyle, mode en beauty.
            Voor vrouwen die graag ontdekken, dromen en hun eigen weg volgen.
          </p>
          <Link className="dark-link" href="/artikelen">
            Ontdek onze verhalen <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="welcome-art">
          <div className="welcome-color-shape shape-one" />
          <div className="welcome-color-shape shape-two" />
          <div className="welcome-sticker">
            <span>YOUR</span>
            <strong>daily</strong>
            <span>INSPIRATION</span>
          </div>
          <span className="welcome-art-caption">MADE FOR YOU · LIVORA</span>
        </div>
      </section>

      <section className="category-band">
        <div className="content-width">
          <div className="category-heading">
            <div>
              <p className="eyebrow">Ontdek jouw wereld</p>
              <h2>
                Waar word
                <br />
                jij <em>blij van?</em>
              </h2>
            </div>
            <span className="category-heading-mark">✳</span>
          </div>

          <div className="category-links">
            {categories.map((category) => (
              <Link
                key={category.name}
                className={`category-card ${category.color}`}
                href={`/artikelen?rubriek=${category.name}`}
              >
                <div className="category-card-top">
                  <span>{category.number} / 03</span>
                  <span className="category-symbol">{category.symbol}</span>
                </div>

                <div className="category-card-bottom">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <span className="category-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block content-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Met liefde geselecteerd</p>
            <h2>
              Verhalen om
              <br />
              <em>van te genieten.</em>
            </h2>
          </div>

          <Link className="text-link" href="/artikelen">
            Alle artikelen <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {others.length > 0 ? (
          <div className="article-grid">
            {others.map(({ slug, entry }) => (
              <ArticleCard key={slug} slug={slug} {...entry} />
            ))}
          </div>
        ) : (
          <div className="empty-note">
            <span>✳</span>
            <p>Binnenkort vind je hier nieuwe verhalen van Livora.</p>
            <Link href="/artikelen">Ontdek onze artikelen ↗</Link>
          </div>
        )}
      </section>

      <section className="quote-band">
        <span className="quote-decoration">“</span>
        <p>Maak ruimte voor de dingen die jou laten stralen.</p>
        <span className="quote-caption">A LITTLE REMINDER FROM LIVORA</span>
        <span className="quote-flower">✿</span>
      </section>

      <section className="newsletter-teaser content-width">
        <div>
          <p className="eyebrow">Blijf geïnspireerd</p>
          <h2>
            Elke dag een
            <br />
            beetje <em>mooier.</em>
          </h2>
          <p>
            Laat je verrassen door nieuwe verhalen, frisse ideeën
            en inspiratie uit de wereld van Livora.
          </p>
        </div>
        <Link className="newsletter-button" href="/artikelen">
          Ontdek Livora <span aria-hidden="true">↗</span>
        </Link>
        <span className="newsletter-decoration">L</span>
      </section>
    </main>
  );
}
