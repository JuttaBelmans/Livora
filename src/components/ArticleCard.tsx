
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/articles';

type Props = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  imageUrl: string | null;
  imageAlt: string;
  publishedAt: string | null;
  featured?: boolean;
};

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
  const articleTitle = title?.trim() || 'Ontdek dit verhaal';
  const articleExcerpt = excerpt?.trim() || 'Lees meer over dit onderwerp bij Livora.';

  return (
    <article
      className={`article-card${featured ? ' article-card-featured' : ''}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#fffdf8',
      }}
    >
      <Link
        className="card-image"
        href={`/artikelen/${slug}`}
        style={{
          display: 'block',
          position: 'relative',
          width: '100%',
          aspectRatio: '4 / 3',
          overflow: 'hidden',
          backgroundColor: '#f3c4d5',
        }}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt || articleTitle}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #f3c4d5, #faf0e8)',
            }}
          />
        )}

        <span className="image-category">{category}</span>
      </Link>

      <div
        className="card-copy"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '12px',
          padding: '22px 4px 26px',
          color: '#171512',
          backgroundColor: '#fffdf8',
          visibility: 'visible',
          opacity: 1,
        }}
      >
        {publishedAt && (
          <p
            className="eyebrow"
            style={{
              display: 'block',
              color: '#ef5638',
              margin: 0,
            }}
          >
            {formatDate(publishedAt)}
          </p>
        )}

        <h3
          style={{
            display: 'block',
            visibility: 'visible',
            opacity: 1,
            color: '#171512',
            fontSize: 'clamp(22px, 2vw, 30px)',
            lineHeight: 1.15,
            fontWeight: 700,
            margin: 0,
            width: '100%',
          }}
        >
          <Link
            href={`/artikelen/${slug}`}
            style={{
              color: '#171512',
              textDecoration: 'none',
            }}
          >
            {articleTitle}
          </Link>
        </h3>

        <p
          style={{
            display: 'block',
            visibility: 'visible',
            opacity: 1,
            color: '#625b55',
            fontSize: '15px',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {articleExcerpt}
        </p>

        <Link
          className="text-link"
          href={`/artikelen/${slug}`}
          style={{
            display: 'inline-flex',
            marginTop: '8px',
            color: '#171512',
            textDecoration: 'none',
            fontWeight: 700,
          }}
        >
          Lees het verhaal <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
