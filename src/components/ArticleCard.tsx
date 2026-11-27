
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/articles';

type Props = {
  slug: string;
  title?: string;
  category?: string;
  excerpt?: string;
  imageUrl?: string | null;
  imageAlt?: string;
  publishedAt?: string | null;
  featured?: boolean;
};

function getArticleInfo(slug: string) {
  const titles: Record<string, string> = {
    'beauty-routine-opbouwen': 'Een beauty routine opbouwen die je ook echt volhoudt',
    'capsule-wintergarderobe': 'De capsule wintergarderobe',
    'digitale-rust': 'Digitale rust: zo maak je opnieuw ruimte in je hoofd',
    'kleine-gewoontes': 'Kleine gewoontes voor een mooiere dag',
    'laagjes-stylen': 'Laagjes stylen: zo creëer je een stijlvolle winterlook',
    'winterhuid-verzorgen': 'Je winterhuid verzorgen',
    'wintermode-2026': 'Wintermode 2026',
    'winterse-beautytrends': 'Winterse beautytrends',
    'winterse-selfcare': 'Winterse selfcare',
  };

  let category = 'Lifestyle';

  if (
    slug.includes('beauty') ||
    slug.includes('winterhuid')
  ) {
    category = 'Beauty';
  } else if (
    slug.includes('wintermode') ||
    slug.includes('capsule') ||
    slug.includes('laagjes')
  ) {
    category = 'Mode';
  }

  const images: Record<string, string> = {
    Lifestyle: '/images/ochtendmoment.jpg',
    Mode: '/images/persoonlijke-stijl.jpg',
    Beauty: '/images/beautymoment.jpg',
  };

  return {
    title: titles[slug] || slug.replaceAll('-', ' '),
    category,
    image: images[category],
  };
}

export default function ArticleCard({
  slug,
  title,
  category,
  excerpt,
  imageUrl,
  imageAlt,
  publishedAt,
  featured,
}: Props) {
  const fallback = getArticleInfo(slug);
  const articleTitle = title?.trim() || fallback.title;
  const articleCategory = fallback.category;
  const articleImage = imageUrl || fallback.image;

  return (
    <article className={`article-card${featured ? ' article-card-featured' : ''}`}>
      <Link className="card-image" href={`/artikelen/${slug}`}>
        <Image
          src={articleImage}
          alt={imageAlt || articleTitle}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
        <span className="image-category">{articleCategory}</span>
      </Link>

      <div className="card-copy">
        {publishedAt && (
          <p className="eyebrow">{formatDate(publishedAt)}</p>
        )}

        <h3>
          <Link href={`/artikelen/${slug}`}>
            {articleTitle}
          </Link>
        </h3>

        <p>
          {excerpt?.trim() || 'Ontdek meer inspiratie bij Livora.'}
        </p>

        <Link className="text-link" href={`/artikelen/${slug}`}>
          Lees het verhaal <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
